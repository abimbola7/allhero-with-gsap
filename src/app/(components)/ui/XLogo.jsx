import React from 'react'

const XLogo = () => {
  return (
    <div className='absolute h-5 mb-3 cursor-pointer w-7 z-[100] right-6 xSymb'>
      <div className='w-full h-[.2rem] bg-white absolute hamburger top-0 origin-top-left rotate-[39deg] right-0'></div>
      <div className='w-full h-[.2rem] bg-white absolute hamburger bottom-0 right-0 origin-bottom-left -rotate-[39deg]'></div>
    </div>
  )
}

export default XLogo
