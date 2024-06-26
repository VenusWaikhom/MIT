import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Users/Home/Home";
import Developer from "./Users/Developer/Developer";

function MainRouter() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="Developers" element={<Developer />} />
      </Route>
    </Routes>
  );
}

export default MainRouter;
