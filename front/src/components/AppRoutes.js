import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./dashboard/Dashboard";
import { About } from "./about/About";

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route exact path="/about" element={<About />} />
    </Routes>
  );
}

export { AppRoutes };
