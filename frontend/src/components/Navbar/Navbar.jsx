import React from "react";
import { MagnifyingGlass, QuestionMark } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-16 border-b-2 border-black/20 flex items-center p-4 z-50 backdrop-blur-sm bg-white/60">
      <Link to="/" className="text-2xl font-medium">🌿 SOIL.AI</Link>
      <div className="ml-auto flex items-center gap-2 h-12">
        <div className="size-fit h-full flex items-center relative group">
          <div className="absolute left-0 h-full aspect-square pointer-events-none flex items-center justify-center group-focus-within:text-black text-black/50">
            <MagnifyingGlass></MagnifyingGlass>
          </div>
          <input
            type="text"
            placeholder="Ramanagara"
            className="outline-none transition-all shadow-black h-full border-2 border-black/20 focus:border-accent-900 bg-white rounded-full px-4 pl-10 py-2 "
          />
        </div>
        <button className="h-full aspect-square p-2 bg-accent-800 hover:bg-accent-900 border-2 border-transparent hover:border-black flex items-center transition-all justify-center rounded-full hover:shadow-xl shadow-black">
          <QuestionMark></QuestionMark>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
