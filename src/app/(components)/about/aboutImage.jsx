"use client"

import Motto from '@/assets/svgs/motto'
import Staylowkey from '@/assets/svgs/staylowkey'
import React from 'react'
import { useGSAP } from '@gsap/react'
import { idkWhatToNameThisAnim, imagesAnimation, StayLowKeyAnim } from '@/app/utils/animate'

const AboutImage = () => {
  useGSAP(() => {
    imagesAnimation(".images");
    StayLowKeyAnim("#section4");
    idkWhatToNameThisAnim(".anim")
  })
  return (
    <div className="bg-[#181818] relative flex w-full min-h-[86rem] sm:h-[95rem] py-20 tab:py-0 tab:h-[70rem] overflow-hidden" id="section4">
      <div className='relative flex items-end w-full max-w-3xl text-white tab:px-0 tab:max-w-[1440px] gap-y-5 tab:gap-y-16 mx-auto minisection2'>
        <div className='hidden tab:block absolute bottom-56 left-0 tab:-left-[13%] tab:top-0 tab:bottom-auto motto'>
          <Staylowkey
          className="w-[283x] h-[296px] tab:w-[900px] tab:h-[850px] z-[10]"
          width={"auto"}
          height={"auto"}
          fill={"#1D1D1D"}
          />
        </div>

        {/* image section */}      
        <div className="absolute w-full h-fit max-w-full tab:max-w-[52%] top-0 left-0 tab:right-0 tab:left-auto">
          <div className="relative w-full max-w-[1000px] aspect-[3/2] mx-auto">
            <img 
              src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/about/slogan02.jpg" 
              className="absolute top-[0%] right-[0%] w-[60%] z-10 images"
              alt="img1"
            />
            <img 
              src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/about/slogan01.jpg" 
              className="absolute top-[25%] left-[0%] w-[45%] z-[9] images"
              alt="img2"
            />
            <img 
              src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/about/slogan05.jpg" 
              className="absolute top-[60%] left-[10%] w-[40%] z-[15] images"
              alt="img3"
            />
            <img 
              src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/about/slogan03.jpg" 
              className="absolute top-[70%] right-0 w-[38%] z-[11] images"
              alt="img4"
            />
            <img 
              src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/about/slogan04.jpg" 
              className="absolute top-[95%] left-[35%] w-[40%] z-[12] images"
              alt="img5"
            />
          </div>
        </div>

        <div className='max-w-4xl w-full relative z-[11] mx-auto flex flex-col gap-20 pb-20 px-3 sm:px-6'>
          <div className='tab:hidden absolute top-0 left-0 motto -z-[1000]'>
            <Staylowkey
            className="w-[450x] h-[390px]"
            width={"auto"}
            height={"auto"}
            fill={"#1D1D1D"}
            />
          </div>
          <Motto
          height={"auto"}
          width={"auto"}
          className={"w-[200px] h-[250px] tab:w-[340px] tab:h-[380px] motto anim"}
          />

          <div className='flex flex-col gap-4'>
            <h2 className="text-2xl font-medium tracking-wider anim">
              Conservatively and noble
            </h2>

            <p className="text-[15px] text-[hsla(0,0%,100%,.5)] tracking-wider anim">
            STAY LOW KEY has two meanings. First, it means &apos;being discreet&apos; and the other means &apos;believing in the values of others, believing in your values and living.&apos; These two are not dorsy. I can be discreet because I am aware that I am only a part of the world, and at the same time it is a proof that I am proud to be one that does not look like anyone else. ALL-IN provides society with the value that can be reduced because it is one that everyone has.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutImage
