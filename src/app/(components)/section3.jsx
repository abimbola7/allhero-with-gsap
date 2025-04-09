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
      const redSection1 = gsap.utils.toArray(".redSection1")
      // console.log(redSection);
      const section3 = document.getElementById("section3");
      const leftImage = gsap.utils.toArray(".leftImage");
      console.log(leftImage);
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
          duration: 1.0,
          delay: 0.16,
          ease : "power4.out",
          stagger: -0.15,
        })

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
        // duration : .4,
        duration: 1.0,
        ease: "power4.out",
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
    className="flex flex-col w-full h-fit"
    id="section3"
    ref={containerRef}
    >
        <div className="overflow-hidden h-full tab:h-[120vh] relative pt-[calc(20%+50px)] tab:pt-0 flex flex-col tab:flex-row">
          <div className="w-full tab:w-[30%] h-full tab:h-[200vh] absolute tab:relative top-0 tab:top-36 left-0 bg-[#181818]">
            <img src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/top/about-1125x750-c-center.jpg" alt="" className="object-center object-cover relative tab:absolute w-[90%] tab:w-[200%] z-[90] tab:max-w-none leftImage"/>
          </div>
          <div className="w-full tab:w-[70%] h-full bg-[#640000] flex items-start justify-end tab:justify-normal tab:pl-[calc(30%+50px)] pt-[calc(30%+50px)] tab:pt-32 pb-20 relative z-[10] tab:pr-8 leftImage">
            <div className="flex flex-col w-full tab:max-w-[30rem] space-y-6 h-fit px-7 sm:px-14 tab:px-0 mt-10">
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

              
              <Button
              href={"/about"}
              >
                Go to About
              </Button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Section3;
