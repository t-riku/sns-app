import React from "react";
import Image from "next/image";
import { Users } from "src/Data/dummyData";

const OnlineFriend = () => {
  return (
    <section className="my-9">
      <h4 className="text-lg font-semibold mb-3">オンラインの友達</h4>
      <ul className="px-0 m-0">
        {Users.map((user: any) => {
          return (
            <li
              className="flex items-center mb-4 gap-2 hover:bg-gray-200 cursor-pointer"
              key={user.id}
            >
              <div className="relative">
                <div className="aspect-square h-11">
                  <Image
                    className="object-cover w-8 h-8 rounded-full"
                    src={user.profilePicture}
                    fill
                    priority={true}
                    alt="friend image"
                  />
                </div>
                <span className="absolute bg-white aspect-square w-[13px] rounded-full top-[1px] left-[1px] border border-black"></span>
              </div>
              <span className="text-lg font-semibold">{user.username}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default OnlineFriend;
