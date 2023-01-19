import React from "react";
import me from "public/assets/person/me.jpg";
import Image from "next/image";

const PostInput = () => {
  return (
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
  );
};

export default PostInput;
