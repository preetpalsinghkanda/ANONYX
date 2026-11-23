import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faComment,
  faGear,
  faUser,
  faSliders,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import socket from "../src/lib/socket";

const Bar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    socket.disconnect();

    toast.success("Logged out !");

    navigate("/login");
  };

  return (
    <div className=" w-16 h-150 bg-[#497175] rounded-2xl flex flex-col justify-between py-10">
      <div className="flex flex-col text-[27px] justify-center items-center gap-10">
        <FontAwesomeIcon className="text-black/70" icon={faBarsStaggered} />
        <FontAwesomeIcon
          style={{
            filter: "drop-shadow(0px 0px 4px black)",
          }}
          className={` text-[#ffffff]`}
          icon={faComment}
        />
        <FontAwesomeIcon className="text-black/70" icon={faSliders} />
        <FontAwesomeIcon className="text-black/70" icon={faUser} />
        <FontAwesomeIcon className="text-black/70" icon={faGear} />
      </div>

      <div className="text-[27px] flex items-center justify-center">
        <FontAwesomeIcon
          onClick={handleLogout}
          className="text-[black]"
          icon={faRightFromBracket}
        />
      </div>
    </div>
  );
};

export default Bar;
