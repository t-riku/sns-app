import Post from "@/components/timeline/Post";
import Share from "@/components/timeline/Share";
import React from "react";
import { Posts } from "src/Data/dummyData";

const Timeline = () => {
  console.log(Posts);
  return (
    <section className="col-span-6 h-screen">
      <div className="p-5">
        <Share />
        {Posts.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
      </div>
    </section>
  );
};

export default Timeline;
