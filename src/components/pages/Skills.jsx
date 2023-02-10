import React from 'react'
import Progress from '../Progress'
import geers from '../assets/geers.png'

export default function Skills() {
  return (
    <div id='skills'>
      <div>
        <div className="text-myteal text-[30px] mt-20 font-medium">
          My Skills
        </div>
        <p className='w-[500px] text-grd my-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Cum excepturi sed unde ullam doloribus debitis quasi minus!
          Incidunt exercitationem velit eos, sequi iusto ab necessitatibus!
        </p>
        <div className="text-mylight text-[32px] my-8">
          Technologies
        </div>
        <div className='mb-8 items-center text-center justify-between'>
          <Progress />
        </div>
      </div>
      <div>
        <img src={geers} alt="" />
      </div>
    </div>
  )
}
