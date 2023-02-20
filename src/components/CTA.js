import React from "react";
import { logo } from "../assets";

import { footerLinks } from "../constants/data";

const CTA = () => {
  return (
    <div className="my-10 flex">
      <div className="basis-[30%]">
        <div className="h-[30px] w-[100px] md:h-[72px] md:w-[266px]">
          <img src={logo} alt="logo" className="w-full h-full object-contain" />
        </div>
        <p
          className={`py-4 text-[#FFFFFFB2] text-xs md:text-[18px] md:leading-7`}
        >
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div className="basis-[70%] flex justify-evenly">
        {footerLinks.map((footers, index) => (
          <div key={footers.title}>
            <p
              className="mb-2 text-sm sm:text-lg"
              key={footers.title + "-title"}
            >
              {footers.title}
            </p>
            <ul key={footers.title + index}>
              {footers.links.map((link) => (
                <li
                  className="text-xs sm:text-sm md:text-lg text-[#FFFFFFB2]"
                  key={link.name}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CTA;
