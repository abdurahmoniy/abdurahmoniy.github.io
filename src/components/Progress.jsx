import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { progres } from './consts';


export default function Progress() {
    return (
        <div className=' grid grid-cols-2 gap-3 md:flex text-myteal border-2 border-myteal py-2 md:py-4 md:w-[800px] rounded-2xl '>
            {progres.map((prog, idx)=>(
                <div className='w-[150px] md:w-[200px] md:mx-4 m-auto'>
                    <CircularProgressbar
                        key={idx}
                        // className='text-center'
                        value={prog.percent}
                        text={prog.title}
                        styles={buildStyles({
                            // rotation: 0.25,
                            strokeLinecap: 'butt',
                            textSize: '12px',
                            pathTransitionDuration: 0.5,
                            pathColor: '#00ADB5',
                            textColor: '#00ADB5',
                        })}
                    />
                </div>
            ))}
        </div>
    )
}
