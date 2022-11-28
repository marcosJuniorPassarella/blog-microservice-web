import React, { useState } from "react";
import axios from "axios";
import { Microservices } from "../models/enums/Microservices";

export interface CommentCreateProps {
  postId: string;
}

export function CommentCreate({ postId }: CommentCreateProps) {
  const [content, setContent] = useState("");

  async function onSubmitForm(event: any) {
    event.preventDefault();
    await axios.post(
      `${Microservices.urlCommentsMicroservice}/posts/${postId}/comments`,
      {
        content,
      }
    );
    setContent("");
  }

  return (
    <div className="container mt-4">
      <form onSubmit={onSubmitForm}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary mt-2 mb-2">Submit</button>
      </form>
    </div>
  );
}
