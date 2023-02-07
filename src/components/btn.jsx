import React from 'react'
import { styles } from './style'

const Button = ({styles}) => {
  return (
    <button type='button' className={`py-3 px-6 font-myfont font-medium 
                                    text-[18px] bg-blue-gr rounded-[10px] outline-none
                                    ${styles}`}>
        Start
    </button>
  )
}
export default  Button