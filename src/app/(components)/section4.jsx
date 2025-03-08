// "use client"

// import React from 'react'
// import Branch from './ui/branch'
// import Image from 'next/image'
// import gsap from 'gsap'
// import { useGSAP } from '@gsap/react'
// import CSSRulePlugin from 'gsap/CSSRulePlugin'
// // import ScrollTrigger from 'gsap-trial/ScrollTrigger'

// // gsap.registerPlugin(ScrollTrigger)

// gsap.registerPlugin(CSSRulePlugin);

// const Section4 = () => {
//   const gridRef = React.useRef(null);
//   const timeline = React.useRef(null);
//   const {
//     contextSafe
//   } = useGSAP(() => {
//     timeline.current = gsap.timeline({
//       defaults : {
//         duration : .25
//       }
//     })
//     // .set(".gridSection", {
//     //   xPercent : -100
//     // })
//   }, {
//     scope : gridRef
//   })

//   const mouseEnter = contextSafe((grid, grid2) => {
//     timeline.current?.clear();
    
//     timeline.current.to(grid, {
//       xPercent : 100,
//       onUpdate: function () {
//         if (this.progress() >= 0.1) {
//           afterAnimation(grid2);
//         }
//       },
//     })
//   })
  
//   const mouseLeave = contextSafe(() => {
//     timeline.current?.clear(); 
//     timeline.current.set('.gridSection', {
//       xPercent : 0,
//     },0);
    
//   })

//   const afterAnimation = contextSafe((grid) => {
//     timeline.current?.to(grid, {
//       xPercent : 100,
//     })
//   })
//   return (
//     <div className='w-full min-h-screen bg-[#181818]'>
//       <div className="h-full mx-auto max-w-7xl">
//         <Branch 
//         title={"SERVICE"} 
//         id={2}
//         className={"py-10"}/>
//       </div>
//       <div className="w-full max-w-[1440px] grid grid-cols-3" ref={gridRef}>
//         <div 
//         onMouseEnter={() => { mouseEnter(".grid1", ".grid2") }}
//         onMouseLeave={mouseLeave}
//         className="relative overflow-hidden cursor-pointer">
//           <div className="absolute top-0 w-full h-full pointer-events-none -left-[100%] bg-black/50 gridSection grid2" />
//           <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-black/50 gridSection grid1" />
//           <Image
//           src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/top/service_details02.jpg"
//           alt="service-details"
//           className=""
//           quality={100}
//           priority
//           width={500}
//           height={1000}
//           />
//         </div>
//         <div 
//         onMouseEnter={() => { mouseEnter(".grid1", ".grid2") }}
//         onMouseLeave={mouseLeave}
//         className="relative overflow-hidden cursor-pointer">
//           <div className="absolute top-0 w-full h-full pointer-events-none -left-[100%] bg-black/50 gridSection grid2" />
//           <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-black/50 gridSection grid1" />
//           <Image
//           src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/top/service_details02.jpg"
//           alt="service-details"
//           className=""
//           quality={100}
//           priority
//           width={500}
//           height={1000}
//           />
//         </div>
//         <div 
//         onMouseEnter={() => { mouseEnter(".grid5", ".grid6") }}
//         onMouseLeave={mouseLeave}
//         className="relative overflow-hidden cursor-pointer">
//           <div className="absolute top-0 w-full h-full pointer-events-none -left-[100%] bg-black/50 gridSection grid6" />
//           <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-black/50 gridSection grid5" />
//           <Image
//           src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/top/service_details02.jpg"
//           alt="service-details"
//           className=""
//           quality={100}
//           priority
//           width={500}
//           height={1000}
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Section4


"use client"

import React from 'react'
import Branch from './ui/branch'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import CSSRulePlugin from 'gsap/CSSRulePlugin'
// import ScrollTrigger from 'gsap-trial/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

gsap.registerPlugin(CSSRulePlugin);

const Section4 = () => {
  const gridRef = React.useRef(null);
  const timeline = React.useRef(null);
  const lastHoveredItem = React.useRef(null);
  
  const {
    contextSafe
  } = useGSAP(() => {
    timeline.current = gsap.timeline({
      defaults : {
        duration : .25
      }
    })
  }, {
    scope : gridRef
  })

  const mouseEnter = contextSafe((grid, grid2, gridItem) => {
    // If we enter a new grid item, reset the previous animations first
    if (lastHoveredItem.current && lastHoveredItem.current !== gridItem) {
      timeline.current?.clear();
      gsap.set('.gridSection', { xPercent: 0 });
    }
    
    // Store the currently hovered item
    lastHoveredItem.current = gridItem;
    
    // Clear any ongoing animations
    timeline.current?.clear();
    
    // Run the animation
    timeline.current.to(grid, {
      xPercent : 100,
      onUpdate: function () {
        if (this.progress() >= 0.1) {
          afterAnimation(grid2);
        }
      },
    })
  })
  
  const mouseLeave = contextSafe((event) => {
    // Only reset if we're leaving the entire grid container
    if (event.relatedTarget && !gridRef.current.contains(event.relatedTarget)) {
      timeline.current?.clear(); 
      timeline.current.set('.gridSection', {
        xPercent : 0,
      }, 0);
      lastHoveredItem.current = null;
    }
  })

  const afterAnimation = contextSafe((grid) => {
    timeline.current?.to(grid, {
      xPercent : 100,
    })
  })
  
  return (
    <div className='w-full min-h-screen bg-[#181818]'>
      <div className="h-full mx-auto max-w-7xl">
        <Branch 
        title={"SERVICE"} 
        id={2}
        className={"py-10"}/>
      </div>
      <div className="w-full max-w-[1440px] grid grid-cols-3" ref={gridRef} onMouseLeave={mouseLeave}>
        <div 
        onMouseEnter={(e) => { mouseEnter(".grid1", ".grid2", e.currentTarget) }}
        className="relative overflow-hidden cursor-pointer grid-item-1">
          <div className="absolute top-0 w-full h-full pointer-events-none -left-[100%] bg-black/50 gridSection grid2" />
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-black/50 gridSection grid1" />
          <Image
          src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/top/service_details02.jpg"
          alt="service-details"
          className=""
          quality={100}
          priority
          width={500}
          height={1000}
          />
        </div>
        <div 
        onMouseEnter={(e) => { mouseEnter(".grid3", ".grid4", e.currentTarget) }}
        className="relative overflow-hidden cursor-pointer grid-item-2">
          <div className="absolute top-0 w-full h-full pointer-events-none -left-[100%] bg-black/50 gridSection grid4" />
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-black/50 gridSection grid3" />
          <Image
          src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/top/service_details02.jpg"
          alt="service-details"
          className=""
          quality={100}
          priority
          width={500}
          height={1000}
          />
        </div>
        <div 
        onMouseEnter={(e) => { mouseEnter(".grid5", ".grid6", e.currentTarget) }}
        className="relative overflow-hidden cursor-pointer grid-item-3">
          <div className="absolute top-0 w-full h-full pointer-events-none -left-[100%] bg-black/50 gridSection grid6" />
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-black/50 gridSection grid5" />
          <Image
          src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/top/service_details02.jpg"
          alt="service-details"
          className=""
          quality={100}
          priority
          width={500}
          height={1000}
          />
        </div>
      </div>
    </div>
  )
}

export default Section4