"use client";
import { ThemeContext } from "@/context/ThemeContext";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import useSWR from "swr";
import DashboardBlogCard from "@/components/DashboardBlogCard";

const Dashboard = () => {
  const { mode } = useContext(ThemeContext);
  const borderColor =
    mode === "light" ? "border-emerald-500" : "border-emerald-50";
  const inputStyle = `${borderColor} border-2 rounded-lg p-3 w-3/4`;

  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, mutate, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );
  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const description = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;
    console.log("submitting...");
    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          description,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (blogId) => {
    try {
      await fetch(`/api/posts/${blogId}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className="flex-1 flex ">
        <div className="flex flex-col gap-3 p-10 w-1/2 pt-16">
          {isLoading
            ? "loading"
            : data?.map((post) => (
                <div className="flex items-center gap-3" key={post._id}>
                  <div
                    className="bg-red-500 w-7 h-7 rounded-lg flex items-center justify-center cursor-pointer"
                    onClick={() => {
                      handleDelete(post._id);
                    }}
                  >
                    <p className="text-white text-sm font-bold">X</p>
                  </div>
                  <DashboardBlogCard
                    blogTitle={post.title}
                    blogId={post._id}
                    blogImg={post.img}
                  />
                </div>
              ))}
        </div>
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col items-center w-1/2 justify-center gap-5 p-10 "
        >
          <p className="font-bold text-3xl">Create a new post</p>
          <input type="text" placeholder="Title" className={inputStyle} />
          <input type="text" placeholder="Description" className={inputStyle} />
          <input type="text" placeholder="Image" className={inputStyle} />
          <textarea
            placeholder="Content"
            cols="30"
            rows="6"
            className={inputStyle}
          />
          <button className="bg-emerald-500 text-white rounded-lg font-medium p-4 w-40">
            Post
          </button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
