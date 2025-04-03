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
  // const { contextSafe } = useGSAP(
  //   () => {
  //     const redSection = gsap.utils.toArray(".redSection")
  //     // console.log(redSection);
  //     const section3 = document.getElementById("section3");
  //     const leftImage = gsap.utils.toArray(".leftImage");
  //     // console.log(leftImage);
  //     timeline.current = gsap
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: section3,
  //           start: "100px bottom",
  //           toggleActions: "play none none reset",
  //           markers: false,
  //         },
  //       })
  //       .from(leftImage, {
  //         opacity: 0,
  //         x: -200,
  //         duration: 0.5,
  //         delay: 0.16,
  //         // ease : "power4.out",
  //         stagger: -0.15,
  //       });

  //     timeline1.current = gsap.timeline({
  //       scrollTrigger : {
  //         trigger : section3,
  //         start : "top bottom",
  //         toggleActions: "play none none reset",
  //         // markers: true,
  //       }
  //     }).from(redSection, {
  //       opacity : 0,
  //       x : -200,
  //       duration : .4,
  //       delay: .15,
  //       stagger : .15
  //     })
  //   },
  //   {
  //     scope: containerRef,
  //   }
  // );
  return (
    // <div
    //   className="w-full h-fit bg-[#181818] grid grid-cols-1 tab:grid-cols-3"
    //   id="section3"
    //   ref={containerRef}
    // >
    //   <div className="relative w-full tab:before:absolute tab:before:w-full tab:before:h-[50%] tab:before:bg-black border pt-[30%] tab:pt-0">
    //     <div className="tab:w-[189%] relative leftImage z-[10]">
    //       <img
    //         src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/top/about-1125x750-c-center.jpg"
    //         alt=""
    //         className="absolute tab:w-full tab:h-auto -top-[200px] tab:before:left-0 tab:before:-top-10 tab:py-28 w-[95%]"
    //       />
    //     </div>
    //   </div>
      // <div className="overflow-hidden tab:col-span-2">
      //   <div className="w-full h-full bg-[#640000] flex items-start justify-end pt-36 pr-16 pl-[50%] pb-20">
      //     <div className="flex flex-col w-full max-w-[22rem] space-y-6 h-fit">
      //       <Branch title={"IDEOLOGY"} id={1} className={"redSection"}/>
      //       <h1 className="font-extrabold text-white text-7xl redSection">RED</h1>
      //       <h2 className="text-lg font-medium tracking-wide text-white redSection">
      //         The color of the bond, betting everything.
      //       </h2>
      //       <p className="text-[#ffffff80] font-medium text-base leading-loose redSection">
      //         Red is one of the three colors and is said to be a color that
      //         increases the sensitivity of people even more. Shake
      //         sensibilities, enhance your feelings, and evoke action. That
      //         trigger is the significance, and Red says, the color of the bond
      //         between ALL-IN and the customer . Whether it looks clumsy from the
      //         side or far from economic rationality, we bet everything for our
      //         customers.
      //       </p>

            
      //       <Button>
      //         Go to About
      //       </Button>
      //     </div>
      //   </div>
      // </div>
    // </div>

    <div 
    className="flex flex-col w-full"
    id="section3"
    ref={containerRef}
    >
        <div className="overflow-hidden border h-full tab:h-[120vh] relative pt-[calc(20%+50px)] tab:pt-0 tab:flex">
          <div className="w-full tab:w-[30%] border h-full tab:h-[150vh] absolute tab:relative top-0 left-0 bg-[#181818]">
            <img src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/top/about-1125x750-c-center.jpg" alt="" className="object-center object-cover relative tab:absolute w-[90%] z-[10000]"/>
          </div>
          <div className="w-full tab:w-[70%] h-full bg-[#640000] flex items-start justify-end pt-[calc(30%+50px)] tab:pr-16  pb-20 relative z-[10]">
            <div className="flex flex-col w-full tab:max-w-[22rem] space-y-6 h-fit px-14 mt-10">
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
