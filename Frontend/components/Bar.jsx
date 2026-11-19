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

const Bar = () => {
  return (
    <div className="border max-w-16 h-screen flex flex-col justify-between py-10">
      <div className="flex flex-col text-[27px] justify-center items-center gap-10">
        <FontAwesomeIcon icon={faBarsStaggered} />
        <FontAwesomeIcon icon={faComment} />
        <FontAwesomeIcon icon={faSliders} />
        <FontAwesomeIcon icon={faUser} />
        <FontAwesomeIcon icon={faGear} />
      </div>

      <div className="text-[27px] flex items-center justify-center">
        <FontAwesomeIcon icon={faRightFromBracket} />
      </div>
    </div>
  );
};

export default Bar;
