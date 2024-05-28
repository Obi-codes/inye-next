import React from "react";
import style from "./AppliedAmount.module.css";
import BackBtnHeading from "../BackBtnandHeadingComponent/BackBtnHeading";

const AppliedAmount = ({ setOpen }) => {
  const headText = (
    <>
      We've applied
      <span className={style.amount}>$15</span> to your <br /> bank account.
    </>
  );

  return (
    <div className={style.mainDiv}>
      <BackBtnHeading headText={headText} hideBtn />
      <span className={style.description}>
        Funds will be held in escrow until project's goal has been met, project
        deadline exceeded, or transaction cancelled.
      </span>
      <div className={style.buttonDiv}>
        <button className={style.button} onClick={() => setOpen(false)}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default AppliedAmount;
