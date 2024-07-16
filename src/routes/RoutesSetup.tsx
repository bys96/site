import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Board from "../pages/Board";

export default function RoutesSetup() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/board" element={<Board />} />
      </Route>
    </Routes>
  );
}
