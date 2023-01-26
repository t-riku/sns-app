import Rightbar from "@/components/rightbar/Rightbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Timeline from "@/components/timeline/Timeline";
import Topbar from "@/components/topbar/Topbar";
import React from "react";

const Homes = () => {
  return (
    <div className="bg-gray-50">
      <Topbar />
      <div className="w-full grid grid-cols-12 items-center">
        <Sidebar />
        <Timeline />
        <Rightbar />
      </div>
    </div>
  );
};

export default Homes;
