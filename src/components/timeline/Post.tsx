import Image from "next/image";
import me from "public/assets/person/me.jpg";
import post from "public/assets/post/1.jpeg";
// import like from "public/assets/heart.png";
import React from "react";
import { AiOutlineMore } from "react-icons/ai";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { BiComment } from "react-icons/bi";

const Post = () => {
  return (
    <section className="wーfull shadow-lg rounded-xl mx-0 my-7">
      <div className="p-[10px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative aspect-square h-12">
              <Image
                className="object-cover w-8 h-8 rounded-full cursor-pointer"
                src={me}
                fill
                placeholder="blur"
                alt="Picture of the author"
              />
            </div>
            <span className="text-xl font-semibold mx-[10px]">t-riku</span>
            <span className="text-xs pt-1 pl-1">5分前</span>
          </div>
          <div className="">
            <AiOutlineMore />
          </div>
        </div>
        <div className="my-5">
          <span className="">今日からNextjsの勉強を始めました!</span>
          <div className="relative aspect-square mt-5 max-h-[400px] w-full">
            <Image
              className="object-contain w-8 h-8 cursor-pointer"
              src={post}
              fill
              placeholder="blur"
              alt="Picture of the post"
            />
          </div>
        </div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            {/* <div className="relative aspect-square h-6 mr-2">
              <Image
                className="object-cover w-8 h-8 cursor-pointer"
                src={like}
                fill
                placeholder="blur"
                alt="like icon"
              />
            </div> */}
            <BsFillHandThumbsUpFill className="mr-1 cursor-pointer text-blue-600" />
            <span className="text-[15px]">5人がいいねを押しました</span>
          </div>
          <div className="flex items-center cursor-pointer border-b border-gray-400 mr-1 text-sm">
            <BiComment className="mr-1" />
            <span className="pb-1">4</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
