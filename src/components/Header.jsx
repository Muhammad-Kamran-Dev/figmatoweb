import React, { useContext } from "react";
import Button from "./Button";
import { colorFullBg } from "../utils/colors";
import ButtonContext from "../context/ButtonContext";

const Header = () => {
  const context = useContext(ButtonContext);
  const { setToggleBtn } = context;
  return (
    <div>
      <header className="flex items-center justify-between mx-7">
        <div className="flex items-center gap-5 logo-container">
          <div className="logo w-[100px]">
            <img src="/logo.png" alt="Website Logo" />
          </div>
          <div className="logo-text text-[32px] md:text-[42px] font-coiny text-white">
            Today i Learned
          </div>
        </div>
        <div className="button" onClick={setToggleBtn}>
          <Button styles={colorFullBg} text="Share A Fact" />
        </div>
      </header>
    </div>
  );
};

export default Header;
