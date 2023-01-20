import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineMore } from "react-icons/ai";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { BsHandThumbsUp } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { Users } from "src/Data/dummyData";

const Post = ({ post }: any) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, SetIsLiked] = useState(false);

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    SetIsLiked(!isLiked);
  };
  return (
    <section className="wーfull shadow-lg rounded-xl mx-0 my-7">
      <div className="p-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative aspect-square h-12">
              <Image
                className="object-cover w-8 h-8 rounded-full cursor-pointer"
                src={
                  Users.filter((users) => users.id === post.id)[0]
                    .profilePicture
                }
                fill
                // placeholder="blur"
                alt="Picture of the author"
              />
            </div>
            <span className="text-xl font-semibold mx-[10px]">
              {Users.filter((users) => users.id === post.id)[0].username}
            </span>
            <span className="text-xs pt-1 pl-1">{post.date}</span>
          </div>
          <div className="">
            <AiOutlineMore />
          </div>
        </div>
        <div className="my-5">
          <span className="p-3 my-4">{post.desc}</span>
          <div className="relative aspect-square mt-5 max-h-[400px] w-full">
            <Image
              className="object-contain w-8 h-8 cursor-pointer"
              src={post.photo}
              fill
              // placeholder="blur"
              alt="Picture of the post"
            />
          </div>
        </div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            {isLiked ? (
              <BsFillHandThumbsUpFill
                className="mr-1 cursor-pointer text-blue-600"
                onClick={() => handleLike()}
              />
            ) : (
              <BsHandThumbsUp
                className="mr-1 cursor-pointer text-blue-600"
                onClick={() => handleLike()}
              />
            )}
            {/* <BsFillHandThumbsUpFill
              className="mr-1 cursor-pointer text-blue-600"
              onClick={() => handleLike()}
            /> */}
            <span className="text-[15px]">{like}</span>
          </div>
          <div className="flex items-center cursor-pointer border-b border-gray-400 mr-1 text-sm">
            <BiComment className="mr-1" />
            <span className="pb-1">{post.comment}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
