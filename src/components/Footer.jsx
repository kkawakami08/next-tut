import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex justify-between flex-none p-10">
      <p>@2023 Kaori Kawakami Dev</p>
      <div className="flex gap-3 ">
        <Image
          src="/1.png"
          alt="facebook icon"
          width={20}
          height={20}
          className="w-auto"
        />
        <Image src="/2.png" alt="instagram icon" width={20} height={20} />
        <Image src="/3.png" alt="twitter icon" width={20} height={20} />
        <Image src="/4.png" alt="youtube icon" width={20} height={20} />
      </div>
    </div>
  );
};

export default Footer;
