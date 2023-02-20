import React from "react";
import styles from "../style";

const FeatureCard = (props) => {
  return (
    <div className="p-3 bg-transparent feature-card flex items-center gap-6 rounded-xl font-poppins">
      <div
        className={`w-[64px] h-[64px] rounded-full image-bg ${styles.flexCenter}`}
      >
        <img src={props.icon} alt="" className="" />
      </div>
      <div className="flex-1">
        <h2 className="capitalize text-lg font-semibold leading-10">
          {props.title}
        </h2>
        <p className={`${styles.paragraph} text-sm leading-5`}>
          {props.content}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
