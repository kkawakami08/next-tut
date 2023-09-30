import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt, { hash } from "bcryptjs";
import User from "@/models/User";

export const POST = async (request) => {
  //request body contains form data from register page
  const { name, email, password } = await request.json();

  await connect();
  const hashedPassword = await bcrypt.hash(password, 5);

  //don't want to save actual password to db, will encrypt then save
  const newUser = new User({ name, email, password: hashedPassword }); //following User model
  try {
    await newUser.save(); //save to mongo

    return new NextResponse("User has been created", { status: 200 });
  } catch (error) {
    return new NextResponse("NOPE", { status: 500 });
  }
};
