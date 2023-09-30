import Image from "next/image";
import Hero from "public/hero.png"; //when importing like this, you don't need width/height/fill properties
//when using external image links, need to update next.config.js file to include domain of link
//const nextConfig = {
//   images: {
//     domains: ["images.pexels.com"],
//   },
// };
import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="w-full flex grow px-16">
      <div className="flex flex-col justify-center gap-10 px-10">
        <h1 className="text-5xl font-extrabold">
          Better design for your digital products.
        </h1>
        <p className="text-xl">
          Turning your idea into reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button text={"See Our Works"} url={"portfolio"} />
      </div>
      <Image src={Hero} alt="hero image" className=" px-10 " />
    </main>
  );
}
