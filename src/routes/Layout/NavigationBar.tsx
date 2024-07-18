import React from "react";
import Logo from "../../images/logo.png";
import Reviewpage from "../../pages/Reviewpage";
//import {Link} from 'react-router-dom'
export default function NavigationBar() {
  return (
    <div className=" fixed flex flex-col justify-center w-full h-40 z-10 ">
      <div className="flex justify-start items-center h-28 bg-white ">
        <div className="flex w-80 pl-24 justify-start text-white">
          <div className="flex w-56 justify-center items-center overflow-hidden text-red-500">
            <img className="p-0 scale-150 cursor-pointer" src={Logo} />
          </div>
        </div>
        <div className="w-10" />
        <div className="flex-1 flex justify-start">
          <input className="flex-1 border-t-0 border-r-0 border-l-0 border-b-blue-300 border-2"></input>
          <button className="w-16 h-16 border-0 material-icons text-blue-500 font-bold">
            search
          </button>
        </div>
        <div className="flex w-56 items-center pl-12 gap-5">
          <a>로그인</a>
          <a>회원가입</a>
        </div>
      </div>
      <hr />
      <div className="flex p-1 gap-8 item-center navBar2 h-12 bg-white pl-16 text-blue-800 font-bold items-center border-b-2 border-black">
        <span>랭킹</span>
        <span onClick={() => <Reviewpage />}>후기</span>
        <span>테마딜</span>
        <span>카테고리</span>
        <span>포럼</span>
        <span>도구</span>
      </div>
    </div>
  );
}
