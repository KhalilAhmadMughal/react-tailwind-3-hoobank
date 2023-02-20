import React from "react";
import styles from "../style";
import { quotes } from "../assets";

const FeedbackCard = (props) => {
  return (
    <div className="p-10 flex flex-col justify-between rounded-xl bg-black-gradient w-[370px] h-[395px] ">
      <div className="h-[27px] w-[42px]">
        <img src={quotes} alt="quotes" />
      </div>
      <p className="font-poppins text-[18px]">{props.content}</p>
      <div className="flex items-center gap-4">
        <div className="rounded-full h-[48px] w-[48px]">
          <img
            src={props.image}
            alt=""
            className="h-full w-full object-contain rounded-full"
          />
        </div>
        <div>
          <h2 className="font-poppins text-[20px] capitalize">{props.name}</h2>
          <p
            className={`${styles.paragraph} capitalize font-poppins text-[16px]`}
          >
            {props.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
