"use client";

import { useState } from "react";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import { AiOutlineBlock } from "react-icons/ai";
import { PiGithubLogo } from "react-icons/pi";
import { RiLinkedinLine } from "react-icons/ri";
import Theme from "@/components/theme";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

  const handleTheme = () => {
    setIsClicked(!isClicked);
  };
  return (
    <section
      className={`min-h-screen ${
        isClicked ? "bg-black text-slate-200" : "bg-white text-black"
      }`}
    >
      <div className="sticky top-0 z-50 backdrop-blur h-20 grid grid-cols-2 place-items-center border-b">
        <span className="grid grid-cols-2 gap-2 sm:gap-5 items-center text-lg sm:text-2xl font-bold font-mono">
          <AiOutlineBlock className="w-8 h-8 sm:w-10 sm:h-10 justify-self-end" />
          Components
        </span>
        <span className="grid grid-cols-2 sm:gap-10 items-center justify-items-end sm:justify-items-center">
          {isClicked ? (
            <span className="grid grid-cols-2 items-center text-sm font-semibold font-mono">
              <BsMoonStarsFill
                onClick={handleTheme}
                className="w-4 h-4 sm:;w-5 sm:h-5 fill-white cursor-pointer"
              />
              <h1 className="hidden sm:block">Shady</h1>
            </span>
          ) : (
            <span className="grid grid-cols-2 items-center justify-items-end sm:justify-items-center text-sm font-semibold font-mono">
              <BsSunFill
                onClick={handleTheme}
                className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-500 cursor-pointer"
              />
              <h1 className="hidden sm:block">Sunny</h1>
            </span>
          )}
          <span className="grid grid-cols-2 gap-2 sm:gap-3 items-center justify-self-end">
            <PiGithubLogo className="w-4 h-4 sm:w-6 sm:h-6 cursor-pointer" />
            <RiLinkedinLine className="w-4 h-4 sm:w-6 sm:h-6 cursor-pointer" />
          </span>
        </span>
      </div>
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 min-h-screen p-5">
        <div className="pl-5 py-5">
          <h2 className="sm:text-lg font-semibold">Theme</h2>
          <Theme />
        </div>
        <div>components</div>
        <div>components</div>
        <div>components</div>
      </section>
    </section>
  );
}
