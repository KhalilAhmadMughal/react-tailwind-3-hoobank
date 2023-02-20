import React from "react";

import InfoBox from "./InfoBox";
import { card } from "../assets";

const CardDeals = () => {
  const content =
    "Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.";
  const title = "Find a better card deal in few easy steps.";
  const buttonText = "get started";
  return (
    <section className="sm:grid sm:grid-cols-2 sm:items-center sm:gap-4 md:gap-8 lg:gap-14 ">
      <InfoBox buttonText={buttonText} content={content} title={title} />
      <div className="flex">
        <img src={card} alt="" />
      </div>
    </section>
  );
};

export default CardDeals;
