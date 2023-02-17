import React, { useRef } from "react";
import autoAnimate from "@formkit/auto-animate";
import { useEffect } from "react";

const ChatBody = ({ chat }) => {
  const aiStyle =
    "bg-white bg-opacity-40 backdrop-blue-lg dropshadow-md mr-auto";

  const parent = useRef(null);
  const bottomRef = useRef(null);

  // Only for auto-animation
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  // for scrolling Bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  return (
    <div className="flex flex-col gap-4" ref={parent}>
      {/* client Message */}
      {chat.map((message, i) => {
        return (
          <div
            key={i}
            className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%] ${
              message.sender === "ai" && aiStyle
            }`}
          >
            <pre className="whitespace-pre-wrap">
              <span>{message.message}</span>
            </pre>
          </div>
        );
      })}

      {/* AI Message */}
      {/* <div
        className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%] <pre className=whitespaces-pre-wrap ${aiStyle}`}
      >
        <pre>
          <span>Yeah.. i am here to help!</span>
        </pre>
      </div> */}

      <div ref={bottomRef} className="h-3"></div>
    </div>
  );
};

export default ChatBody;
