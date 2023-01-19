import Post from "@/components/timeline/Post";
import Share from "@/components/timeline/Share";
import React from "react";

const Timeline = () => {
  return (
    <div className="col-span-5 h-screen">
      <div className="p-5">
        <Share />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Timeline;
