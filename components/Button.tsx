"use client";
import { buttonText, contactUs } from "@/constants";
import React from "react";

const Button = () => {
  return (
    <button
      className="bg-[#f18b21] hover:bg-orange-600 text-white font-semibold	 py-2 px-4 my-4 rounded-xl md:text-[24px] text-[16px] fontFamilyNotoSan w-[90%] md:w-[40%] mt-[20px]  md:min-h-[48px] min-h-[48px]"
      onClick={() => {
        window.open(contactUs.googleFormLink, "_blank");
      }}
    >
      {buttonText.pitch}
    </button>
  );
};

export default Button;