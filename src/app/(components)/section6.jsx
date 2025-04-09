"use client";

import { useRef } from "react";
import Branch from "./ui/branch";
import Button from "./ui/button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Section6 = () => {
  const containerRef = useRef(null);
  const timeline = useRef(null);
  const { contextSafe } = useGSAP(
    () => {
      const section6 = document.getElementById("section6");
      timeline.current = gsap.timeline({
        scrollTrigger : {
          trigger : section6,
          start : "8% bottom",
          toggleActions : "play none none reset",
          // markers : true
        }
      }).from(".careerSect", {
        opacity : 0,
        ease : "power4.out",
        x : -300,
        duration : .7,
        stagger : -0.1
      })
    }
  )
  return (
    <div 
    className="flex flex-col w-full h-fit bg-[#181818]"
    id="section3"
    ref={containerRef}
    >
        <div className="overflow-hidden h-full tab:h-[fit] relative pt-[calc(0%+10px)] tab:pt-0 flex flex-col tab:flex-row mt-20">
          <div className="w-full tab:w-[30%] h-fit tab:h-[200vh] relative top-0 left-0 bg-[#640000] tab:bg-[#181818]">
            <img src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/top/umplex-960x960-c-center.jpg" alt="" className="object-center object-cover relative tab:absolute w-[90%] tab:w-[180%] z-[90] tab:max-w-none careerText tab:top-20 mt-[calc(16%+20px)]"/>
          </div>
          <div className="w-full tab:w-[70%] h-full bg-[#640000] flex items-start justify-end tab:justify-normal tab:pl-[calc(30%+50px)] pt-[calc(10%+50px)] tab:pt-[20%] pb-[12%] relative z-[10] tab:pr-8 leftImage">
            <div className="flex flex-col w-full tab:max-w-[30rem] space-y-6 h-fit px-14 tab:px-0 mt-10 items-center">
              <Branch title={"IDEOLOGY"} id={1} className={"redSection"}/>
              <h1 
               className="text-7xl text-white font-semibold text-center leading-[1.2] careerText">
                 Umplex
               </h1>
              <p className="mt-20 text-xl font-semibold tracking-wider text-center text-white careerText">A meeting place that is not obsessed with prejudice</p>
              <p className="text-[#ffffff80] text-sm mt-8 leading-8 careerText">
              Umplex is a whole new form of job listing site with emotions on its search axis. &#34;What kind of movie should I watch today?&#34; You can enjoy the joy of meeting yourself with a warm feeling as when you look at the movie theater posters.
              </p>
              <Button className={"!w-full"}>
                Go to About
              </Button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Section6