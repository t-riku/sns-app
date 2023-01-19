import Rightbar from "@/components/rightbar/Rightbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Timeline from "@/components/timeline/Timeline";
import Topbar from "@/components/topbar/Topbar";
import React from "react";

const Homes = () => {
  return (
    <>
      <Topbar />
      <Sidebar />
      <Timeline />
      <Rightbar />
    </>
  );
};

export default Homes;
