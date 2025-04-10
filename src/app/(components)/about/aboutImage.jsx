import Staylowkey from '@/assets/svgs/staylowkey'
import React from 'react'

const AboutImage = () => {
  return (
    <div className="bg-[#181818] relative flex w-full h-fit py-20 tab:py-0 tab:h-[50rem] overflow-hidden px-0 md:px-6" id="section4">
      <div className='relative flex flex-col justify-start w-full max-w-3xl px-3 text-white tab:px-0 tab:max-w-7xl gap-y-5 tab:gap-y-16 mx-auto minisection2'>
        <div className='absolute bottom-0 -left-[18%] tab:top-0 tab:bottom-auto motto'>
          <Staylowkey
          className="w-[283x] h-[296px] tab:w-[900px] tab:h-[850px]"
          width={"auto"}
          height={"auto"}
          fill={"#1D1D1D"}
          />
        </div>
      </div>
    </div>
  )
}

export default AboutImage
