import Image from "next/image";
import Link from "next/link";
import React from "react";

const DashboardBlogCard = ({ blogImg, blogTitle, blogId }) => {
  return (
    <div className={`flex h-24 gap-5 items-center `}>
      <div className={`relative`}>
        <Image
          src={blogImg}
          alt={blogTitle}
          width={100}
          height={100}
          className="object-cover w-auto"
          priority={true}
        />
      </div>
      <div className="flex flex-col  gap-2 flex-1">
        <Link href={`/blog/${blogId}`}>
          <p className="text-2xl font-bold">{blogTitle}</p>
        </Link>
      </div>
    </div>
  );
};

export default DashboardBlogCard;
