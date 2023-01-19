import React from "react";
import Image from "next/image";
import person01 from "public/assets/person/2.jpeg";
import person02 from "public/assets/person/3.jpeg";
import person03 from "public/assets/person/4.jpeg";

const Follow = () => {
  return (
    <ul className="px-0 m-0">
      <li className="flex items-center mb-4">
        <div className="relative aspect-square h-8 mr-3">
          <Image
            className="object-cover w-8 h-8 cursor-pointer rounded-full"
            src={person01}
            fill
            priority={true}
            placeholder="blur"
            alt="friend image"
          />
        </div>
        <span className="">t-riku</span>
      </li>
      <li className="flex items-center mb-4">
        <div className="relative aspect-square h-8 mr-3">
          <Image
            className="object-cover w-8 h-8 cursor-pointer rounded-full"
            src={person02}
            fill
            priority={true}
            placeholder="blur"
            alt="friend image"
          />
        </div>
        <span className="">tasuku</span>
      </li>
      <li className="flex items-center mb-4">
        <div className="relative aspect-square h-8 mr-3">
          <Image
            className="object-cover w-8 h-8 cursor-pointer rounded-full"
            src={person03}
            fill
            priority={true}
            placeholder="blur"
            alt="friend image"
          />
        </div>
        <span className="">gai</span>
      </li>
    </ul>
  );
};

export default Follow;
