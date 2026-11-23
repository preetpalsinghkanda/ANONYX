import React, { useEffect } from "react";
import Bar from "./Bar";
import ChatSection from "./ChatSection";
import ChatBox from "./ChatBox";
import socket from "../src/lib/socket";

const Dashboard = () => {
  useEffect(() => {
    const joinPublic = () => {
      socket.emit("join_public");
      console.log("Joined Public Chat Group!");
    };

    socket.on("connect", joinPublic);
    if (!socket.connected) {
      socket.connect();
    } else {
      joinPublic();
    }

    return () => {
      socket.off("connect", joinPublic);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen p-5">
      <div className="flex items-stretch bg-[#EFF5F5] px-8 py-8 h-full rounded-2xl max-w-7xl max-h-[662px] overflow-hidden  w-full  mx-auto ">
        <Bar />
        <ChatBox />
        <ChatSection />
      </div>
    </div>
  );
};

export default Dashboard;
