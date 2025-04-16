"use client"

import React from 'react'

const History = () => {
  return (
    <div className='w-full bg-[#640000] py-[150px]'>
      <div className='max-w-4xl mx-auto border-none w-full text-white flex flex-col gap-4'>
        <div className='flex flex-row gap-3'>
          <div className=' max-w-[90px] w-full'>
            <p className='text-2xl font-semibold pr-4'>11 BY</p>
          </div>
          <div className='flex flex-col pl-4 pb-8 relative before:absolute before:w-[6px] before:h-[6px] before:rounded-full before:bg-white before:top-2 gap-6 before:-left-0.5 after:absolute after:w-[1px] after:border-r after:border-r-[hsla(0,0%,100%,.2)] after:h-full after:top-4 after:-left-[.5px]'>
            <h1 className="text-xl font-medium">
              The Chosen One
            </h1>
            <p className='text-[#ffffff80] text-[15px] text-medium'>
              Born in 41 BBY on Tatooine, Anakin was freed and taken to the Jedi Temple around 32 BBY. Despite warnings, he was trained as a Jedi under Obi-Wan Kenobi and became a renowned hero during the Clone Wars
            </p>
          </div>
        </div>
        <div className='flex flex-row gap-3'>
          <div className=' max-w-[90px] w-full'>
            <p className='text-2xl font-semibold pr-4'>19BY</p>
          </div>
          <div className='flex flex-col pl-4 pb-8 relative before:absolute before:w-[6px] before:h-[6px] before:rounded-full before:bg-white before:top-2 gap-6 before:-left-0.5 after:absolute after:w-[1px] after:border-r after:border-r-[hsla(0,0%,100%,.2)] after:h-full after:top-4 after:-left-[.5px]'>
            <h1 className="text-xl font-medium">
              Fall to the Dark Side
            </h1>
            <p className='text-[#ffffff80] text-[15px] text-medium'>
              Consumed by fear of losing Padmé and manipulated by Darth Sidious, Anakin turned against the Jedi, became Darth Vader, and helped execute Order 66. He dueled Obi-Wan Kenobi on Mustafar, was defeated, and rebuilt in cybernetic armor.
            </p>
          </div>
        </div>
        <div className='flex flex-row gap-3'>
          <div className=' max-w-[90px] w-full'>
            <p className='text-2xl font-semibold pr-4'>2ABY</p>
          </div>
          <div className='flex flex-col pl-4 pb-8 relative before:absolute before:w-[6px] before:h-[6px] before:rounded-full before:bg-white before:top-2 gap-6 before:-left-0.5 after:absolute after:w-[1px] after:border-r after:border-r-[hsla(0,0%,100%,.2)] after:h-full after:top-4 after:-left-[.5px]'>
            <h1 className="text-xl font-medium">
              Fall of the Empire
            </h1>
            <p className='text-[#ffffff80] text-[15px] text-medium'>
            For over two decades, Vader served as the Emperor’s enforcer—crushing uprisings, hunting Jedi, and ruling through fear. During this time, he unknowingly fathered twins: Luke Skywalker and Leia Organa.
            </p>
          </div>
        </div>
        <div className='flex flex-row gap-3'>
          <div className=' max-w-[90px] w-full'>
            <p className='text-2xl font-semibold pr-4'>4ABY</p>
          </div>
          <div className='flex flex-col pl-4 pb-8 relative before:absolute before:w-[6px] before:h-[6px] before:rounded-full before:bg-white before:top-2 gap-6 before:-left-0.5 after:absolute after:w-[1px] after:border-r after:border-r-[hsla(0,0%,100%,.2)] after:h-full after:top-4 after:-left-[.5px]'>
            <h1 className="text-xl font-medium">
              Redemption and Legacy
            </h1>
            <p className='text-[#ffffff80] text-[15px] text-medium'>
            During the Battle of Endor, Vader faced his son Luke. In a final act of defiance against the Emperor, he turned back to the light, destroyed Darth Sidious, and died—redeemed—as Anakin Skywalker. His legacy lived on through his children and the Jedi that followed.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default History
