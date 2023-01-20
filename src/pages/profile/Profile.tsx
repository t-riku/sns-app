import React from "react";
import Rightbar from "@/components/rightbar/Rightbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Timeline from "@/components/timeline/Timeline";
import Topbar from "@/components/topbar/Topbar";
import Image from "next/image";
import backgroundImg from "public/assets/post/3.jpeg";
import me from "public/assets/person/me.jpg";

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="w-full grid grid-cols-12 items-center bg-gray-50">
        <div className="col-span-3">
          <div>
            <Sidebar />
          </div>
        </div>
        <div className="col-span-9">
          <div className="">
            <div className="relative w-full h-[250px]">
              <Image
                className="object-cover w-8 h-8 cursor-pointer"
                src={backgroundImg}
                fill
                priority={true}
                alt="background image"
              />
            </div>
            <div className="relative">
              <div className="absolute left-0 right-0 aspect-square h-[150px] m-auto top-[-110px] border-2 border-white rounded-full">
                <Image
                  className="object-cover w-8 h-8 cursor-pointer rounded-full"
                  src={me}
                  fill
                  priority={true}
                  alt="my image"
                />
              </div>
            </div>
            <div className="flex flex-col items-center pt-[55px]">
              <h4 className="text-2xl font-semibold pb-1">t-riku</h4>
              <span className="">DHU student</span>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-8">
              <Timeline />
            </div>
            <div className="col-span-4">
              <Rightbar profile />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
