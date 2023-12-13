import { pageTitle } from "@/constants";
import React from "react";

const FoundersMessageSection = () => {
  return (
    <section
      id="founders-message"
      className="flex flex-col md:py-10 py-[23px]  bg-[#fff] px-5 md:h-[48vh] min-h-[280px] justify-center items-center mt-[12px]"
    >
      <div className="fontFamilyHelveticaNeue text-center md:text-[48px] text-3xl md:pb-[40] pb-[22px] font-medium md:leading-[60px]">
        <div className="lg:px-[256px] text-center">
          <span className="text-black ">
            {"We back early-stage founders who are obsessed with solving"}{" "}
          </span>
          <span className="text-[#f18b21] ">
          {"hard problems."}
          </span>
        </div>
      </div>
    </section>
  );
};

export default FoundersMessageSection;

// mx-auto mb-12 max-w-xl text-center text-3xl font-medium
// We back founders who are obsessed with solving hard problems
// We back early-stage founders who are obsessed with solving hard problems.