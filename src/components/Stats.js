import React from "react";
import { stats } from "../constants/data";

const Stats = () => {
  return (
    <section className="flex w-full items-center gap-4 md:gap-6 lg:gap-8 mt-10 md:mt-20 justify-center">
      {stats.map((stat, index) => (
        <div
          key={stat.id}
          className={` flex flex-col md:flex-row md:gap-4 lg:gap-6  items-center `}
        >
          <h1 className="text-[22px] md:text-[42px] font-semibold">
            {stat.value}
          </h1>
          <p className="uppercase text-gradient md:text-xl text-sm">
            {stat.title}
          </p>
          <span
            className={
              index === stats.length - 1 ? "hidden" : "md:flex md:px-2 hidden"
            }
          >
            |
          </span>
        </div>
      ))}
    </section>
  );
};

export default Stats;
