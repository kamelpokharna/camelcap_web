"use client";
import { investorsLogo } from "@/constants";
import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="flex flex-col md:py-10 py-[23px]  px-5 md:h-[860px]"
    >
      <div className="fontFamilyAvenirNormal text-center md:text-[80px] text-3xl md:pb-[35px] pb-[22px] font-medium md:h-[107px] md:flex justify-center items-center">
        Our Camels
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-[16px] mx-auto md:w-full md:px-[60px] md:justify-center md:items-center">
        {investorsLogo
          .sort((a, b) => a.position - b.position)
          .map((investorsLogoItem, index) => (
            <div
              key={investorsLogoItem.url}
              onClick={() =>
                investorsLogoItem.url &&
                window.open(investorsLogoItem.url, "_blank")
              }
              className="rounded-lg flex justify-center items-center p-2 bg-white shadow h-[80px] md:h-[107.17px] cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <Image
                src={investorsLogoItem.logo}
                alt="investors logo"
                className="object-contain h-[70px] md:w-[108px]"
                width={120}
                quality={100}
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Portfolio;
