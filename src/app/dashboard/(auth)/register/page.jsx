"use client";
import React, { useContext, useState } from "react";
// import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ThemeContext } from "@/context/ThemeContext";

const Register = () => {
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      res.status === 200 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setError(err);
    }
  };

  const { mode } = useContext(ThemeContext);
  const borderColor =
    mode === "light" ? "border-emerald-500" : "border-emerald-50";
  const inputStyle = `${borderColor} border-2 rounded-lg p-3 text-black`;

  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-10">
      <h1 className="font-bold text-4xl">Create an Account</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5 "
      >
        <input
          type="text"
          placeholder="Username"
          required
          className={inputStyle}
        />
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
          Register
        </button>
        {error && "Something went wrong!"}
      </form>

      <Link href="/dashboard/login">Login with an existing account</Link>
    </div>
  );
};

export default Register;
