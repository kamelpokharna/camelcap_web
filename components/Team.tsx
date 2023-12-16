import { ourTeam, pageTitle } from "@/constants";
import React from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <section
      id="team"
      className=" flex-col  pb-[23px]  px-5 md:h-[580px] min-h-[370px] md:mt-[35px] mt-[20px] justify-items-center items-center"
    >
      <div className="fontFamilyAvenirNormal text-center md:text-6xl text-3xl md:pb-[35px] md:pt-[0px] pb-[22px] font-medium md:text-[80px]">
        {pageTitle.team}
      </div>
      
      {/* <div className="flex flex-col md:py-10 pb-[23px]  px-5 md:h-[100vh] min-h-[370px] md:mt-[40px] mt-[20px]"> */}
      <div className="flex justify-center items-center">
      <div className="justify-center w-full relative z-[1] md:gap-[10px] gap-[16px] items-center grid grid-cols-1 md:grid-cols-2 md:w-[45rem]">
        {ourTeam.map((team, index) => (
          <TeamCard
            key={index}
            isLeft={index %2 === 0}
            name={team.name}
            title={team.title}
            img={team.img}
            linkedinId={team.linkedinId}
            imageStyle={team.imageStyle}
          />
        ))}
      {/* </div> */}
      </div>
      </div>
    </section>
  );
};

export default Team;
