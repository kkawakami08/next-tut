import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

async function getPost(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    next: { revalidate: 10 },
  });
  if (!res.ok) notFound();
  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.id);
  return {
    title: post.title,
    description: post.description,
  };
}

const BlogPost = async ({ params }) => {
  const { id } = params;
  const post = await getPost(id);

  return (
    <div className="flex flex-col gap-10 p-10 grow">
      <div className="flex h-72 gap-16">
        <div className="flex-1 flex flex-col justify-between">
          <h2 className="font-medium text-2xl">{post.title}</h2>
          <p>{post.description}</p>
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 ">
              <Image
                src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="john doe avatar"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <p>{post.username}</p>
          </div>
        </div>
        <div className="relative flex-1">
          <Image src={post.img} alt="animals" fill className="object-cover" />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
