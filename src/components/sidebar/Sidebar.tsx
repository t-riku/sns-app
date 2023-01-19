import Follow from "@/components/sidebar/Follow";
import Navigation from "@/components/sidebar/Navigation";
import React from "react";

const Sidebar = () => {
  return (
    <div className="col-span-3 h-screen">
      <div className="p-6">
        <Navigation />

        <hr className="my-5" />

        <Follow />
      </div>
    </div>
  );
};

export default Sidebar;
