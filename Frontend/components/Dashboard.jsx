import React from "react";
import Bar from "./Bar";
import ChatSection from "./ChatSection";
import ChatBox from "./ChatBox";

const Dashboard = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex bg-[#EFF5F5] px-8 py-8 rounded-2xl  mx-auto max-w-[85rem]">
        <Bar />
        <ChatBox/>
        <ChatSection />
      </div>
    </div>
  );
};

export default Dashboard;
