import Staylowkey from '@/assets/svgs/staylowkey'
import React from 'react'

const AboutImage = () => {
  return (
    <div className="bg-[#181818] relative flex w-full h-[150vh]  py-20 tab:py-0 tab:h-[50rem] overflow-hidden" id="section4">
      <div className='relative flex flex-col justify-start w-full max-w-3xl text-white tab:px-0 tab:max-w-[1440px] gap-y-5 tab:gap-y-16 mx-auto minisection2'>
        <div className='absolute bottom-0 -left-[13%] tab:top-0 tab:bottom-auto motto'>
          <Staylowkey
          className="w-[283x] h-[296px] tab:w-[900px] tab:h-[850px]"
          width={"auto"}
          height={"auto"}
          fill={"#1D1D1D"}
          />
        </div>

        {/* image section */}
        
        <div className="absolute w-full h-fit max-w-full tab:max-w-[52%] top-0 right-0">
          <img 
          src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/about/slogan02.jpg" 
          alt="img1"  
          className='absolute right-0 top-0 h-auto w-[56%] z-10'/>
          <img 
          src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/about/slogan01.jpg" 
          alt="img2"  
          className='absolute left-20 top-36 h-auto w-[48%] z-[9]'/>
          <img 
          src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/about/slogan05.jpg" 
          alt="img2"  
          className='absolute left-40 mt-[43%] h-auto w-[33%] z-[15]'/>
          <img 
          src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/about/slogan03.jpg" 
          alt="img2"  
          className='absolute right-0 mt-[50%] h-auto w-[36%] z-[11]'/>
          <img 
          src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/about/slogan04.jpg" 
          alt="img2"  
          className='absolute left-[35%] mt-[60%] h-auto w-[35%] z-[12]'/>
        </div>
      </div>
    </div>
  )
}

export default AboutImage
