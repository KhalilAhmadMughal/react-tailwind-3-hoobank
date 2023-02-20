import React from "react";
import styles from "../style";
import CustomButton from "./CustomButton";
// import FeedbackCard from "./FeedbackCard";

const ServiceBox = () => {
  return (
    <section className="bg-black-gradient-2 flex flex-col gap-4 px-4 py-2 my-6 sm:my-10 md:my-20 rounded-xl sm:flex-row sm:items-center sm:justify-between sm:p-4 md:p-8 lg:p-14">
      <div className="flex flex-col gap-4 sm:basis-[75%] md:basis-[70%] ">
        <h1 className="text-[32px] sm:text-[38px] md:text-[44px] font-bold flex-1">
          Let’s try our service now!
        </h1>
        <p
          className={`${styles.paragraph} leading-5 sm:leading-6 sm:w-[85%] md:w-[70%] `}
        >
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="sm:flex-1 flex sm:justify-center">
        <CustomButton>get started</CustomButton>
      </div>
    </section>
  );
};

export default ServiceBox;
