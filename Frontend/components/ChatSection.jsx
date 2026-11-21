import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell as faBellSolid,
  faPaperPlane,
  faFaceGrinWide,
  faCircleExclamation,
  faStar as faStarSolid,
} from "@fortawesome/free-solid-svg-icons";
import {
  faStar as faStarRegular,
  faBell as faBellRegular,
} from "@fortawesome/free-regular-svg-icons";
import EmojiPicker from "emoji-picker-react";
import { useEmojiDataState } from "emoji-picker-react/primitives";
import img from "../src/data/images";

const ChatSection = () => {
  const [message, setMessage] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);

  const [notification, setNotification] = useState(false);
  const [fav, setFav] = useState(false);

  const handleEmoji = (emojiIcon) => {
    setMessage((p) => p + emojiIcon.emoji);
  };

  return (
    <div className="flex items-center gap-1  w-120  relative flex-col justify-between">
      <div className="bg-white w-full h-full rounded-2xl flex  flex-col justify-between ">
        <div className=" py-3 px-6  rounded-4xl">
          <div className="flex   text-2xl font-fira items-center justify-between">
            <div className="font-[500] flex items-center gap-2  ">
              <div className="h-10 w-10 overflow-hidden rounded-full">
                <img className="h-full w-full object-cover" src={img[6].url} />
              </div>
              <span>Jack</span>
            </div>
            <div className="text-lg flex gap-2 bg-[#EFF5F5] text-black/50 px-3 py-2 rounded-2xl">
              <FontAwesomeIcon
                onClick={() => setNotification(!notification)}
                className="cursor-pointer"
                icon={notification ? faBellSolid : faBellRegular}
              />
              <FontAwesomeIcon
                onClick={() => setFav(!fav)}
                className="cursor-pointer"
                icon={fav ? faStarSolid : faStarRegular}
              />
              <FontAwesomeIcon
                className="cursor-pointer"
                icon={faCircleExclamation}
              />
            </div>
          </div>

          <div></div>
        </div>

        <div className="">
          {showEmoji && (
            <div className="absolute bottom-16 right-16 ">
              <EmojiPicker
                theme=""
                previewConfig={{ showPreview: false }}
                height={330}
                width={330}
                onEmojiClick={handleEmoji}
              />
            </div>
          )}
        </div>
      </div>

      <div className=" bg-white w-full py-1 px-1 flex gap-6  rounded-bl-2xl rounded-br-3xl rounded-tr-3xl rounded-tl-2xl ">
        <input
          value={message}
          onChange={(x) => setMessage(x.target.value)}
          placeholder="Type Here..."
          className="focus:outline-none w-full px-6"
          type="text"
        />
        <div className="flex text-[#00000055]  items-center justify-center gap-3">
          <button
            onClick={() => setShowEmoji(!showEmoji)}
            className="cursor-pointer"
          >
            <FontAwesomeIcon
              className={`text-[20px]  ${showEmoji ? "text-black" : "text-[#00000085]"}`}
              icon={faFaceGrinWide}
            />
          </button>
          <button className=" px-5 cursor-pointer flex items-center gap-2 py-2 rounded-full  text-white bg-[#EB4338]">
            Send <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
