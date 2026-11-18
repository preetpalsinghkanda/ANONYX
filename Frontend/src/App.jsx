import React, { useRef } from "react";
import Login from "../components/Login.jsx";
import LoginPage from "../components/LoginPage.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {
  const mainContainer = useRef(null);

  useGSAP(
    () => {

      gsap.set(".loginPage",{
        yPercent :100,
        backgroundColor: "white"
      })
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

  return (
    <div ref={mainContainer} className="h-screen w-full overflow-hidden">
      <div className="loginText absolute inset-0 ">
        <Login />
      </div>
      <div
        // style={{ transform: "translateY(100%)" }}
        className="loginPage  absolute inset-0 "
      >
        <LoginPage />
      </div>
    </div>
  );
};

export default App;
