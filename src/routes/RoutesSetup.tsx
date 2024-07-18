import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Board from "../pages/Board";
import Home from "../pages/Home";
import Reviewpage from "../pages/Reviewpage";

export default function RoutesSetup() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/review" element={<Reviewpage />} />
      </Route>
    </Routes>
  );
}
