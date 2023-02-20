import React from "react";
import styles from "../style";
import CustomButton from "./CustomButton";

const InfoBox = (props) => {
  return (
    <div className="flex flex-col gap-6 font-poppins my-10 md:my-20">
      <h1 className="text-[32px] font-bold">{props.title}</h1>
      <p className={`${styles.paragraph}`}>{props.content}</p>
      <div>
        <CustomButton>{props.buttonText}</CustomButton>
      </div>
    </div>
  );
};

export default InfoBox;
