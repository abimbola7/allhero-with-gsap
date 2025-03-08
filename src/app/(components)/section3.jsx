"use client";

import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Branch from "./ui/branch";
import Button from "./ui/button";

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  const containerRef = React.useRef(null);
  const timeline = React.useRef(null);
  const timeline1 = React.useRef(null)
  const { contextSafe } = useGSAP(
    () => {
      const redSection = gsap.utils.toArray(".redSection")
      // console.log(redSection);
      const section3 = document.getElementById("section3");
      const leftImage = gsap.utils.toArray(".leftImage");
      // console.log(leftImage);
      timeline.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: section3,
            start: "100px bottom",
            toggleActions: "play none none reset",
            markers: false,
          },
        })
        .from(leftImage, {
          opacity: 0,
          x: -200,
          duration: 0.5,
          delay: 0.16,
          // ease : "power4.out",
          stagger: -0.15,
        });

      timeline1.current = gsap.timeline({
        scrollTrigger : {
          trigger : section3,
          start : "top bottom",
          toggleActions: "play none none reset",
          // markers: true,
        }
      }).from(redSection, {
        opacity : 0,
        x : -200,
        duration : .4,
        delay: .15,
        stagger : .15
      })
    },
    {
      scope: containerRef,
    }
  );
  return (
    <div
      className="w-full h-fit bg-[#181818] grid grid-cols-3"
      id="section3"
      ref={containerRef}
    >
      <div className="relative w-full before:absolute before:w-full before:h-[50%] before:bg-black">
        <div className="w-[189%] relative leftImage z-[10]">
          <img
            src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/top/about-1125x750-c-center.jpg"
            alt=""
            className="absolute left-0 w-full h-auto -top-10 py-28"
          />
        </div>
      </div>
      <div className="col-span-2 overflow-hidden">
        <div className="w-full h-full bg-[#640000] flex items-start justify-end pt-36 pr-16 pl-[50%] pb-20">
          <div className="flex flex-col w-full max-w-[22rem] space-y-6 h-fit">
            <Branch title={"IDEOLOGY"} id={1} className={"redSection"}/>
            <h1 className="font-extrabold text-white text-7xl redSection">RED</h1>
            <h2 className="text-lg font-medium tracking-wide text-white redSection">
              The color of the bond, betting everything.
            </h2>
            <p className="text-[#ffffff80] font-medium text-base leading-loose redSection">
              Red is one of the three colors and is said to be a color that
              increases the sensitivity of people even more. Shake
              sensibilities, enhance your feelings, and evoke action. That
              trigger is the significance, and Red says, the color of the bond
              between ALL-IN and the customer . Whether it looks clumsy from the
              side or far from economic rationality, we bet everything for our
              customers.
            </p>

            
            <Button>
              Go to About
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
