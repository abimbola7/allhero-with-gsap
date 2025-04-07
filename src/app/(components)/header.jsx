"use client"
import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Hamburger from './hamburger';
import IconSvg from '@/assets/svgs/iconsvg';



gsap.registerPlugin(ScrollTrigger)

const Header = () => {
  const status = useSelector(state=>state.ui.show);
  const headerRef = React.useRef();
  useGSAP(()=>{
    if (headerRef.current) {
      gsap.from(headerRef?.current, {
        delay : 1.5,
        yPercent : -100,
        duration : 1,
        opacity : 0
      })
    }
  },{
    dependencies : [status],
  })

  useGSAP(() => {
    const section2 = document.querySelector("#section2");
    const header = gsap.utils.toArray(".header");
    
    const tl = gsap.timeline({
      scrollTrigger : {
        trigger : section2,
        start : "top 20%",
        end : "10% top",
        toggleActions : "play none reverse none",
        // scrub : 2,
        // markers : true,
      }
    }).to(header, {
      x : 100,
      duration : .3,
      stagger : -.04,
      opacity : 0
    })
  }, {
    dependencies : [status]
  })

  useGSAP(()=>{
    const mm  = gsap.matchMedia()
    const section2 = document.querySelector("#section2");
    const hamburger = gsap.utils.toArray(".hamburger");
    mm.add("(min-width: 991px)", () => {
      const tl1 = gsap.timeline({
        scrollTrigger : {
          trigger : section2,
          start : "top 21%",
          end : "1% top",
          toggleActions : "play none reverse none",
          // scrub : 2,
          // markers : true  
        }
      })
      .from(".icon", {
        x : -100,
        ease : "expo.inOut",
        duration : 1,
        opacity : 0
      },0)
      .from(".hamburger", {
        x : 100,
        duration : .3,
        opacity : 100,
        stagger : -.05,
        ease : "expo.inOut"
      },0)
    })

    return () => {
      mm.revert();
    }
  }, {
    dependencies : [status]
  })
  
  
  return (
    <>
      {
        status && (
          <div className='relative'>
            <div className='fixed flex items-center justify-between w-full px-8 h-fit left-0 logo top-0 z-[100]'>
              <div className='icon relative z-[1000] mt-4'>
                <IconSvg
                fill={"#fff"}
                width={"70"}
                height={"70"}
                key={2}
                />  
              </div>

              <Hamburger />
            </div>
            <header className='fixed w-full z-[100000] top-0 left-0' ref={headerRef}>
              <div className='max-w-[95%] mx-auto hidden tab:flex items-center justify-end space-x-12 font-bold uppercase text-white pb-4 pt-16 text-sm'>
                <div className='header'>about</div>
                <div className='header'>service</div>
                <div className='header'>work</div>
                <div className='header'>company</div>
                <div className='header'>career</div>
                <div className='header'>news</div>
                <div className='header'>contact</div>
              </div>
            </header> 
          </div>
        )    
      }
    </>
  )
}

// const Header = () => {
//   const status = useSelector(state => state.ui.show);
//   const headerRef = useRef(null);
//   const iconRef = useRef(null);
//   const hamburgerRef = useRef(null);
//   const headerItemsRef = useRef([]);

//   // Animation for header appearing
//   useGSAP(() => {
//     if (headerRef.current) {
//       gsap.from(headerRef.current, {
//         delay: 1.5,
//         yPercent: -100,
//         duration: 1,
//         opacity: 0,
//       });
//     }
//   }, { dependencies: [status] });

//   // Animation for header items
//   useGSAP(() => {
//     const section2 = document.querySelector("#section2");
//     if (!section2 || headerItemsRef.current.length === 0) return;

//     gsap.timeline({
//       scrollTrigger: {
//         trigger: section2,
//         start: "top 20%",
//         end: "10% top",
//         toggleActions: "play none reverse none",
//       }
//     }).to(headerItemsRef.current, {
//       x: 100,
//       duration: 0.3,
//       stagger: -0.04,
//       opacity: 0,
//     });

//   }, { dependencies: [status] });

//   // Animation for icon & hamburger
//   useGSAP(() => {
//     const section2 = document.querySelector("#section2");
//     if (!section2 || !iconRef.current || !hamburgerRef.current) return;

//     gsap.timeline({
//       scrollTrigger: {
//         trigger: section2,
//         start: "top 21%",
//         end: "1% top",
//         toggleActions: "play none reverse none",
//       }
//     })
//       .from(iconRef.current, {
//         x: -100,
//         ease: "expo.inOut",
//         duration: 1,
//         opacity: 0
//       }, 0)
//       .from(hamburgerRef.current, {
//         x: 100,
//         duration: 0.3,
//         opacity: 1,
//         ease: "expo.inOut"
//       }, 0);

//   }, { dependencies: [status] });

//   return (
//     <>
//       {status && (
//         <header className='fixed w-full z-[100000] top-0 left-0' ref={headerRef}>
//           <div className='absolute top-0 left-0 flex items-end justify-between w-full h-full px-8 logo'>
//             <div ref={iconRef}>
//               <IconSvg fill={"#fff"} height={"70"} width={"70"} key={2} />
//             </div>
//             <div ref={hamburgerRef}>
//               <Hamburger />
//             </div>
//           </div>
//           <div className='max-w-[95%] mx-auto hidden tab:flex items-center justify-end space-x-12 font-bold uppercase text-white pb-4 pt-16 text-sm'>
//             {["about", "service", "work", "company", "career", "news", "contact"].map((item, index) => (
//               <div key={index} ref={el => headerItemsRef.current[index] = el}>
//                 {item}
//               </div>
//             ))}
//           </div>
//         </header>
//       )}
//     </>
//   );
// };

export default Header
