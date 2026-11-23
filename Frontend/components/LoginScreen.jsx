import React, { useRef } from "react";

import Login from "./Login";
import LoginPage from "./LoginPage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const LoginScreen = () => {
  const box = useRef(null);

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
    { scope: box },
  );

  return (
    <div ref={box} className="h-screen w-full relative overflow-hidden">
      <div className="loginText absolute inset-0">
        <Login />
      </div>

      <div className="loginPage absolute inset-0">
        <LoginPage />
      </div>
    </div>
  );
};

export default LoginScreen;
