import React from "react";
//import {Link} from 'react-router-dom'
export default function NavigationBar() {
  return (
    <div className=" fixed flex flex-col justify-center w-full h-40 z-10 ">
      <div className="flex justify-center items-center bg-base-100 h-28 bg-white ">
        <div className="flex flex-1 pl-10 pr-20 justify-start">
          <button className="btn w-40 h-16 ">로고</button>
        </div>
        <div className="w-1/2 flex">
          <input className="flex-1 border-t-0 border-r-0 border-l-0 border-b-blue-300 border-2"></input>
          <button className="w-16 h-16 border-2">버튼</button>
        </div>
        <div className="flex flex-1 items-center pl-20 gap-5">
          <a>로그인</a>
          <a>회원가입</a>
        </div>
      </div>
      <hr />
      <div className="flex p-1 gap-8 item-center navBar2 h-12 bg-white pl-10 text-blue-800 font-bold items-center border-b-2 border-black">
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
