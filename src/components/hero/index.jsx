import React from "react";
import localFont from "next/font/local";
import { HiArrowCircleRight } from "react-icons/hi";
import CustomButton from "../utilities/button";
import { BiSolidUser, BiUserCircle } from "react-icons/bi";

const myFont = localFont({
  src: "../../../public/fonts/ModernAesthetic-DemoVersion-Regular.otf",
  variable: "--font-myFont",
});

const CircleText = ({ text, radius }) => {
  const characters = text.split("");
  const angle = 360 / characters.length;

  return (
    <div className="">
      {characters.map((char, index) => {
        const style = {
          // transform: `rotate(${angle * index}deg) translate(${radius}px) rotate(-${angle * index}deg)`
        };
        return (
          <span key={index} style={style} className="circle-char text-sm ">
            {char}
          </span>
        );
      })}
    </div>
  );
};
// "WsParadoseRegular-1jPAe.ttf"
const HeroSection = () => {
  return (
    <div className=" flex justify-center flex-col min-h-[75vh]">
      <div className={`${myFont.variable}`}>
        <h1 className="md:text-[7.5rem] text-[3rem] text-center md:text-center md:p-3 py-8 px-2  font- font-myFont  flex flex-col">
          <span>Building</span>
          <p>
            <span className="border-b-[10px] border-yellow-400">Web</span>
          <span> Products</span>
            </p>
        </h1>
      </div>
      <div
        className={`${myFont.variable} flex justify-between flex-col md:flex-row`}
      >
        <div className="md:w-[27%] text-balance md:mx-12 p-4 text-center md:text-left md:text-sm md:p-4">
          <p className="leading-relaxed lg:text-base text-sm ">
            Through passion, dedication, grit and hardwork, <br /> I strive to
            develop web products that users aren't just pleased with but also
            want to stay on <br /> I am <strong>Dan Precious</strong>, pleased
            to have you here
          </p>
        </div>
        <div>{/* animation */}</div>
        <div className="items-center relative flex md:mx-12">
          <div className="text-[3rem] rounded-ico  hidden md:flex">
            <HiArrowCircleRight className="text-yellow-400 hover:text-lime-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
