"use client";
// import Image from 'next/image'
// import React from 'react'

// const Section5 = () => {
//   return (
//     // <div className="w-full h-fit">
//       <div className="w-full h-fit relative  bg-[#181818] flex flex-row">
//         <div className="bg-black h-[120vh] relative flex-[0_1_66.66666%] w-[66.66666%]">


//         </div>

//         <div className='relative flex-[0_1_33.33333%] w-[33.33333%]'>
//           <div className="py-20 -left-[40%] absolute top-0">
//             <img
//             src={"https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/top/career.jpg"}
//             alt="career"
//             className="w-[150%] h-auto"
//             />
//           </div>
//         </div>
//       </div>
//     // </div>
//   )
// }

// export default Section5


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
    <div
      className="w-full h-fit bg-[#181818] grid grid-cols-3"
      id="section3"
      ref={containerRef}
    >
      <div className="col-span-2 overflow-hidden">
        <div className="w-full h-[110vh] bg-[#000] flex pt-36 border">
          
        </div>
      </div>
      <div className="relative w-full">
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
