import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blogImg, blogDescription, blogTitle, blogId }) => {
  return (
    <div className={`flex h-60 gap-16 `}>
      <div className={`relative w-96`}>
        <Image src={blogImg} alt={blogTitle} fill className="object-cover" />
      </div>
      <div className="flex flex-col  gap-5 flex-1">
        <Link href={`/blog/${blogId}`}>
          <p className="text-4xl font-bold">{blogTitle}</p>
        </Link>
        <p>{blogDescription}</p>
      </div>
    </div>
  );
};

export default BlogCard;
