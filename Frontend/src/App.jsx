import React, { useEffect, useRef } from "react";
import Login from "../components/Login.jsx";
import LoginPage from "../components/LoginPage.jsx";
import LoginScreen from "../components/LoginScreen.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import api from "./lib/api.js";
import { Toaster } from "react-hot-toast";
import Dashboard from "../components/Dashboard.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import {}
import GuestRoutes from "../components/GuestRoutes.jsx";
import ProtectedRoutes from "../components/ProtectedRoutes.jsx";

const App = () => {
  // const mainContainer = useRef(null);

  useEffect(() => {
    api
      .get("/")
      .then((response) => console.log("backend:", response.data))
      .catch((err) => console.log("err", err.message));
  }, []);

  return (
    <BrowserRouter>
      <div className="h-screen w-full overflow-hidden">
        <Toaster position="top-right" />

        <Routes>
          <Route element={<GuestRoutes />}>
            <Route path="/login" element={<LoginScreen />} />
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
