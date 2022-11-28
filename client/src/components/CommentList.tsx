import React, { useState, useEffect } from "react";
import axios from "axios";
import { CommentCreateProps } from "./CommentCreate";
import { Microservices } from "../models/enums/Microservices";

export function CommentList({ postId }: CommentCreateProps) {
  const [comments, setComments] = useState<any>([]);

  async function fetchData() {
    const res = await axios.get(
      `${Microservices.urlCommentsMicroservice}/posts/${postId}/comments`
    );
    setComments(res.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const renderedComments = comments.map((comment: any) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul> {renderedComments} </ul>;
}
