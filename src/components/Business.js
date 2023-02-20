import React from "react";

import { features } from "../constants/data";
import FeatureCard from "./FeatureCard";
import InfoBox from "./InfoBox";

const Business = () => {
  const content =
    "With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.";
  const title = "You do the business, we’ll handle the money.";
  const buttonText = "get started";
  return (
    <section className="sm:grid sm:grid-cols-2 sm:items-center sm:gap-4 md:gap-8 lg:gap-14 ">
      <InfoBox title={title} content={content} buttonText={buttonText} />
      <div className="flex flex-col gap-6 my-10 md:my-20">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            content={feature.content}
          />
        ))}
      </div>
    </section>
  );
};

export default Business;
