import React from "react";

const Crops = () => {
  return <section className="size-full py-16 flex flex-col gap-4 items-center justify-center">
    <div className="text-2xl font-medium" >You can grow these here</div>

    <div className="flex gap-4" >
        <Crop></Crop>
        <Crop></Crop>
        <Crop></Crop>
        <Crop></Crop>
    </div>
   
  </section>;
};

const Crop = () => {
    return <>
        <button className="border-2 h-48 aspect-[0.66] border-black"></button>
    </>
}

export default Crops;
