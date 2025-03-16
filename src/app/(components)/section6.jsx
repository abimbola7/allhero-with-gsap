"use client";

import { useRef } from "react";
import Branch from "./ui/branch";
import Button from "./ui/button";


const Section6 = () => {
  const containerRef = useRef(null);
  return (
    <div
      className="w-full h-fit bg-[#181818] grid grid-cols-3 relative pt-20"
      id="section6"
      ref={containerRef}
    >
      <Branch 
      title={"CAREER"} 
      id={1} 
      className={"absolute top-40 right-0 -rotate-90"}/>
      <div className="relative w-full h-fit">
        <div className="w-[165%] relative leftImage z-[10]">
          <img
            src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/top/umplex-960x960-c-center.jpg"
            alt=""
            className="absolute w-full h-auto -top-10 py-28"
          />
        </div>
      </div>
      <div className="col-span-2 overflow-hidden">
        <div className="w-full min-h-[100vh] bg-[#640000] flex py-20 !justify-end pr-[25%]">
          <div className="w-full max-w-[16rem] ml-40 flex flex-col !justify-center items-center">
            <h1 
            className="text-[80px] text-white font-semibold text-center leading-[1.2]">
              Be your own &#34;HERO&#34;
            </h1>

            <p className="px-3 mt-10 text-lg font-medium text-center text-white">By working at ALL-IN, Make yourself a value reduction</p>
            <p className="text-[#ffffff80] text-sm mt-5">
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
    </div>
  )
}

export default Section6