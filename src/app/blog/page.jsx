import React from "react";
import BlogCard from "@/components/BlogCard";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    next: { revalidate: 10 },
  });
  if (!res.ok) throw new Error("Couldn't fetch data");
  return res.json();
}
export const metadata = {
  title: "Blog",
  description: "Blog",
};

const Blog = async () => {
  const postData = await getData();
  console.log(postData);
  return (
    <div className="flex flex-col gap-5 p-10 grow">
      {postData.map((post) => (
        <BlogCard
          key={post._id}
          blogTitle={post.title}
          blogDescription={post.description}
          blogId={post._id}
          blogImg={post.img}
        />
      ))}
    </div>
  );
};

export default Blog;
