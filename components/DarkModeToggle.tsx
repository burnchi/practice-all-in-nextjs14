"use client"
import React, { useContext } from "react";
// import { ThemeContext } from "@/app/context/ThemeContext";
import { ThemeContext } from "@/app/context/ThemeContext1";

const DarkModeToggle = () => {
  const { toggle,mode } = useContext(ThemeContext);
  return (
    <div className=" fixed right-20">

    <div className="w-[42px] h-[24px] border-solid border-[1.5px] border-[#53c28b70] rounded-[30px] flex items-center justify-between p-[2px] relative cursor-pointer  " onClick={toggle}>
      <div className="text-[12px]">🌙</div>
      <div className="text-[12px]">🔆</div>
      <div
        className="w-[15px] h-[15px] bg-[#53c28b] rounded-[50%] absolute" 
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
    </div>
  );
};

export default DarkModeToggle;