import React from "react";
import styles from "../style";
import { socialMedia } from "../constants/data";

const Footer = () => {
  return (
    <footer className="flex border-t-2 border-t-[#3F3E45] py-6 justify-between items-center sm:px-6">
      <p
        className={`font-poppins ${styles.paragraph} text-sm leading-6 md:text-[18px]`}
      >
        Copyright &copy; 2023 HooBank. All Rights Reserved.
      </p>
      <div className="flex gap-4">
        {socialMedia.map((media) => (
          <div key={media.id} className="w-[21px] h-[21px] cursor-pointer">
            <img key={media.id} src={media.icon} alt="" />
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
