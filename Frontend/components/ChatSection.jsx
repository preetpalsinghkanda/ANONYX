import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faPaperPlane,
  faFaceGrinWide,
} from "@fortawesome/free-solid-svg-icons";
import EmojiPicker from "emoji-picker-react";
import { useEmojiDataState } from "emoji-picker-react/primitives";

const ChatSection = () => {
  const [message, setMessage] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);

  const handleEmoji = (emojiIcon) => {
    setMessage((p) => p + emojiIcon.emoji);
  };

  return (
    <div className="bg-white rounded-2xl flex relative flex-col justify-between ">
      <div className=" py-3 px-6  rounded-4xl">
        <div className="flex   text-2xl font-fira items-center justify-between">
          <div>Jack</div>
          <FontAwesomeIcon icon={faBell} />
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

      <div className="border py-1 px-1 flex gap-6 rounded-full">
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
