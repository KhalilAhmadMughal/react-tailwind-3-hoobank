import React from "react";
import styles from "../style";

const CustomButton = (props) => (
  <button
    className={`${styles.flexCenter} bg-blue-gradient capitalize rounded-lg px-4 py-2 text-primary font-poppins font-normal`}
  >
    {props.children}
  </button>
);

export default CustomButton;
