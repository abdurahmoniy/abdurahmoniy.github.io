import React from 'react'
import robo from '../assets/robo.png'

export default function About() {
  return (
    <div id='about' className='min-h-screen flex md:flex-row flex-col'>
      <div className={`flex-1 flex justify-center items-start md:my-0 my-10 relative`}>
        <img src={robo} alt="robo" className='w-[70%] h-[40%] md:w-[80%] md:h-[65%] relative z-10 my-0 md:my-28 '/>
        <div className="absolute z-0 w-[40%] h-[35%] top-20 pink-gr"></div>
        <div className="absolute z-1 w-[80%] h-[80%] rounded-full white-gr"></div>
        <div className="absolute z-0 w-[50%] h-[55%] right-10 bottom-20 blue-gr"></div>
      </div>
      <div className="flex-1 flex-col py-0 sm:px-16 flex justify-center items-start">
      <div className="text-myteal text-[30px] font-medium">
        About me
      </div>
        <div className="text-mylight text-[50px] py-4">
          Web Developer
        </div>
        <div className="text-mylight text-[18px] text-grd">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, veritatis pariatur,
          dolor sint vero quae quasi nulla ex odit expedita iste quo.
          Totam architecto ex ipsam est quia? Nostrum, pariatur?
        </div>
        <div className=' text-gray-400 text-[15px] md:py-4 py-7 md:mb-0 mb-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Perspiciatis ducimus facilis corporis necessitatibus laboriosam aperiam.
        </div>
      </div>
    </div>
  )
}
