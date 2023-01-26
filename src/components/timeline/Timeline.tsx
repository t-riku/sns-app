import Post from "@/components/timeline/Post";
import Share from "@/components/timeline/Share";
import React, { useEffect, useState } from "react";
// import { Posts } from "src/Data/dummyData";
import axios from "axios";

const Timeline = ({ username }: any) => {
  // 投稿の情報を格納
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get(`http://localhost:4000/api/posts/profile/t-riku`)
        : await axios.get(
            // "http://10.0.2.2:4000/api/posts/timeline/63c7957ef15a285429c68321"
            "http://localhost:4000/api/posts/timeline/63c783c8ccf250719dcfad46"
            // "/posts/timeline/63c783c8ccf250719dcfad46"
          );
      // console.log(response);
      setPosts(response.data);
    };
    fetchPosts();
  }, [username]);

  return (
    <section className="col-span-6 h-screen">
      <div className="p-5">
        <Share />
        {posts.map((post: any) => {
          return <Post post={post} key={post._id} />;
        })}
      </div>
    </section>
  );
};

export default Timeline;
