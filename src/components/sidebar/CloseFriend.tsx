import React from "react";
import Image from "next/image";
import { Users } from "src/Data/dummyData";

const Follow = () => {
  return (
    <section>
      <h4 className="text-lg font-semibold mb-3 mtー7">あなたへのおすすめ</h4>
      <ul className="px-0 m-0">
        {Users.map((user) => {
          return (
            <li
              className="flex items-center mb-4 gap-2 hover:bg-gray-200 cursor-pointer"
              key={user.id}
            >
              <div className="relative aspect-square h-11">
                <Image
                  className="object-cover w-8 h-8 rounded-full"
                  src={user.profilePicture}
                  fill
                  priority={true}
                  alt="friend image"
                />
              </div>
              <span className="text-lg font-semibold">{user.username}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Follow;
