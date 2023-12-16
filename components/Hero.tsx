import { buttonText, contactUs, heroData } from "@/constants";
import React from "react";
import Button from "./Button";
const Hero = () => {
  return (
    // md:h-[calc(100vh-120px)] h-[calc(60vh-96px)]
    <section
      id="home"
      className="flex flex-col py-10 bg-[#fff] md:justify-center md:items-center justify-center items-start p-[16px] md:h-[580px] min-h-[360px]"
    >
      {/* <div className="fontFamilyHelveticaNeue md:text-[4xl] text-[48px] font-medium">
        {heroData.title}
      </div> */}
      {/* <div className="fontFamilyHelveticaNeue text-[#f18b21] md:text-[160px] text-[48px] ">
        {"New Unicorn."}
      </div> */}
      {/* <div className="flex flex-col items-center font-medium">
        <div className="fontFamilyHelveticaNeue text-[#f18b21] md:text-[4xl] text-[48px] ">
          {heroData.title1}
        </div>
        <div
          id="line"
          className="w-[50%] ml-[100%] mr-[50%] bg-[#FFC957] xs:h-[8px] h-[2px]"
        ></div>
      </div>
      <div className="fontFamilyHelveticaNeue text-[#616161] md:text-[2xl] text-[24px]">
        {heroData.subTitle}
      </div> */}
      <div className="fontFamilyAvenir text-center md:text-3xl text-[28px] md:pb-[40] pb-[22px] font-medium">
        <div className="lg:px-[156px] md:text-center text-left md:text-[42px] text-[28px]">
          <div className="text-[#f18b21] text-[34px] md:text-[100px] font-black fontFamilyAvenirNormal md:h-[137px] md:flex justify-center items-center">
          {"Camel Capital"}{" "}
          </div>
          <div className="text-black text-[20px] md:text-[48px] mt-3 md:mt-[24px] fontFamilyAvenir font-extralight leading-8 md:leading-[0px] md:h-[20px]">{"Get funds."}</div>
          <div className="text-black text-[20px]  fontFamilyAvenir font-extralight leading-[24px] md:text-[48px] md:leading-[55px] md:mt-[12px] md:text-[#616161]">
            {"Get access to a network of founders, creators, leaders who have been there, done that."}
          </div>
        </div>
      </div>
      <div className="flex md:justify-center justify-start items-center w-full">
        <Button />
      </div>
    </section>
  );
};

export default Hero;
// text-4xl font-semibold xs:text-5xl lg:text-6xl
// Camel Capital is a network of leading founders & executives across the globe, investing in early-stage Indian startups.