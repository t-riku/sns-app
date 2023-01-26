import React from "react";
import Event from "@/components/rightbar/Event";
import OnlineFriend from "@/components/rightbar/OnlineFriend";
import Promotion from "@/components/rightbar/Promotion";
import UserInfo from "@/components/rightbar/UserInfo";

const Rightbar = ({ user }: any) => {
  const HomeRightBar = () => {
    return (
      <>
        <Event />

        <OnlineFriend />

        <Promotion />
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <>
          <UserInfo />

          <OnlineFriend />
        </>
      </>
    );
  };

  return (
    <div className="col-span-3 h-screen">
      <div className="pt-5 pr-5 pl-5">
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default Rightbar;
