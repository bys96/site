import React from "react";

export default function Home() {
  return (
    <div className="w-full h-2/3 bg-slate-500 mt-32 ml-72 mr-72">
      <div className="flex flex-col justify-between gap-8">
        <div className="flex flex-col h-48 w-full bg-white">
          <div className="flex h-40">
            <div className="border-solid border-2 w-40">여기에 사진</div>
            <div className="flex flex-col mt-7 mb-7">
              <a>링크</a>
              <p>가격</p>
              <p>시간</p>
              <span>좋아요댓글</span>
            </div>
          </div>
          <div>사고싶다</div>
        </div>
        <div className="flex flex-col h-48 w-full bg-white">
          <div className="flex h-40">
            <div className="border-solid border-2 w-40">여기에 사진</div>
            <div className="flex flex-col">
              <a>링크</a>
              <p>가격</p>
              <p>시간</p>
              <span>좋아요댓글</span>
            </div>
          </div>
          <div>사고싶다</div>
        </div>
      </div>
    </div>
  );
}
