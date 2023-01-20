import React from "react";
import Image from "next/image";
import person01 from "public/assets/person/2.jpeg";
import person02 from "public/assets/person/3.jpeg";
import person03 from "public/assets/person/4.jpeg";

const OnlineFriend = () => {
  return (
    <section className="my-9">
      <h4 className="text-lg font-semibold mb-3">オンラインの友達</h4>
      <ul className="px-0 m-0">
        <li className="flex items-center mb-4 gap-2">
          <div className="relative">
            <div className="aspect-square h-11">
              <Image
                className="object-cover w-8 h-8 cursor-pointer rounded-full"
                src={person01}
                fill
                priority={true}
                placeholder="blur"
                alt="friend image"
              />
            </div>
            <span className="absolute bg-white aspect-square w-[13px] rounded-full top-[1px] left-[1px] border border-black"></span>
          </div>
          <span className="text-lg font-semibold">t-riku</span>
        </li>
        <li className="flex items-center mb-4 gap-2">
          <div className="relative">
            <div className="aspect-square h-11">
              <Image
                className="object-cover w-8 h-8 cursor-pointer rounded-full"
                src={person02}
                fill
                priority={true}
                placeholder="blur"
                alt="friend image"
              />
            </div>
            <span className="absolute bg-white aspect-square w-[13px] rounded-full top-[1px] left-[1px] border border-black"></span>
          </div>
          <span className="text-lg font-semibold">kouta</span>
        </li>
        <li className="flex items-center mb-4 gap-2">
          <div className="relative">
            <div className="aspect-square h-11">
              <Image
                className="object-cover w-8 h-8 cursor-pointer rounded-full"
                src={person03}
                fill
                priority={true}
                placeholder="blur"
                alt="friend image"
              />
            </div>
            <span className="absolute bg-white aspect-square w-[13px] rounded-full top-[1px] left-[1px] border border-black"></span>
          </div>
          <span className="text-lg font-semibold">tatuki</span>
        </li>
      </ul>
    </section>
  );
};

export default OnlineFriend;
