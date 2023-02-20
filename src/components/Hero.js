import React from "react";
import styles from "../style";
import GetStarted from "./GetStarted";
import { discount, robot } from "../assets";

const Hero = () => {
  return (
    <section className={`flex flex-col ${styles.paddingY} font-poppins `}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col md:flex-row md:justify-between px-6 md:pl-16 md:pr-0`}
      >
        <div className="md:basis-[60%]">
          <div
            className={`flex flex-row items-center py-4 bg-discount-gradient rounded-lg px-2`}
          >
            <img className="w-[32px] h-[32px]" src={discount} alt="" />
            <p className={`uppercase font-normal text-gray-400 pl-2`}>
              <span className="text-white">20%</span> discount for{" "}
              <span className="text-white">1 month</span> account
            </p>
          </div>
          <div className="w-full flex flex-col">
            <div className="flex flex-row justify-between w-full mt-6">
              <h1 className="text-white capitalize text-[44px] ss:text-[72px] leading-[60px] ss:leading-[100px] font-semibold ">
                {" "}
                the next <br className="sm:hidden block" />
                <span className="text-gradient">genration</span>
                <br className="sm:hidden block" />
              </h1>
              <div className="flex mr-0 md:mr-4">
                <GetStarted />
              </div>
            </div>
            <h1 className="text-white capitalize text-[44px] ss:text-[72px] leading-[60px] ss:leading-[100px] font-semibold">
              payment method.
            </h1>
            <p className={`mt-6 ${styles.paragraph} max-w-[470px]`}>
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
          </div>
        </div>
        <div className="md:basis-[40%] mt-8">
          <img src={robot} alt="robot" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
