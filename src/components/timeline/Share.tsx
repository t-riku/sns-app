import React from "react";
import PostInput from "@/components/timeline/PostInput";
import PostType from "@/components/timeline/PostType";

const Share = () => {
  return (
    <div className="w-full h-[170px] shadow-md rounded-xl">
      <div className="p-3">
        <PostInput />

        <hr className="m-5" />

        <PostType />
      </div>
    </div>
  );
};

export default Share;
