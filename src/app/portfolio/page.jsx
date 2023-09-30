import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Portfolio",
  description: "Our Portfolio",
};

const Portfolio = () => {
  return (
    <div className="flex flex-col gap-5 flex-1">
      <p className="font-medium text-3xl flex-none">Choose a gallery</p>
      <div className="grid grid-cols-3  flex-1 gap-5">
        <div className="bg-[url('/illustration.png')] bg-cover bg-no-repeat flex items-end justify-end text-white p-5 rounded-lg border-2 border-white">
          <Link href="/portfolio/illustrations" className="text-3xl font-bold">
            Illustrations
          </Link>
        </div>
        <div className="bg-[url('/websites.jpg')] bg-cover bg-no-repeat flex items-end justify-end text-white p-5 rounded-lg border-2 border-white">
          <Link href="/portfolio/websites" className="text-3xl font-bold">
            Websites
          </Link>
        </div>
        <div className="bg-[url('/apps.jpg')] bg-cover bg-no-repeat flex items-end justify-end text-white p-5 rounded-lg border-2 border-white">
          <Link href="/portfolio/applications" className="text-3xl font-bold">
            Applications
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
