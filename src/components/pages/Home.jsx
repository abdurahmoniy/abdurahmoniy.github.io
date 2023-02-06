import React from 'react'
import Header from '../Header'
import { styles } from '../style'

export default function Home() {
  return (
    <div className='e'>

      <div className="bg-myblack w-full overflow-hidden">
        <div className={`${styles.padX}`}>
          <div className={`${styles.container}`}>
            <Header />
          </div>
        </div>
      </div>

    </div>
  )
}
