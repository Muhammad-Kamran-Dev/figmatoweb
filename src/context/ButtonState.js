import { useState } from "react";
import ButtonContext from "./ButtonContext";
const ButtonState = (props) => {
  const [toggle, setToggle] = useState(false);

  const setToggleBtn = () => {
    setToggle((prev) => !prev);
  };
  return (
    <ButtonContext.Provider
      value={{
        setToggleBtn,
        toggle,
      }}
    >
      {props.children}
    </ButtonContext.Provider>
  );
};
export default ButtonState;
