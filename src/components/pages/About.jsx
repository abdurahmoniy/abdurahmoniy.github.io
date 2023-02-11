import React from 'react'
import robo from '../assets/robo.png'

export default function About() {
  return (
    <div id='about' className='flex md:flex-row flex-col min-h-[600px]'>
      <div className="flex-1 flex-col py-0 flex justify-center items-start relative">
        <div className="text-myteal text-[30px] font-medium">
          About me
        </div>
        <div className="text-mylight text-[50px] py-4">
          Web Developer
        </div>
        <div className="text-mylight text-[18px] text-grd w-[600px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, veritatis pariatur,
          dolor sint vero quae quasi nulla ex odit expedita iste quo.
          Totam architecto ex ipsam est quia? Nostrum, pariatur?
        </div>
        <div className=' text-gray-400 text-[15px] md:py-4 py-7 md:mb-0 mb-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis ducimus facilis  <br />corporis necessitatibus laboriosam aperiam.
        </div>
      </div>
    </div>
  )
}
