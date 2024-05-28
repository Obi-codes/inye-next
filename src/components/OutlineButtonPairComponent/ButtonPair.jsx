import React from "react";
import style from "./ButtonPair.module.css";

const ButtonPair = ({
  leftBtn,
  rightBtn,
  width,
  setShowManual,
  setShowPlaid,
  setIsSure,
}) => {
  const buttonStyle = width ? { width: 130 } : {};
  return (
    <div>
      <div className={style.buttonDiv}>
        <button
          className={style.button}
          style={buttonStyle}
          onClick={() => {
            setShowManual && setShowManual(true);
            setIsSure && setIsSure(false);
            setShowPlaid && setShowPlaid(false);
          }}
        >
          {leftBtn}
        </button>
        <button
          className={style.button}
          style={buttonStyle}
          onClick={() => {
            setShowPlaid(true);
            setIsSure && setIsSure(false);
          }}
        >
          {rightBtn}
        </button>
      </div>
    </div>
  );
};

export default ButtonPair;
