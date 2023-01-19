import Rightbar from "@/components/rightbar/Rightbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Timeline from "@/components/timeline/Timeline";
import Topbar from "@/components/topbar/Topbar";
import React from "react";

const Homes = () => {
  return (
    <>
      <Topbar />
      <div className="w-full grid grid-cols-12 items-center bg-gray-50">
        <Sidebar />
        <Timeline />
        <Rightbar />
      </div>
    </>
  );
};

export default Homes;
