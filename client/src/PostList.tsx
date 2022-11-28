import React, { useState, useEffect } from "react";
import axios from "axios";
import { Microservices } from "./models/enums/Microservices";
import { CommentCreate } from "./components/CommentCreate";
import { CommentList } from "./components/CommentList";

export default function PostList() {
  const [posts, setPosts] = useState({});

  async function fecthPosts() {
    const res = await axios.get(`${Microservices.urlPostsMicroservice}/posts`);
    res.data && setPosts(res.data);
  }

  useEffect(() => {
    fecthPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post: any) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post?.id}
      >
        <div className="card-body">
          <h3>{post?.title}</h3>
          <CommentList postId={post?.id} />
          <CommentCreate postId={post?.id} />
        </div>
      </div>
    );
  });

  console.log(posts);

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
}
