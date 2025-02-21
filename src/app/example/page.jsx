
// // "use client"
// // import React, { useRef } from 'react'
// // import gsap from "gsap"
// // import { useGSAP } from '@gsap/react'
// // import ScrollTrigger from 'gsap/ScrollTrigger'

// // gsap.registerPlugin(ScrollTrigger)

// // const Section7 = () => {
// //   const container = useRef()
// //   const timeline = useRef()
// //   // const { contextSafe } = useGSAP(()=>{
// //   //   const panels = gsap.utils.toArray(".panel")
// //   //   gsap.set(".panel:not(:last-child)", {
// //   //     zIndex : (i, target, targets) => targets.length - i
// //   //   })
// //   //   timeline.current = gsap.timeline({
// //   //     defaults: {
// //   //       ease : "none"
// //   //     },
// //   //     onComplete : () => restart()
// //   //   })
// //   //   .to('.redd', {
// //   //     yPercent : -100
// //   //   })
// //   //   .to('.green', {
// //   //     // xPercent : -100
// //   //     yPercent : -100
// //   //   })
// //   //   .to('.orange', {
// //   //     // xPercent : 100
// //   //     yPercent : -100
// //   //   })
// //   //   .to('.yellow', {
// //   //     yPercent : -100
// //   //     // yPercent : -100
// //   //   })
// //   // })
// //   const { contextSafe } = useGSAP(() => {
// //     const panels = gsap.utils.toArray(".panel");
// //     gsap.set(".panel:not(:last-child)", {
// //       zIndex: (i, target, targets) => targets.length - i
// //     });
  
// //     timeline.current = gsap.timeline({
// //       defaults: {
// //         ease: "none"
// //       },
// //       onComplete: () => restart()
// //     })
// //     .to('.redd', {
// //       yPercent: -100
// //     }, "+=2")
// //     .to('.green', {
// //       yPercent: -100
// //     }, "+=2")
// //     .to('.orange', {
// //       yPercent: -100
// //     }, "+=2")
// //     .to('.yellow', {
// //       yPercent: -100
// //     }, "+=2")
// //     .to(".purple", {
// //       opacity : 1
// //     }, "+=2")
// //   });

// //   const restart = contextSafe(() => {
// //     timeline.current.restart();
// //   })
// //   return (
// //     <div className="containerr w-full absolute top-0 left-0 h-full" ref={container}>
// //       <button onClick={restart} className='absolute right-0 top-0 z-[100000] rounded-md py-2 px-6 bg-red-900 text-white'>Restart</button>
// //       <div className="flex redd absolute top-0 left-0 panel items-center justify-center min-h-screen w-full bg-red-500">1</div>
// //       <div className="flex green absolute top-0 left-0 panel items-center justify-center min-h-screen w-full bg-green-500">2</div>
// //       <div className="flex orange absolute top-0 left-0 panel items-center justify-center min-h-screen w-full bg-orange-500">3</div>
// //       <div className="flex yellow absolute top-0 left-0 panel items-center justify-center min-h-screen w-full bg-yellow-500">4</div>
// //       <div className="flex purple absolute top-0 left-0 panel items-center justify-center min-h-screen w-full bg-purple-500">5</div>
// //     </div>
// //   )
// // }

// // export default Section7

// "use client"
// import React, { useRef } from 'react'
// import gsap from "gsap"
// import { useGSAP } from '@gsap/react'
// import ScrollTrigger from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// const Section7 = () => {
//   const container = useRef()
//   const timeline = useRef()

//   const { contextSafe } = useGSAP(() => {
//     const panels = gsap.utils.toArray(".panel");
//     gsap.set(".panel:not(:last-child)", {
//       zIndex: (i, target, targets) => targets.length - i
//     });

//     timeline.current = gsap.timeline({
//       defaults: {
//         ease: "none",
//         duration : .5
//       },
//       onComplete: () => restart()
//     })
//     .to('.redd', {
//       yPercent: -100,
//       opacity : 0
//     }, "+=2")
//     .to('.redd', {
//       yPercent: 0, // Move the red section back to its original position
//       opacity : 1,
//       zIndex : -1
//     }, "+=.0000001")
//     .to('.green', {
//       yPercent: -100,
//       opacity : 0
//     }, "+=2")
//     .to('.orange', {
//       yPercent: -100,
//       opacity : 0
//     }, "+=2")
//     .to('.yellow', {
//       yPercent: -100,
//       opacity : 0
//     }, "+=2")
//     .to(".purple", {
//       yPercent: -100,
//       opacity : 0 // Slide the purple section up
//     }, "+=2")
//   });

//   const restart = contextSafe(() => {
//     // setTimeout(() => {
//       timeline.current.restart();
//     // }, 2000); // Slight delay before restarting to allow the loop-back animation to complete
//   });

//   return (
//     <div className="containerr w-full absolute top-0 left-0 h-full" ref={container}>
//       <button onClick={restart} className='absolute right-0 top-0 z-[100000] rounded-md py-2 px-6 bg-red-900 text-white'>Restart</button>
//       <div className="flex redd absolute top-0 left-0 panel items-center justify-center min-h-screen w-full bg-red-500">1</div>
//       <div className="flex green absolute top-0 left-0 panel items-center justify-center min-h-screen w-full bg-green-500">2</div>
//       <div className="flex orange absolute top-0 left-0 panel items-center justify-center min-h-screen w-full bg-orange-500">3</div>
//       <div className="flex yellow absolute top-0 left-0 panel items-center justify-center min-h-screen w-full bg-yellow-500">4</div>
//       <div className="flex purple absolute top-0 left-0 panel items-center justify-center min-h-screen w-full bg-purple-500">5</div>
//     </div>
//   )
// }

// export default Section7

"use client"
import React from 'react'
import gsap from 'gsap'
import Image from 'next/image';
import { useGSAP } from '@gsap/react';


const Example = () => {
  const container = React.useRef();
  const timeline = React.useRef();

  const { contextSafe } = useGSAP(() => {
    const images = gsap.utils.toArray(".imgt");
    const fadeDuration = 1.5;
    const stayDuration = 5;
    // show the first one
    gsap.set(images[0],{
      autoAlpha : 1
    })

    timeline.current = gsap.timeline({
      repeat : -1
    }).to(images.slice(1), {
      // y : -100,
      delay : stayDuration,
      autoAlpha : 1,
      duration : fadeDuration,
      stagger : fadeDuration + stayDuration 
    })
    .to(images.slice(0, images.length - 1), {
      // y : -150
      autoAlpha : 0,
      duration : .01,
      stagger : fadeDuration + stayDuration
    }, fadeDuration + stayDuration)
    .set(images[0], {
      autoAlpha : 1,
      // y : -100
    })
    .to(images[images.length - 1], {
      // y : -150,
      autoAlpha : 0,
      duration : fadeDuration
    }, "+=" + stayDuration)

  }, {
    scope : container
  })
  return (
    <div className='relative h-screen bg-[#111] overflow-hidden top-0 left-0' ref={container}>
      <div className='imgt img1 overflow-hidden'>
      <Image
        src={'https://res.cloudinary.com/dmkjaieb2/image/upload/v1721149993/first_xvuf2n.png'}
        width={500}
        height={500}
        alt='img'
        quality={100}
        className='w-full h-full object-cover object-center'
        priority
        />
      </div>
      <div className='imgt img2 overflow-hidden'>
      <Image
        src={'https://res.cloudinary.com/dmkjaieb2/image/upload/v1721149992/second_bzoqxh.png'}
        width={500}
        height={500}
        alt='img'
        quality={100}
        className='w-full h-full object-cover object-center'
        priority
        />
      </div>
      <div className='imgt img3 overflow-hidden'>
      <Image
        src={'https://res.cloudinary.com/dmkjaieb2/image/upload/v1721149993/third_ku4wj4.png'}
        width={500}
        height={500}
        alt='img'
        quality={100}
        className='w-full h-full object-cover object-center'
        priority
        />
      </div>
      <div className='imgt img4 overflow-hidden'>
      <Image
        src={'https://res.cloudinary.com/dmkjaieb2/image/upload/v1721149994/fourth_aztttm.png'}
        width={500}
        height={500}
        alt='img'
        quality={100}
        className='w-full h-full object-cover object-center'
        priority
        />
      </div>
    </div>
  )
}

export default Example
