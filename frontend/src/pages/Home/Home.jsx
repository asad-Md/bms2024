import { Gps, MagnifyingGlass } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { useNavigate, useViewTransitionState } from "react-router-dom";

const Home = () => {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInput = useRef();
  const navigate = useNavigate();
  function handleGetLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      navigate(
        `/crops?lat=${position.coords.latitude}&long=${position.coords.longitude}`
      );
    });
  }

  async function handleGetCoordsFromQuery(){
    const query = searchInput.current.value;
    const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${query}&format=json`);
    const data = await res.json();
    console.log(data);
    navigate(
      `/crops?lat=${data[0].lat}&long=${data[0].lon}`
    );

  }
  return (
    <section className="size-full py-16 flex flex-col items-center justify-center gap-4">
      <AnimatePresence>
        {searchExpanded && (
          <>
            <motion.div
              onClick={() => setSearchExpanded(false)}
              className="fixed size-full z-50 bg-black/10 flex items-center justify-center"
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 1, opacity: 0, y: "100%" }}
                animate={{ scale: 1, opacity: 1, y: "0%" }}
                exit={{ scale: 1, opacity: 0 }}
                transition={{
                  ease: "circOut",
                  duration: 0.2
                }}
                className="fixed w-[40vw] h-[15vh] p-4 z-50 bg-white border-2 border-black/40 shadow-xl shadow-black/20 rounded-2xl flex items-center"
              >
                <input
                
                  ref={searchInput}
                  type="text"
                  placeholder="Ahmedabad"
                  className="outline-none text-xl rounded-full p-4"

                />
                <button onClick={handleGetCoordsFromQuery} className="ml-auto h-full bg-accent-800 hover:bg-accent-900 aspect-square rounded-md flex items-center justify-center border-2 border-transparent hover:border-black">
                  <MagnifyingGlass></MagnifyingGlass>
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <div className="fixed size-full  -z-10">
        <img
          src="/backgrounds/flowers.jpg"
          className="size-full object-cover opacity-10 contrast-200 select-none"
          alt=""
        />
      </div>
      <div className="text-2xl">How do you want to go about it? 🌿</div>
      <div className=" flex  gap-2">
        <SelectionButton
          onClick={handleGetLocation}
          icon={<Gps />}
          title={"Use Current Location"}
        ></SelectionButton>
        <SelectionButton
          onClick={() => {
            setSearchExpanded(true)
          }}
          icon={<MagnifyingGlass></MagnifyingGlass>}
          title={"Enter Area Name"}
        ></SelectionButton>
      </div>
    </section>
  );
};

const SelectionButton = ({ children, title, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-4 w-[30vh] bg-accent-800 group rounded-full flex items-center justify-start gap-2 border-2 hover:bg-accent-900 border-transparent hover:border-black  shadow-black transition-shadow"
    >
      {icon}
      <div className="font-medium group-hover:font-semibold transition-all">
        {title}
      </div>
    </button>
  );
};

export default Home;
