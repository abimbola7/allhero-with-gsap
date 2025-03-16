import Link from 'next/link';
import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const Button = ({ children, className }) => {
  const buttonRef = React.useRef(null);
  const slideButtonRef = React.useRef(null);
  const textRef = React.useRef(null);
  const timeline = React.useRef(null);
  const timeline1 = React.useRef(null);

  const { contextSafe } = useGSAP(() => {
    timeline1.current = gsap.timeline({
      scrollTrigger : {
        trigger: buttonRef.current,
        start: "top bottom",
        toggleActions: "play none none reset",
      }
    }).from(buttonRef.current, {
      opacity: 0,
      x: -200,
      duration: 0.5,
      delay: 0.16,
      ease: "power4.out",
      stagger: -0.15,
    })

    timeline.current = gsap.timeline({
      paused: true,
      defaults: {
        duration: .5,
        ease: "power4.out"
      }
    }).set(textRef.current, {
      color: "#640000"
    })
    .from(slideButtonRef.current, 
      { xPercent: -100, scaleX: 1 },
      0
    )
    .to(slideButtonRef.current, 
      { scaleX: 0, transformOrigin: "right" }, 
      0.2
    )
    .fromTo(textRef.current, 
      {color: "#640000"}, 
      {color: "#fff"}, 
      0
    )
    .to(textRef.current, 
      {color: "#640000"}, 
      0.3
    )
  }, [])

  const mouseEnter = contextSafe(() => {
    timeline?.current?.play(0);
  })
  
  const mouseLeave = contextSafe(() => {
    timeline.current?.seek(0).pause();
  })

  return (
    <Link 
      ref={buttonRef}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      href="" 
      className={`bg-white text-[#640000] w-48 h-16 text-sm !mt-10 font-semibold relative !p-0 !m-0 overflow-hidden ${className}`}
    >
      <div 
        ref={textRef}
        className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full !p-0 bg-transparent !m-0"
      >
        {children}
      </div>
      <div 
        ref={slideButtonRef}
        className="absolute top-0 left-0 z-0 flex items-center justify-center w-full h-full bg-[#b30606] !p-0 !m-0" 
      />
    </Link>
  )
}

export default Button
