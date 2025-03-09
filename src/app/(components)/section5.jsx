import Image from 'next/image'
import React from 'react'

const Section5 = () => {
  return (
    // <div className="w-full h-fit">
      <div className="w-full h-fit relative  bg-[#181818] flex flex-row">
        <div className="bg-black h-[120vh] relative flex-[0_1_66.66666%] w-[66.66666%]">


        </div>

        <div className='relative flex-[0_1_33.33333%] w-[33.33333%]'>
          <div className="py-20 -left-[40%] absolute top-0">
            <img
            src={"https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/top/career.jpg"}
            alt="career"
            className="w-[150%] h-auto"
            />
          </div>
        </div>
      </div>
    // </div>
  )
}

export default Section5

