import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Board from "../pages/Board";
import Home from "../components/Home";

export default function RoutesSetup() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/board" element={<Board />} />
    </Routes>
  );
}
