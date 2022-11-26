import React, { useState } from "react";
import axios from "axios";
import { Microservices } from "./models/enums/Microservices";

export default function PostCreate() {
  const [title, setTile] = useState("");

  async function onSubmit(e: any) {
    e.preventDefault();
    await axios.post(`${Microservices.urlPostsMicroservice}/posts`, {
      title,
    });
    setTile("");
  }

  return (
    <div className="">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="">Title</label>
          <input
            value={title}
            onChange={(e) => setTile(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
}
