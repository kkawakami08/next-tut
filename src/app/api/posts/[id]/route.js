import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (req, { params }) => {
  const { id } = params;
  try {
    await connect(); //connect to mongo
    const post = await Post.findById(id); //fetch specific post
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("DB error", { status: 500 });
  }
};
export const DELETE = async (req, { params }) => {
  const { id } = params;
  try {
    await connect(); //connect to mongo
    await Post.findByIdAndDelete(id); //fetch specific post
    return new NextResponse("post deleted", { status: 200 });
  } catch (error) {
    return new NextResponse("DB error", { status: 500 });
  }
};
