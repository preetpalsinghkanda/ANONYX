import React, { useState } from "react";
import img from "../src/data/images";

const ChatBox = () => {
  const [optionChat, setOptionChat] = useState("all");

  return (
    <div className=" flex-col  pl-3 min-w-90 flex item-center ">
      <div className="flex py-6 flex-col gap-2 items-center">
        <div className="rounded-full overflow-hidden   h-25 w-25">
          <img className="h-full w-full object-fill" src={img[1].url} alt="" />
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[24px] font-fira font-bold">Jack Willson</span>
          <span className="text-[16px] font-bold tracking-[5px] font-fira text-black/50  px-3 rounded-md bg-white">
            BDGE5S
          </span>
        </div>
      </div>

      <div className="outline mx-6 outline-[#00000018]"></div>

      <div className="my-3 px-6 gap-3 flex flex-col">
        <h4 className="font-fira tracking-[0.8px] font-medium text-black/80">
          Favourite
        </h4>

        <div className="flex gap-5  w-fit">
          <div className="flex flex-col justify-center items-center">
            <div className="h-13 w-13 rounded-full overflow-hidden ">
              <img className="object-fill h-full w-full " src={img[2].url} />
            </div>
            <span className="text-[14px] font-[500]">Apple</span>
          </div>
        </div>
      </div>

      <div className="outline mx-6 outline-[#00000018]"></div>

      <div className="mt-3 px-6">
        <h4 className="font-fira text-black/80 font-medium tracking-[0.8px]">
          Chats
        </h4>
      </div>

      <div className="flex mt-3 px-6  font-[400] text-[14px] font-fira">
        <span
          onClick={() => setOptionChat("all")}
          className={`${optionChat === "all" ? "border-b-2 text-black" : "border-none text-black/55"} cursor-pointer border-[#ff5e008c]   px-2 mr-2.5`}
        >
          All
        </span>
        <span
          onClick={() => setOptionChat("group")}
          className={`${optionChat === "group" ? "border-b-2 text-black" : "border-none text-black/55"} cursor-pointer  border-[#ff5e008c]  px-2 mr-2.5`}
        >
          Group
        </span>
        <span
          onClick={() => setOptionChat("public")}
          className={`${optionChat === "public" ? " border-b-2 text-black" : "border-none text-black/55"} cursor-pointer border-[#ff5e008c] `}
        >
          Public
        </span>
      </div>

      <div className=" w-full mt-2">
        <div className="flex cursor-pointer hover:bg-[#D6E3E6] py-3 rounded-2xl px-4 items-center justify-between ">
          <div className="flex gap-3 items-center ">
            <div className="h-13 w-13 overflow-hidden rounded-full">
              <img className="h-full w-full object-cover" src={img[4].url} />
            </div>
            <div>
              <span className="text-[700] font-fira">Donald</span>
              <p className="text-black/70">Yes! i will be there</p>
            </div>
          </div>
          <div className="flex gap-1 font-fira flex-col items-center">
            <span className="text-[12px] text-black/50">09:30</span>
            <span className="rounded-full bg-[#EB6440] text-white  h-4 flex items-center justify-center w-4 text-[12px]">
              2
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
