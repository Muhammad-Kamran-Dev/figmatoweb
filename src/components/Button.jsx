import React from "react";

const Button = ({
  text,
  styles,
  textSize = "text-2xl",
  padding = "py-[10px] px-[15px]",
}) => {
  return (
    <div
      className={`text-white font-coiny font-normal md:font-bold text-sm md:${textSize} ${padding}  rounded-full cursor-pointer text-center `}
      style={{
        background: styles,
      }}
    >
      <span className="uppercase">{text}</span>
    </div>
  );
};

export default Button;
