"use client";

import React, { useContext } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { ThemeContext } from "../../context/ThemeContext";

const metadata = {
  title: "Contact",
  description: "Contact Us",
};

const Contact = () => {
  const { mode } = useContext(ThemeContext);
  const borderColor =
    mode === "light" ? "border-emerald-500" : "border-emerald-50";
  const inputStyle = `${borderColor} border-2 rounded-lg p-3`;
  return (
    <div className="flex flex-col items-center gap-16 w-full p-10 grow">
      <h2 className="text-5xl font-bold">Let's keep in Touch</h2>
      <div className="relative flex w-full flex-1 justify-center items-center gap-16">
        <Image
          src="/contact.png"
          alt="Contact image"
          width={400}
          height={400}
          className=""
        />
        <form className="flex flex-col gap-5 w-1/3">
          <input type="text" placeholder="Name" className={inputStyle} />
          <input type="email" placeholder="Email" className={inputStyle} />
          <textarea placeholder="Message" className={`${inputStyle} h-40`} />
          <Button text={"Send"} url="/" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
