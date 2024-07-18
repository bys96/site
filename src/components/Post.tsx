import React, { FC } from "react";
import { Posts, Posttype } from "../data";

const Post: FC = () => {
  return (
    <>
      {Posts.map((item, index) => (
        <div className="flex flex-col w-full bg-white rounded-sm p-1">
          <div className="flex h-32">
            <div className="border-solid border-2 w-32">{item[1]}</div>
            <div className="flex flex-col p-2 text-sm">
              <a className="text-xl font-bold text-blue-500">{item[2]}</a>
              <a className="text-xs m-1 text-blue-400">{item[3]}</a>
              <p className="text-red-500">{item[4]}</p>
              <p>{item[5]}</p>
              <p>{item[6]}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Post;
