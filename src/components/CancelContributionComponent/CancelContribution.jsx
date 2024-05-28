import React from "react";
import style from "./CancelContribution.module.css";
import BackBtnHeading from "../BackBtnandHeadingComponent/BackBtnHeading";
import ButtonPair from "../OutlineButtonPairComponent/ButtonPair";

const CancelContribution = () => {
  const headText = (
    <>
      Are you sure you want to cancel your <br />
      contribution to
      <span className={style.amount}>Healthcare Project?</span>{" "}
    </>
  );

  //

  return (
    <div className={style.mainDiv}>
      <BackBtnHeading headText={headText} hideBtn />
      <ButtonPair leftBtn={"No"} rightBtn={"Yes"} width />
    </div>
  );
};

export default CancelContribution;
