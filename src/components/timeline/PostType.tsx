import React from "react";
import { BsFillImageFill } from "react-icons/bs";
import { AiOutlineGif } from "react-icons/ai";
import { BiFace } from "react-icons/bi";
import { BiMailSend } from "react-icons/bi";

const PostType = () => {
  return (
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
  );
};

export default PostType;
