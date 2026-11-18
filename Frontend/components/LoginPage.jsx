import React from "react";
import images from "../src/data/images";

const LoginPage = () => {
  const random = Math.floor(Math.random() * images.length);
  const randomImg = images[random];

  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" border-4 p-2 rounded-4xl flex">
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
          <h2 className="text-center font-modak text-4xl font">Welcome</h2>
          <div className="">
            <div className="flex mt-20 flex-col gap-4">
              <input
                placeholder="CODE"
                className=" border-2 border-[#7e7c7c4e] tracking-[8px] uppercase focus: font-fira font-medium placeholder:tracking-normal text-xl placeholder:text-center text-center rounded-xl px-2 py-2 focus:outline-none"
                type="text"
              />
              <input
                placeholder="PIN"
                className=" border-2 border-[#7e7c7c4e] text-xl font-medium tracking-[8px] font-fira p-2 placeholder:tracking-normal placeholder:text-center text-center focus:outline-none rounded-xl"
                type="text"
              />
            </div>

            <div className=" text-end">
              <span className="text-xs font-medium">
                Forgot <span className="text-[#EB4338]">CODE</span> or{" "}
                <span className="text-[#EB4338]">PIN</span>?
              </span>
            </div>
            <button className="cursor-pointer mt-6 font-fira font-extrabold  w-full bg-[#EB4338] rounded-full p-2 text-white text-xl">
              Login
            </button>
          </div>

          <div className="text-center  left-0 text-center w-full absolute  bottom-0">
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
