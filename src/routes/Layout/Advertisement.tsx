import React from "react";
import adver from "../../images/adver.png";

export default function Advertisement(): any {
  return (
    <div className="fixed z-10 top-32 w-60 h-96 right-10">
      <img src={adver} className="w-full" />
    </div>
  );
}
