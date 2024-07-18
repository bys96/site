import React from "react";
import Post from "../components/Post";

export default function Home() {
  return (
    <div className="w-full h-2/3 mt-52 ml-64 mr-64">
      <div className="flex flex-col justify-between gap-4">
        <Post />
      </div>
    </div>
  );
}
