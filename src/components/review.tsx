import React, { FC } from "react";
import { Reviews, Reviewtype } from "../data";

const review: FC = () => {
  return (
    <>
      {Reviews.map((item, index) => (
        <div className="flex flex-col w-full bg-white rounded-sm p-1">
          <div className="flex h-32">
            <div className="border-solid border-2 w-32">{item["r1"]}</div>
            <div className="flex flex-col p-2 text-sm">
              <a className="text-xl font-bold text-blue-500">{item["r2"]}</a>
              <a className="text-xs m-1 text-blue-400">{item["r3"]}</a>
              <p className="text-red-500">{item["r4"]}</p>
              <p>{item["r5"]}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default review;
