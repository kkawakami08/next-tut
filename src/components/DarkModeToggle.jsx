"use client";

import React, { useContext } from "react";
import styles from "./darkModeToggle.module.css";
import { ThemeContext } from "../context/ThemeContext";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  const direction = mode === "light" ? "left-[2px]" : "right-[2px]";
  return (
    <div
      className="w-[42px] h-[24px] border-[1.5px] border-emerald-500 rounded-full flex items-center p-2 cursor-pointer relative "
      onClick={toggle}
    >
      <div className="text-[12px]">🌙</div>
      <div className="text-[12px]">🔆</div>
      <div
        className={`w-[15px] h-[15px] bg-emerald-500 rounded-full absolute ${direction}`}
      />
    </div>
  );
};

export default DarkModeToggle;
