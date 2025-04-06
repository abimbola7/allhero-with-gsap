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
    className="flex flex-col w-full overflow-hidden h-fit"
    id="section3"
    ref={containerRef}
    >
        <div className="overflow-hidden h-full tab:h-[fit] relative tab:pt-0 flex flex-col-reverse tab:flex-row">
          <div className="w-full tab:w-[70%] h-fit bg-[#181818] tab:bg-[black] flex items-start justify-center tab:justify-normal md:py-10 tab:py-20 relative z-[10]">
            <div className="flex flex-col w-full max-w-[30rem] space-y-6 h-fit px-14 tab:px-0 mt-10 justify-center items-center">
              <div className="w-full max-w-[16rem] tab:ml-40 flex flex-col !justify-center items-center">
                <h1 
                className="text-[80px] text-white font-semibold text-center leading-[1] careerText">
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
              <div className="w-full tab:w-[30%] h-full tab:h-[140vh] relative top-0  left-0 bg-[#181818] right-0 tab:right-auto">
                <img src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/top/career.jpg" alt="" className="object-center object-cover relative tab:absolute w-[90%] tab:w-[150%] z-[90] tab:max-w-none leftImage right-0 tab:top-24 float-right tab:float-none careerText"/>
              </div>
          </div>
    </div>
  );
};

export default Section3;
