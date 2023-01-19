import React from "react";
import Title from "@/components/topbar/Title";
import Search from "@/components/topbar/Search";
import Notifications from "@/components/topbar/Notifications";

const Topbar = () => {
  return (
    <div className="bg-green-400 h-[50px] w-full grid grid-cols-12 items-center sticky top-0 z-50">
      <Title />

      <Search />

      <Notifications />
    </div>
  );
};

export default Topbar;
