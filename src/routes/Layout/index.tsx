import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import Sidebar from "./sidebar";
import Advertisement from "./Advertisement";
import Home from "../../components/Home";

export default function Layout() {
  return (
    <>
      <NavigationBar />
      <div
        className="relative flex flex-row gap-10 pl-10 pr-10 w-auto bg-gray-300"
        style={{ height: 5000}}
      >
        <Sidebar />
        <Outlet />
        <Advertisement />
      </div>

      <Footer />
    </>
  );
}
