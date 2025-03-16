"use client";
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Branch from "./ui/branch";
import Button from "./ui/button";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  const containerRef = React.useRef(null);
  const timeline  = React.useRef(null);
  
  const { contextSafe } = useGSAP(() => {
    const careerText = gsap.utils.toArray(".careerText");
    careerText.forEach((text, i) => {
      const hasCareerSection = text.classList.contains("careerSection");
      gsap.from(text, {
        opacity : 0,
        duration : hasCareerSection ? "1" : ".4",
        xPercent : -50,
        scrollTrigger : {
          trigger : text,
          start: "top bottom",
          toggleActions: "play none none reset",
          // markers : true,
        }
      })
    })
  }, {
    
  })
  return (
    <div
      className="w-full h-fit bg-[#181818] grid grid-cols-3 relative"
      id="section3"
      ref={containerRef}
    >
      <Branch title={"CAREER"} id={1} className={"careerSection absolute top-40 -left-10 -rotate-90 careerText"}/>
      <div className="col-span-2 overflow-hidden">
        <div className="w-full min-h-[100vh] bg-[#000] flex py-20">
          <div className="w-full max-w-[16rem] ml-40 flex flex-col !justify-center items-center">
            <h1 
            className="text-[80px] text-white font-semibold text-center leading-[1.2] careerText">
              Be your own &#34;HERO&#34;
            </h1>

            <p className="px-3 mt-10 text-lg font-medium text-center text-white careerText">By working at ALL-IN, Make yourself a value reduction</p>
            <p className="text-[#ffffff80] text-sm mt-5 careerText">
            It&apos;s worth offering because you. Because you are a person who can save you. ALL-IN requires “ Hero ” in various occupations.
            </p>
            <Button
            className={"mx-auto"}
            // className={"mx-auto"}
            >
              Go to Careers
            </Button>
          </div>
        </div>
      </div>
      <div className="relative w-full h-fit">
        <div className="w-[150%] relative leftImage z-[10]">
          <img
            src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/top/career.jpg"
            alt=""
            className="absolute -left-[30%] w-full h-auto -top-10 py-28"
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
