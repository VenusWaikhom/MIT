import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Users/Home/Home";
import Developers from "./Users/Developers/Developers";

function MainRouter() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="Developers" element={<Developers />} />
      </Route>
    </Routes>
  );
}

export default MainRouter;
