import React from 'react'
import Branch from './ui/branch'

const Section4 = () => {
  return (
    <div className='w-full min-h-screen bg-[#181818]'>
      <div className="h-full mx-auto max-w-7xl">
        <Branch 
        title={"SERVICE"} 
        id={2}
        className={"py-10"}/>
      </div>
    </div>
  )
}

export default Section4
