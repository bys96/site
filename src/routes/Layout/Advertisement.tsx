import React from "react";
import adver from "../../images/adver.png";

export default function Advertisement(): any {
  return (
    <div className="fixed z-10 top-52 w-52 h-96 right-10">
      <img src={adver} className="w-full" />
    </div>
  );
}
