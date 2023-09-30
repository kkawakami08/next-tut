"use client";
import Link from "next/link";
import React from "react";
import { navLinks } from "@/constants";
import DarkModeToggle from "./DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();
  return (
    <nav className="flex justify-between  w-full flex-none p-10 items-center">
      <Link href="/">Kaori</Link>
      <div className="flex gap-5 items-center">
        <DarkModeToggle />
        {navLinks.map((link) => (
          <Link href={link.url} key={link.id}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button
            onClick={signOut}
            className="bg-emerald-500 text-white rounded-lg py-1 px-3"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
