import React from 'react'
import { TfiAngleLeft } from 'react-icons/tfi'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const ScrollToView = ({ section }) => {
  const {contextSafe} = useGSAP(() => {
    
  })
  const scrollToView = contextSafe(() => {
    console.log(section, typeof section);
    gsap.to(window, {
      ease : "none",
      // duration : 1,
      scrollTo : `${section}`,
      // scrollBehavior : "smooth"
    })
  })
  return (
    <div className='absolute flex items-center space-x-3 tracking-wider text-white transition-transform -rotate-90 tab:space-x-8 -left-12 tab:-left-4 bottom-20 tab:bottom-40 z-[10]'>
      <div onClick={scrollToView} className='p-3 border rounded-full border-[hsla(0,0%,100%,.3)] cursor-pointer'>
        <TfiAngleLeft className='w-2 h-2 tab:w-5 tab:h-5'/>
      </div>
      <p className='text-xs font-bold tracking-wider tab:text-sm'>Scroll to web site</p>
    </div>
  )
}

export default ScrollToView
