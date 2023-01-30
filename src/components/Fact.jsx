import React from "react";
import { technology, history, society, entertainment } from "../utils/colors";
import Button from "./Button";

const Fact = ({ text, btnText, likes, face, dislikes, source }) => {
  let btnTextLowercase = btnText.toLowerCase();
  const btnStyle =
    btnTextLowercase === "technology"
      ? technology
      : btnTextLowercase === "history"
      ? history
      : btnTextLowercase === "society"
      ? society
      : btnTextLowercase === "entertainment"
      ? entertainment
      : "";
  return (
    <div className="bg-[#44403C] flex p-5 rounded-xl justify-between items-center gap-3 mb-3 flex-wrap">
      <div className="text text-white font-sono text-sm leading-5">
        {text}
        <span className="source text-sm ml-2">{source}</span>
      </div>
      <div className="left-wrapper flex justify-center flex-col items-start md:flex-row md:items-center gap-3 	">
        <div className="btn">
          <Button
            styles={btnStyle}
            fontSize="text-[14px]"
            text={btnText}
            textSize="text-sm font-normal"
            padding="py-[5px] px-[10px]"
          />
        </div>
        <div className="icons flex gap-2">
          <div className="likes bg-[#676461] py-2 px-3 whitespace-nowrap rounded-xl  text-white">
            👍 <span className="mx-2">{likes}</span>
          </div>
          <div className="face bg-[#676461] py-2 px-3 whitespace-nowrap rounded-xl  text-white">
            🤯 <span className="mx-2">{face}</span>
          </div>
          <div className="dislikes bg-[#676461] py-2 px-3 whitespace-nowrap rounded-xl  text-white">
            ⛔️ <span className="mx-2">{dislikes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fact;
