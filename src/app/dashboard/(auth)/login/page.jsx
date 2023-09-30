"use client";
import { ThemeContext } from "@/context/ThemeContext";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import React, { useContext } from "react";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <p className="flex-1">Loading...</p>;
  }
  if (session.status === "authenticated") {
    router.push("/dashboard");
  }

  const { mode } = useContext(ThemeContext);
  const borderColor =
    mode === "light" ? "border-emerald-500" : "border-emerald-50";
  const inputStyle = `${borderColor} border-2 rounded-lg p-3 text-black`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials", { email, password });
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center flex-1 gap-10">
        <h1 className="font-bold text-4xl">Login</h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-5 "
        >
          <input
            type="text"
            placeholder="Email"
            required
            className={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            required
            className={inputStyle}
          />
          <button className="bg-emerald-500 text-white rounded-lg font-medium p-4 w-40">
            Login
          </button>
        </form>
        <button onClick={() => signIn("google")}>Login with Google</button>
      </div>
    </div>
  );
};

export default Login;
