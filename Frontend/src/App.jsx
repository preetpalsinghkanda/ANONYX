import React, { useEffect, useRef } from "react";
import Login from "../components/Login.jsx";
import LoginPage from "../components/LoginPage.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import api from "./lib/api.js";
import { Toaster } from "react-hot-toast";
import Dashboard from "../components/Dashboard.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const App = () => {
  const mainContainer = useRef(null);

  useGSAP(
    () => {
      gsap.set(".loginPage", {
        yPercent: 100,
        backgroundColor: "white",
      });
      const t1 = gsap.timeline({ delay: 2 });

      t1.to(".loginText", {
        yPercent: -30,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
      });

      t1.to(
        ".loginPage",
        {
          yPercent: 0,
          duration: 1.5,
          ease: "power3.out",
        },
        "<",
      );
    },
    { scope: mainContainer },
  );

  useEffect(() => {
    api
      .get("/")
      .then((response) => console.log("backend:", response.data))
      .catch((err) => console.log("err", err.message));
  }, []);

  return (
    <BrowserRouter>
      <div ref={mainContainer} className="h-screen w-full overflow-hidden">
        <Toaster position="top-right" />
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <div className="loginText absolute inset-0 ">
                  <Login />
                </div>

                <div
                  // style={{ transform: "translateY(100%)" }}
                  className="loginPage  absolute inset-0 "
                >
                  <LoginPage />
                </div>
              </>
            }
          />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
