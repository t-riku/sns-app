import React from "react";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import event from "public/assets/ad.jpeg";

const Event = () => {
  return (
    <section className="mb-1">
      <div className="flex items-center">
        <AiFillStar className="mr-1 cursor-pointer text-yellow-600 h-10" />
        <span className="text-sm font-light">
          <b>フォロワー限定</b>イベントを開催中！
        </span>
      </div>
      <div className="relative aspect-square max-h-[200px] w-5/6 mt-1 mb-8">
        <Image
          className="object-cover w-8 h-8 cursor-pointer rounded-xl"
          src={event}
          fill
          placeholder="blur"
          alt="event image"
        />
      </div>
    </section>
  );
};

export default Event;
