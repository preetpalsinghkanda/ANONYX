import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Login = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".login span",
      {
        y: 150,
        opacity: 1,
      },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        stagger: 0.4,
        ease: "power2.out",
      },
    );
  });

  return (
    <div className="border flex h-screen  items-center justify-center relative">
      <div className=" absolute w-180 h-60 z-2 bg-white bottom-15"></div>

      <h1
        style={{ fontFamily: "Modak" }}
        className="text-[14rem] login my-10 mx-auto"
      >
        {"LOGIN".split("").map((l, i) => (
          <span key={i} className="inline-block">
            {l}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default Login;
