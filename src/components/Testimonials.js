import React from "react";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

import { feedback } from "../constants/data";

const Testimonials = () => {
  return (
    <section className="my-6 md:my-10 lg:my-20">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="font-poppins text-[32px] md:text-[42px] lg:text-[48px] font-semibold sm:basis-[50%] md:basis-[45%] lg:basis-[40%]">
          What people are saying about us
        </h1>
        <p
          className={`${styles.paragraph} font-poppins leading-5 sm:basis-[50%] md:basis-[45%] lg:basis-[40%]`}
        >
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="my-6 flex flex-col items-center gap-4 sm:flex-row sm:grid sm:grid-cols-2 md:grid-cols-3">
        {feedback.map((currFeedback) => (
          <FeedbackCard
            key={currFeedback.id}
            id={currFeedback.id}
            name={currFeedback.name}
            content={currFeedback.content}
            title={currFeedback.title}
            image={currFeedback.img}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
