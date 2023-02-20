import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`w-[100px] h-[100px] md:h-[140px] md:w-[140px] bg-blue-gradient rounded-full p-[2px] ${styles.flexCenter}`}
  >
    <div
      className={`w-full h-full ${styles.flexCenter} bg-primary rounded-full`}
    >
      <p className="capitalize text-gradient font-poppins font-normal">
        <span className="flex gap-[4px]">
          get <img src={arrowUp} alt="" />
        </span>{" "}
        started
      </p>
    </div>
  </div>
);

export default GetStarted;
