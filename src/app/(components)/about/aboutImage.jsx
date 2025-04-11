import Staylowkey from '@/assets/svgs/staylowkey'
import React from 'react'

const AboutImage = () => {
  return (
    <div className="bg-[#181818] relative flex w-full h-[120vh] py-20 tab:py-0 tab:h-[50rem] overflow-hidden" id="section4">
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
        <div className="absolute w-full h-fit max-w-full tab:max-w-[52%] top-0 left-0 tab:right-0 tab:left-auto">
          {/* <div className='border h-fit w-full max-w-4xl mx-auto tab:max-w-full relative aspect-[3/2]'>
            <img 
            src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/about/slogan02.jpg" 
            alt="img1"  
            className='absolute right-0 top-0 h-auto w-[56%] z-10'/>
            <img 
            src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/about/slogan01.jpg" 
            alt="img2"  
            className='absolute left-5 top-36 h-auto w-[48%] z-[9]'/>
            <img 
            src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/about/slogan05.jpg" 
            alt="img2"  
            className='absolute left-28 mt-[46%] h-auto w-[35%] z-[15]'/>
            <img 
            src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/about/slogan03.jpg" 
            alt="img2"  
            className='absolute right-0 mt-[50%] h-auto w-[36%] z-[11]'/>
            <img 
            src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/about/slogan04.jpg" 
            alt="img2"  
            className='absolute left-[38%] mt-[60%] h-auto w-[35%] z-[12]'/>
          </div> */}

          <div className="relative w-full max-w-[1000px] aspect-[3/2] mx-auto">
            <img 
              src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/about/slogan02.jpg" 
              className="absolute top-[0%] right-[0%] w-[60%] z-10"
              alt="img1"
            />
            <img 
              src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/about/slogan01.jpg" 
              className="absolute top-[25%] left-[0%] w-[45%] z-[9]"
              alt="img2"
            />
            <img 
              src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/about/slogan05.jpg" 
              className="absolute top-[60%] left-[10%] w-[40%] z-[15]"
              alt="img3"
            />
            <img 
              src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/about/slogan03.jpg" 
              className="absolute top-[70%] right-0 w-[38%] z-[11]"
              alt="img4"
            />
            <img 
              src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/about/slogan04.jpg" 
              className="absolute top-[95%] left-[35%] w-[40%] z-[12]"
              alt="img5"
            />
          </div>
        </div>

        <div className=''>

        </div>

      </div>
    </div>
  )
}

export default AboutImage
