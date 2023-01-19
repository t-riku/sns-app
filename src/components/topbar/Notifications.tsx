import React from "react";
import Image from "next/image";
import me from "public/assets/person/me.jpg";
import { BsChatLeftText } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";

const Notifications = () => {
  return (
    <div className="col-span-4 flex items-center justify-around text-white">
      <div className="flex">
        <div className="mt-[10px] mr-4 cursor-pointer relative">
          <BsChatLeftText />
          <span className="w-[15px] h-[15px] rounded-full absolute top-[-5px] right-[-5px] flex items-center justify-center text-xs bg-red-500">
            1
          </span>
        </div>
        <div className="mt-[10px] mr-4 cursor-pointer relative">
          <IoIosNotifications />
          <span className="w-[15px] h-[15px] rounded-full absolute top-[-5px] right-[-5px] flex items-center justify-center text-xs bg-red-500">
            2
          </span>
        </div>
        <div className="relative aspect-square h-8">
          <Image
            className="object-cover w-8 h-8 rounded-full cursor-pointer"
            src={me}
            fill
            priority={true}
            placeholder="blur"
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
