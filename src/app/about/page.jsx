import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

const About = () => {
  return (
    <div className="w-full flex flex-col gap-10 p-10">
      <div className="w-full h-96 relative ">
        <Image
          src="https://images.pexels.com/photos/8837438/pexels-photo-8837438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="teamwork image"
          fill
          className="object-cover rounded-lg"
        />
        <div className="bg-emerald-500 text-white absolute bottom-0 flex flex-col gap-3 p-5 rounded-bl-lg rounded-tr-lg ">
          <h2 className="font-bold text-5xl">Digital Storytellers</h2>
          <h3 className="font-medium text-xl">
            Handcrafting Award Winning Digital Experiences
          </h3>
        </div>
      </div>
      <div className="flex gap-16 ">
        <div className="flex flex-col gap-10 w-1/2">
          <p className="text-3xl font-bold">Who are we?</p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          </p>
          <p>
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus.
          </p>
          <p>
            Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
          </p>
        </div>
        <div className="flex flex-col gap-10 w-1/2">
          <p className="text-3xl font-bold">What do we do?</p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu.
          </p>
          <p>
            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
            tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
            ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
          </p>
          <Button text={"Contact"} url={"contact"} />
        </div>
      </div>
    </div>
  );
};

export default About;
