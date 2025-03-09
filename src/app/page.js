import React from "react"
import Slider from "./(components)/slider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Chatbot from "./(components)/chatbot";
import Section2 from "./(components)/section2";
import Section3 from "./(components)/section3";
import Section4 from "./(components)/section4";
import Section5 from "./(components)/section5";

export default function Home() {
  // const scrollRef = React.useRef(null);

  return (
    <div className="">
      <Slider />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}
