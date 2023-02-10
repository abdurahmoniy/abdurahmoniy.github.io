import React from 'react'
import robo from '../assets/laptop.jpeg'
import Header from '../Header'
import { styles } from '../style'

export default function Home() {
  return (


    <div id='home' className={`bgimage flex md:flex-row flex-col`}>
      <div className={`flex-1 flex-col py-0  sm:px-16 px-6 flex justify-center items-start `}>
        <div className="flex flex-row items-center py-[6px] md:my-0 px-4 rounded-[10px] mb-2 bg-slate-500 bg-discount-gr">
          <i className='fas fa-user rounded-full text-myteal bg-mydark py-1 px-2 m-1 text-center'></i>
          <p className={`${styles.paragraph}`}>
            Azizbek <span className='text-myteal'>Abdurahmoniy</span>
          </p>
        </div>

        <div className='w-full'>
          <h1 className={`${styles.heading}`}>
            Full Stack <br /> <span className='text-grd'>Developer</span>
          </h1>
        </div>

        <p className={`${styles.paragraph} mt-5 max-w-[550px]`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quam quisquam assumenda suscipit itaque harum id tempore velit tenetur possimus quos.
        </p>
        <div className="my-2 md:hidden block">
          <button type='button' className={`py-3 px-6 font-myfont font-medium 
          text-[18px] bg-blue-gr rounded-[10px] outline-none`}>
            Contact me
            </button>
        </div>
      </div>
      {/* <div className={`flex-1 flex justify-center items-start md:my-0 my-10 relative md:rounded-full`}>
         <img src={robo} alt="robo" className='w-[100%] h-[100%] relative z-10 md:hidden flex' />
      </div> */}
    </div>


    // <section id='home' className={`flex md:flex-row flex-col ${styles.padY}`}>
    //   <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6 flex justify-center items-start relative`}>
    //     <div className="flex flex-row items-center py-[6px] md:my-0 my-20 px-4 rounded-[10px] mb-2 bg-slate-500 bg-discount-gr">
    //       <i className='fas fa-user rounded-full text-myteal bg-mydark py-1 px-2 m-1 text-center'></i>
    //       <p className={`${styles.paragraph}`}>
    //         Azizbek <span className='text-myteal'>Abdurahmoniy</span>
    //       </p>
    //     </div>

    //     <div className='w-full'>
    //       <h1 className={`${styles.heading}`}>
    //         Full Stack <br /> <span className='text-grd'>Developer</span>
    //       </h1>
    //     </div>

    //     <p className={`${styles.paragraph} mt-5 max-w-[550px]`}>
    //       Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    //       Quam quisquam assumenda suscipit itaque harum id tempore velit tenetur possimus quos.
    //     </p>

    //     {/* <Button styles={'mt-2'}/> */}

    //     <div className="absolute z-0 w-[40%] h-[35%] top-0 pink-gr"></div>
    //     <div className="absolute z-1 w-[80%] h-[80%] rounded-full bottom-40 white-gr"></div>
    //     <div className="absolute z-0 w-[50%] h-[55%] right-20 bottom-20 blue-gr"></div>
    //   </div>
    //   <div className={`flex-1 flex justify-center items-start md:my-0 my-10 relative`}>
    //     <img src={robo} alt="robo" className='w-[100%] h-[100%] relative z-10 rounded-sm ' />
    //   </div>
    // </section>

  )
}
