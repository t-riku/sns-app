import React from "react";
import Title from "@/components/topbar/Title";
import Search from "@/components/topbar/Search";
import Notifications from "@/components/topbar/Notifications";

const Topbar = () => {
  return (
    <header className="bg-green-700 h-[60px] w-full grid grid-cols-12 items-center sticky top-0 z-50">
      <Title />

      <Search />

      <Notifications />
    </header>
  );
};

export default Topbar;
