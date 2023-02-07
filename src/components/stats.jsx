import React from 'react'
import { styles } from '../components/style'
import { stats } from './consts'

export default function Stats() {
  return (
    <div className={`${styles.flexStart} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
          <h4 className='font-myfont font-semibold xs:text-[41px] text-[30px] xs:leading-[52px] leading-[43px] text-mylight'>{stat.value}</h4>
          <p className='font-myfont font-normal xs:text-[20px] text-[16px] xs:leading-[26px] leading-[22px] text-grd uppercase ml-3'>{stat.title}</p>
        </div>
      ))}
    </div>
  )
}
