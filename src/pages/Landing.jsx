import React from "react";
import { useNavigate } from "react-router-dom";

//shiny h!

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className='gradient-text text-5xl flex justify-center'>smthng</h1>
      <div className='flex justify-center space-x-4 '>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ' onClick={() => navigate("/yes")} >
          Yes
        </button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ' onClick={() => navigate("/no")} >
          No
        </button>
      </div>
    </div>
  );
}
