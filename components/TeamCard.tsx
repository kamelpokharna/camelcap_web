import { linkedinLogo } from "@/constants";
import Image from "next/image";
import React from "react";

const TeamCard = ({
  name,
  title,
  img,
  linkedinId,
  imageStyle,
  isLeft,
}: {
  name: string;
  title: string;
  img: any;
  linkedinId: string;
  imageStyle?: any;
  isLeft?: boolean;
}) => (
  <div
    id="team"
    className={`w-full bg-transparent overflow-hidden flex items-center md:justify-center justify-between md:flex-col ${
      isLeft ? "flex-row-reverse" : "flex-column"
    }`}
  >
    <Image
      className="sm:h-[180px] sm:w-[180px] h-[120px] w-[120px] md:h-[280px] md:w-[280px] lg:h-[280px] lg:w-[280px] object-cover object-center rounded-[50%] border-[3px] bg-white"
      src={img}
      unoptimized
      style={imageStyle}
      alt="profile image"
    />
    <div className="py-5 w-full">
      <div className=" md:text-[30px] text-[24px] mb-[2px] text-center name">
        {name}
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className="fontFamilyHelveticaNeue md:text-[18px] text-[#666666] text-[18px] text-center founders">
          {title}
        </div>
        <div className="flex justify-center items-center pl-2">
          <a
            href={linkedinId}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <Image
              src={linkedinLogo}
              alt="LinkedIn"
              className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default TeamCard;
// border-themeColor
