import React, { useEffect, useState } from "react";
import Rightbar from "@/components/rightbar/Rightbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Timeline from "@/components/timeline/Timeline";
import Topbar from "@/components/topbar/Topbar";
import Image from "next/image";
import backgroundImg from "public/assets/post/3.jpeg";
import me from "public/assets/person/me.jpg";
import axios from "axios";
import { useRouter } from "next/router";

const Profile = () => {
  const [user, setUser] = useState<any>({});
  const username = useRouter();
  console.log(username.query);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(
        `http://localhost:4000/api/users?username=t-riku`
        // `http://localhost:4000/api/users?username=${username}`
      );
      setUser(response.data);
    };
    fetchUser();
  }, []);
  return (
    <>
      <Topbar />
      <div className="w-full grid grid-cols-12 bg-gray-50">
        <div className="col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-9">
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
            <div className="flex flex-col items-center pt-[55px]">
              <h4 className="text-2xl font-semibold pb-1">{user.username}</h4>
              <span className="">{user.desc}</span>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-8">
              {/* 下記のusernameが存在している場合はTimelineを書き換える。usernameのpropsがあるのかないのかで分岐させる。 */}
              <Timeline username="t-riku" />
            </div>
            <div className="col-span-4">
              {/* profileがあるかないかでRightbarのレイアウトを切り替える */}
              <Rightbar user={user} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
