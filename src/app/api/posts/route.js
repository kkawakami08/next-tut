import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "../../../models/Post";

export const GET = async (request) => {
  // api/posts?username=${session.data.user.name}
  const url = new URL(request.url);

  const username = url.searchParams.get("username");

  try {
    await connect(); //connect to mongo
    const posts = await Post.find(username && { username }); //fetch all posts

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("DB error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newPost = new Post(body);

  try {
    await connect(); //connect to mongo
    await newPost.save();
    return new NextResponse("Post has been uploaded", { status: 201 });
  } catch (error) {
    return new NextResponse("DB error", { status: 500 });
  }
};
