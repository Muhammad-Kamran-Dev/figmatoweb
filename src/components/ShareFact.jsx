import React, { useContext } from "react";
import Button from "./Button";
import { colorFullBg } from "../utils/colors";
import ButtonContext from "../context/ButtonContext";

const ShareFact = () => {
  const context = useContext(ButtonContext);
  const { toggle } = context;
  return (
    toggle && (
      <section className="share-fact flex gap-5 bg-[#44403C] p-5 rounded-xl font-sono justify-center items-center mx-7 my-10 flex-wrap">
        <input
          className="py-3 px-4 flex-1 bg-[#78716C] rounded-full placeholder-[#AAA7A4] "
          type="text"
          name="fact"
          placeholder="Share a fact with the world..."
          id="fact"
        />
        <span className="font-bold text-white text">200</span>
        <input
          className="py-3 px-4  bg-[#78716C] rounded-xl placeholder-[#AAA7A4] flex-1 md:flex-none"
          type="text"
          name="source"
          id="source"
          placeholder="Trustworthy source"
        />
        <select
          name="category"
          id="category"
          className="category py-3 px-4  bg-[#78716C] rounded-xl text-white flex-1 md:flex-none"
        >
          <option value="">Choose Category:</option>
          <option value="technology">Technology</option>
          <option value="science">Science</option>
          <option value="history">History</option>
        </select>
        <Button styles={colorFullBg} text="Post" />
      </section>
    )
  );
};

export default ShareFact;
