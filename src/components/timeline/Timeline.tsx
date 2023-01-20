import Post from "@/components/timeline/Post";
import Share from "@/components/timeline/Share";
import React from "react";

const Timeline = () => {
  return (
    <section className="col-span-6 h-screen">
      <div className="p-5">
        <Share />
        <Post />
        <Post />
        <Post />
      </div>
    </section>
  );
};

export default Timeline;
