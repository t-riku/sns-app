import React from "react";
import Image from "next/image";
import me from "public/assets/person/1.jpeg";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChatLeftText } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";

const Topbar = () => {
  return (
    <div className="bg-green-400 h-[50px] w-full grid grid-cols-12 items-center sticky top-0 z-50">
      <div className="col-span-3">
        <span className="text-2xl text-white ml-5 bold">SNS App</span>
      </div>
      <div className="col-span-5">
        <div className="w-full h-7 bg-white rounded-3xl flex items-center">
          <AiOutlineSearch className="text-xl ml-2 mr-1" />
          <input
            type="text"
            className="border-none w-4/5 focus:outline-none"
            placeholder="探し物は何ですか？"
          />
        </div>
      </div>
      <div className="col-span-4 flex items-center justify-around text-white">
        <div className="flex">
          <div className="mt-2 mr-4 cursor-pointer relative">
            <BsChatLeftText />
            <span className="w-[15px] h-[15px] rounded-full absolute top-[-5px] right-[-5px] flex items-center justify-center text-xs bg-red-500">
              1
            </span>
          </div>
          <div className="mt-2 mr-4 cursor-pointer relative">
            <IoIosNotifications />
            <span className="w-[15px] h-[15px] rounded-full absolute top-[-5px] right-[-5px] flex items-center justify-center text-xs bg-red-500">
              2
            </span>
          </div>
          <div className="relative aspect-square h-8">
            <Image
              className="object-contain w-8 h-8 rounded-full cursor-pointer"
              src={me}
              fill
              priority={true}
              placeholder="blur"
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
