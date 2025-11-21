import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import axios from "axios";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";
import News from "./News";

const Dashboard = () => {
  const [checkingAuth, setCheckingAuth] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      // Read token from URL
      const params = new URLSearchParams(location.search);
      const tokenFromUrl = params.get("token");

      if (tokenFromUrl) {
        localStorage.setItem("token", tokenFromUrl);
        window.history.replaceState({}, "", "/dashboard");
      }

      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "http://localhost:3000/login";
        return;
      }

      try {
        await axios.get("http://localhost:3002/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setCheckingAuth(false);
      } catch (err) {
        console.error("Auth failed:", err);
        localStorage.removeItem("token");
        window.location.href = "http://localhost:3000/login";
      }
    };

    checkAuth();
  }, [location.search]);

  if (checkingAuth) {
    return (
      <div style={{ textAlign: "center", marginTop: "40px", fontSize: "20px" }}>
        Checking authentication...
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>

      <div className="content">
        <Routes>
          <Route index element={<Summary />} />
          <Route path="orders" element={<Orders />} />
          <Route path="holdings" element={<Holdings />} />
          <Route path="positions" element={<Positions />} />
          <Route path="funds" element={<Funds />} />
          <Route path="apps" element={<Apps />} />
          <Route path="news" element={<News />} />

        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
