import React, { useState } from "react";
import images from "../src/data/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faPinterest,
  faDiscord,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import api from "../src/lib/api";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [secretCode, setSecretCode] = useState("");
  const [secretPin, setSecretPin] = useState("");
  const [isEyeOn, setIsEyeOn] = useState(false);
  const [loading, setLoading] = useState(false);

  const random = Math.floor(Math.random() * images.length);
  const randomImg = images[random];

  useGSAP(() => {
    gsap.to(
      ".anonyx",
      {
        left: 2,
        duration: 1.2,
        delay: 3,
      },
      "<",
    );
  });

  const handleLogin = async (x) => {
        x.preventDefault()

    if(!secretCode.trim() || !secretPin.trim() ){
      return toast.error("Enter valid CODE or PIN!")
    }


    setLoading(true);
    try {
      const res = await api.post("/auth/login", { secretCode, secretPin });

      toast.success("Login Success :)");
    } catch (err) {
      toast.error(err.message || "Login Failed :(");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex relative bg-[#14141413] items-center justify-center h-screen">
      <span className="font-extrabold anonyx [-webkit-text-stroke:4px_white] rotate-[270deg] absolute left-40 font-modak text-[8rem]">
        ANONYX
      </span>
      <div
        style={{ boxShadow: "0px 5px 50px 10px #00000033" }}
        className=" bo bg-white p-2  rounded-4xl flex"
      >
        <div className="h-150 relative w-120">
          <img
            className="h-full w-full rounded-4xl object-cover"
            src={randomImg.url}
            alt=""
          />
          <span className="absolute font-fira bottom-2 left-6 bg-white px-3 rounded-3xl text-center text-xs flex items-center justify-center">
            {randomImg.credit}
          </span>
        </div>

        <div className="py-8 relative  px-18">
          <h2 className="text-center font-modak text-5xl font">Welcome</h2>
          <form action="" onSubmit={handleLogin}>
          <div className="">
            <div className="flex mt-20 flex-col gap-4 relative">
              <input
                maxLength={8}
                value={secretCode}
                onChange={(x) => setSecretCode(x.target.value)}
                placeholder="CODE"
                className=" border-2 border-[#7e7c7c4e] tracking-[8px] uppercase focus: font-fira font-bold placeholder:tracking-normal text-xl placeholder:text-center text-center rounded-xl px-2 py-2 focus:outline-none"
                type="text"
              />
              <input
                maxLength={6}
                value={secretPin}
                onChange={(x) => setSecretPin(x.target.value)}
                placeholder="PIN"
                className=" border-2 border-[#7e7c7c4e] text-xl font-medium tracking-[8px] font-fira p-2 placeholder:tracking-normal placeholder:text-center text-center focus:outline-none rounded-xl"
                type={isEyeOn ? "text" : "password"}
              />
              {secretPin && (
                <span className="absolute -right-8 bottom-3">
                  {isEyeOn && (
                    <FontAwesomeIcon
                      className="cursor-pointer"
                      onClick={() => setIsEyeOn(false)}
                      style={{ color: "#0000006d" }}
                      icon={faEye}
                    />
                  )}
                  {isEyeOn === false && (
                    <FontAwesomeIcon
                      className="cursor-pointer"
                      onClick={() => setIsEyeOn(true)}
                      style={{ color: "#0000006d" }}
                      icon={faEyeSlash}
                    />
                  )}
                </span>
              )}
            </div>

            <div className=" text-end">
              <span className="text-xs font-medium">
                Forgot <span className="text-[#EB4338]">CODE</span> or{" "}
                <span className="text-[#EB4338]">PIN</span>?
              </span>
            </div>
            <button
            type="submit"
              style={{ boxShadow: "0px 5px 1px 1px #eb443899" }}
              className="cursor-pointer  mt-6 font-fira font-extrabold  w-full bg-[#EB4338] rounded-full p-2 text-white text-xl"
            >
              Login
            </button>
          </div></form>

          <div className="flex gap-2 flex-col mt-20">
            <span className="text-sm font-fima  text-center">Follow us on</span>
            <div className="gap-2 flex mx-auto">
              <a href="https://www.instagram.com/">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="cursor-pointer"
                />
              </a>
              <a href="https://www.github.com/">
                <FontAwesomeIcon icon={faGithub} className="cursor-pointer" />
              </a>
              <a href="https://in.pinterest.com/">
                <FontAwesomeIcon
                  icon={faPinterest}
                  className="cursor-pointer"
                />
              </a>
              <a href="https://discord.com/">
                <FontAwesomeIcon icon={faDiscord} className="cursor-pointer" />
              </a>
              <a href="https://x.com/">
                <FontAwesomeIcon icon={faXTwitter} className="cursor-pointer" />
              </a>
            </div>
          </div>

          <div className="text-center   left-0  w-full absolute  bottom-8">
            <span className="text-sm font-fira">
              Don't have an account?{" "}
              <span className="text-[#EB4338]">Request now</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
