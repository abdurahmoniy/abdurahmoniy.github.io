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
        <div className="w-[500px] md:w-[600px]">
          <div className="text-mylight text-[18px] text-grd">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, veritatis pariatur,
            dolor sint vero quae quasi nulla ex odit expedita iste quo.
            Totam architecto ex ipsam est quia? Nostrum, pariatur?
          </div>
          <div className=' text-gray-400 text-[15px] md:py-4 py-7 md:mb-0 mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis ducimus facilis  corporis necessitatibus laboriosam aperiam.
          </div>
        </div>
        <div className="text-mylight text-[20px]">
          Find me in 👇
        </div>
        <div className="text-myteal fa-2x">
          <a href="https://www.instagram.com/abdurakhmoniy/" className='px-1' target='_blank'><i class="fa-brands fa-instagram"></i></a>
          <a href="https://abdurahmoniy.t.me" className='px-2' target='_blank'><i class="fa-brands fa-telegram"></i></a>
          <a href="https://www.linkedin.com/in/azizbek-abdurahmoniy-2811a9248/" className='px-1' target='_blank'><i class="fa-brands fa-linkedin"></i></a>
        </div>
        <div className='text-mylight font-mono flex'>
          <a href='https://github.com' target='_blank'><i className='fa-brands fa-github fa-2x'></i></a>
          <div className='p-1'>@abdurahmoniy</div>
        </div>
      </div>
    </div>
  )
}
