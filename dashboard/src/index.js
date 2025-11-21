import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>

      {/* If someone opens localhost:3001 → redirect to dashboard */}
      <Route path="/" element={<Navigate to="/dashboard" />} />

      {/* Main dashboard routes */}
      <Route path="/dashboard/*" element={<Home />} />

    </Routes>
  </BrowserRouter>
);
