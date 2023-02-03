import React from 'react'
import Header from '../Header'
import { useState } from 'react'

export default function Home() {
  const [rotate, setRotate]  = useState(false);
  console.log(rotate);

  function  upCase(){
    rotate === false ? setRotate(true) : setRotate(false)
  }
  return (
    <div onClick={upCase} className='text-center w-28 h-10'>
      <div className={rotate === false ? 'rotate-180 duration-300 text-red-600' : 'duration-300'}>
        ^
      </div>
    </div>
  )
}
