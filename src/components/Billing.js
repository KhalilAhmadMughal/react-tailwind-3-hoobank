import React from "react";
import styles from "../style";
import { apple, google, bill } from "../assets";

const Billing = () => {
  return (
    <section className="sm:grid sm:grid-cols-2 sm:items-center sm:gap-4 md:gap-8 lg:gap-14 ">
      <div>
        <img src={bill} alt="" />
      </div>
      <div className="flex flex-col gap-6 font-poppins my-10 md:my-20">
        <h1 className="text-[32px] font-bold">
          Easily control your billing & invoicing.
        </h1>
        <p className={`${styles.paragraph}`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className={`flex`}>
          <img src={apple} alt="" />
          <img src={google} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Billing;
