import React from "react";
import Event from "@/components/rightbar/Event";
import OnlineFriend from "@/components/rightbar/OnlineFriend";
import Promotion from "@/components/rightbar/Promotion";

const Rightbar = () => {
  return (
    <div className="col-span-3 h-screen">
      <div className="pt-5 pr-5 pl-5">
        <Event />

        <OnlineFriend />

        <Promotion />
      </div>
    </div>
  );
};

export default Rightbar;
