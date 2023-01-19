import React from "react";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import event from "public/assets/post/1.jpeg";
import person01 from "public/assets/person/2.jpeg";
import person02 from "public/assets/person/3.jpeg";
import person03 from "public/assets/person/4.jpeg";

const Rightbar = () => {
  return (
    <div className="col-span-4 h-screen">
      <div className="">
        <div className="">
          <AiFillStar className="mr-1 cursor-pointer text-yellow-600" />
          <span className="">
            <b>フォロワー限定</b>イベントを開催中！
          </span>
        </div>
        <div className="relative aspect-square h-6">
          <Image
            className="object-cover w-8 h-8 cursor-pointer"
            src={event}
            fill
            placeholder="blur"
            alt="event image"
          />
        </div>
        <h4 className="">オンラインの友達</h4>
        <ul className="px-0 m-0">
          <li className="flex items-center mb-4">
            <div className="">
              <div className="relative aspect-square h-11 mr-3">
                <Image
                  className="object-cover w-8 h-8 cursor-pointer rounded-full"
                  src={person01}
                  fill
                  priority={true}
                  placeholder="blur"
                  alt="friend image"
                />
              </div>
              <span className=""></span>
            </div>
            <span className="text-lg">t-riku</span>
          </li>
          <li className="flex items-center mb-4">
            <div className="">
              <div className="relative aspect-square h-11 mr-3">
                <Image
                  className="object-cover w-8 h-8 cursor-pointer rounded-full"
                  src={person02}
                  fill
                  priority={true}
                  placeholder="blur"
                  alt="friend image"
                />
              </div>
              <span className=""></span>
            </div>
            <span className="text-lg">tasuku</span>
          </li>
          <li className="flex items-center mb-4">
            <div className="">
              <div className="relative aspect-square h-11 mr-3">
                <Image
                  className="object-cover w-8 h-8 cursor-pointer rounded-full"
                  src={person03}
                  fill
                  priority={true}
                  placeholder="blur"
                  alt="friend image"
                />
              </div>
              <span className=""></span>
            </div>
            <span className="text-lg">gai</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
