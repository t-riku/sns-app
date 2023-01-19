import React from "react";
import me from "public/assets/person/me.jpg";
import Image from "next/image";
import { BsFillImageFill } from "react-icons/bs";
import { AiOutlineGif } from "react-icons/ai";
import { BiFace } from "react-icons/bi";
import { BiMailSend } from "react-icons/bi";

const Share = () => {
  return (
    <div className="w-full h-[170px] shadow-md rounded-xl">
      <div className="p-3">
        <div className="flex items-center">
          <div className="relative aspect-square h-[50px] mr-[10px]">
            <Image
              className="object-cover w-8 h-8 rounded-full cursor-pointer"
              src={me}
              fill
              priority={true}
              placeholder="blur"
              alt="Picture of the author"
            />
          </div>
          <input
            type="text"
            className="border-none w-full focus:outline-none p-2 rounded-md"
            placeholder="近況をツイートしましょう！"
          />
        </div>
        <hr className="m-5" />
        <div className="flex items-center justify-between">
          <div className="flex ml-5">
            <div className="flex items-center mr-5 cursor-pointer hover:translate-y-[2px] transition-all duration-200">
              <BsFillImageFill className="mr-1 text-blue-600" />
              <span className="text-sm font-semibold">写真</span>
            </div>
            <div className="flex items-center mr-5 cursor-pointer hover:translate-y-[2px] transition-all duration-200">
              <AiOutlineGif className="mr-1 text-yellow-600" />
              <span className="text-sm font-semibold">GIF</span>
            </div>
            <div className="flex items-center mr-5 cursor-pointer hover:translate-y-[2px] transition-all duration-200">
              <BiFace className="mr-1 text-pink-600" />
              <span className="text-sm font-semibold">気持ち</span>
            </div>
            <div className="flex items-center mr-5 cursor-pointer hover:translate-y-[2px] transition-all duration-200">
              <BiMailSend className="mr-1 text-indigo-800" />
              <span className="text-sm font-semibold">投稿</span>
            </div>
          </div>
          <button className="px-[17px] py-[6px] bg-green-700 text-white rounded cursor-pointer mr-5">
            投稿
          </button>
        </div>
      </div>
    </div>
  );
};

export default Share;
