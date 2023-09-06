"use client";

import { useState } from "react";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";

const Theme = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleTheme = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div
      className={`grid place-items-center border rounded-xl my-2 p-2 h-48 relative ${
        isClicked ? "bg-black text-slate-200" : "bg-slate-100 text-black"
      }`}
    >
      {isClicked ? (
        <span className="grid grid-cols-2 items-center font-semibold font-mono">
          <BsMoonStarsFill
            onClick={handleTheme}
            className="w-5 h-5 fill-white cursor-pointer"
          />
          Dark
        </span>
      ) : (
        <span className="grid grid-cols-2 items-center font-semibold font-mono">
          <BsSunFill
            onClick={handleTheme}
            className="w-5 h-5 fill-yellow-500 cursor-pointer"
          />
          Light
        </span>
      )}
      <h1 className="absolute top-2 right-2 font-mono font-bold p-1 rounded-xl cursor-pointer shadow bg-white text-black">
        {"<"}code{">"}
      </h1>
    </div>
  );
};

export default Theme;
