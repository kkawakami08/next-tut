import React from "react";
import Link from "next/link";

const Button = ({ url, text }) => {
  return (
    <Link href={`/${url}`}>
      <button className="bg-emerald-500 text-white rounded-lg font-medium p-4 w-40">
        {text}
      </button>
    </Link>
  );
};

export default Button;
