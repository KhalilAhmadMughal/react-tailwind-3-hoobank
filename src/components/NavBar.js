import React from "react";
import { useState } from "react";

import { logo, menu, close } from "../assets";
import { navLinks } from "../constants/data";

const NavBar = () => {
  const [toggle, SetToggle] = useState(false);
  return (
    <nav className="py-6 w-full flex justify-between navbar">
      <img
        src={logo}
        alt="hoobank"
        className="w-[124px] h-[32px] cursor-pointer"
      />
      <ul className="list-none sm:flex hidden justify-end items-center">
        {navLinks.map((nav, index) => (
          <li
            className={`cursor-pointer font-poppins font-normal text-[16] ${
              index === navLinks.length - 1 ? "pr-0" : "pr-10"
            }`}
            key={nav.id}
          >
            {nav.title}
          </li>
        ))}
      </ul>

      <div className="flex sm:hidden justify-end items-center">
        <img
          onClick={() => SetToggle((prev) => !prev)}
          src={`${toggle ? close : menu}`}
          alt="menu"
          className="h-[28px] w-[28px] cursor-pointer"
        />
      </div>
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } w-[124px] absolute top-20 right-0 mx-4 p-6 bg-black-gradient rounded-xl sidebar`}
      >
        <ul className="list-none flex flex-col justify-end ">
          {navLinks.map((nav, index) => (
            <li
              className={`cursor-pointer font-poppins font-normal text-[16] ${
                index === navLinks.length - 1 ? "pb-0" : "pb-2"
              }`}
              key={nav.id}
            >
              {nav.title}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
