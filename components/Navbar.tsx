"use client";
import React, { useState } from "react";
import Image from "next/image";
import { appLogo, closeIcon, menuIcon } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  let Links = [
    // { name: "Home", link: "#home" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Team", link: "#team" },
  ];
  let [open, setOpen] = useState(false);

  const removeLink = () => {
    setTimeout(() => {
        window.history.pushState(null, "", window.location.href.split("#")[0]);
    },1000)
  }

  return (
    <nav className="w-full md:h-[120px] h-[96px] bg-rootBackgroundColor  content-center  flex-1 md:justify-center  px-[16px] flex justify-between items-center">
      <Image
        onClick={() => window.location.reload()}
        src={appLogo}
        alt="camel capital logo"
        className="object-contain h-[56px] md:h-[148px] "
        unoptimized
        quality={100}
      />
      <div className="flex items-end justify-end w-full">
      <ul className="hidden h-full gap-12 lg:flex">
        {Links.map((link) => (
          <Link href={link.link} key={link.name} className="text-[24px] fontFamilyHelveticaNeue flexCenter pb-1.5 transition-all ease-in hover:text-linkColor text-[#222] hover:text-linkColor cursor-pointer">
            {link.name}
          </Link>
        ))}
      </ul>
      
      </div>

      <span className="text-3xl flex  h-full justify-end items-center md:invisible transition-all ease-in duration-500">
        <button className="bg-white p-2 " onClick={() => setOpen(!open)}>
          <Image
            className="object-contain w-[34px] cursor-pointer"
            alt="menu"
            src={open ? closeIcon : menuIcon}
          />
        </button>
      </span>
      <ul
        className={`w-[95%] absolute top-[15px] z-10 justify-center flex items-center bg-[#fff] flex-col ${
          open ? "visible" : "invisible"
        } py-4 
        overflow-hidden bg-white ring-1 ring-black ring-opacity-5 px-4 pt-4"
        `}
      >
        <div className="w-full h-full">
          <div className="flex justify-between items-center">
            <Image
              src={appLogo}
              alt="camel capital logo"
              className="object-contain h-[32px] w-[32px]"
            />
            <Image
              src={closeIcon}
              alt="clsose"
              className="cursor-pointer h-[24px]"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="flex flex-col pt-2 pb-3">
            {open ? (
              Links.map((link) => (
                <li key={link.name} className="py-[0.5rem]">
                  <a
                    href={link.link}
                    onClick={() => {
                        setOpen(!open)}}
                    className="text-[16px] fontFamilyHelveticaNeue duration-500 cursor-pointer block py-2 text-base hover:bg-gray-100  text-gray-700 hover:text-gray-900"
                  >
                    {link.name}
                  </a>
                </li>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
