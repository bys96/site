import React from "react";
//import {Link} from 'react-router-dom'
export default function NavigationBar() {
  return (
    <div className=" fixed flex flex-col justify-center w-full z-10">
      <div className="flex justify-between bg-base-100 bg-blue-200 ">
        <div className="flex p-2 navBar ml-10">
          <button className="btn w-10 h-10">Home</button>
          <button className="btn w-10 h-10">Board</button>
        </div>
        <div className="flex items-center p-2">여기에 로그인같은거</div>
      </div>
      <hr />
      <div className="flex p-1 gap-8 item-center navBar2 bg-white ml-10">
        <span>랭킹</span>
        <span>후기</span>
        <span>테마딜</span>
        <span>카테고리</span>
        <span>포럼</span>
        <span>도구</span>
      </div>
    </div>
  );
}
