import React from "react";

export default function Sidebar() {
  return (
    <div className="fixed flex flex-col z-10 top-52 sidebar w-52 h-56 bg-white rounded-sm p-2">
      <div className="text-xl border-b-2 p-2 flex justify-center">
        <a>실시간 인기글</a>
      </div>
      <div className="flex flex-col pt-3 gap-2">
        <a>글제목(링크1)</a>
        <a>글제목(링크2)</a>
        <a>글제목(링크3)</a>
        <a>글제목(링크4)</a>
        <a>글제목(링크5)</a>
      </div>
    </div>
  );
}
