"use client";
import Button from "@/components/Button";
import Image from "next/image";
import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (category) => {
  const categoryData = items[category]; //items.application items.illustration etc
  if (categoryData) {
    return categoryData;
  } else {
    return notFound();
  }
};

async function generateMetadata({ params }) {
  const category = await getData(params.category);
  return {
    title: category,
    description: "Our portfolio",
  };
}

const Category = ({ params }) => {
  const { category } = params;
  const categoryArr = getData(category);

  const { mode } = useContext(ThemeContext);
  const textColor = mode === "light" ? "text-emerald-800" : "text-white";

  const capitalized =
    params.category.charAt(0).toUpperCase() + params.category.slice(1);

  return (
    <div className="flex flex-col gap-16 ">
      <h2 className={`font-semibold text-3xl flex-none ${textColor}`}>
        {capitalized}
      </h2>
      {categoryArr.map((item) => (
        <div className=" flex h-96 gap-10 odd:flex-row-reverse" key={item.id}>
          <div className="flex flex-col justify-center gap-5 flex-1">
            <p className="text-4xl font-bold">{item.title}</p>
            <p>{item.desc}</p>
            <Button text={"See More"} url={""} />
          </div>
          <div className="relative flex-1">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
