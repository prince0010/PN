import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import TAILWIND from '../assets/tailwind.png'
import GITHUB from '../assets/github.png'
import REACT from '../assets/react.png'
import JS from '../assets/javascript.png'
import MONGO from '../assets/mongo.png'
import NODE from '../assets/node.png'


const Skills = () => {
  return (
    // Parent Container
    <div name = 'skills'  className=' bg-[#0a192f]  text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full' >
            <div >
                <p className='text-4xl font-bold inline border-b-4 border-orange-300 text-orange-300'>Experience</p>
                <p className=' my-4'>These are the Languages that I've learned so far..</p>
            </div>
            {/* Container 2 icons and text title*/}
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-5'>
                {/* Hoverable scale lang ng image in this one is scale:110 and scale:150px  */}
                <div className=' shadow-[#040c16] shadow-lg hover:scale-110 duration-300 my-2'>
                    <img src={HTML} alt="HTML icon" />
                    <p className='my-4' >HTML</p>
                </div>
                <div className=' shadow-[#040c16] shadow-lg hover:scale-110 duration-300 my-2 '>
                    <img src={CSS} alt="CSS icon" />
                    <p className='my-4' >CSS</p>
                </div>
                <div className=' shadow-[#040c16] shadow-lg hover:scale-110 duration-300 my-2'>
                    <img src={JS} alt="Javascript icon" />
                    <p className='my-4' >JAVASCRIPT</p>
                </div>
                <div className=' shadow-[#040c16] shadow-lg hover:scale-110 duration-300 my-2'>
                    <img src={REACT} alt="React icon" />
                    <p className='my-4' >REACT JS</p>
                </div>
                <div className=' shadow-[#040c16] shadow-lg hover:scale-110 duration-300 my-2'>
                    <img src={MONGO} alt="MongoDB icon" />
                    <p className='my-4' >MONGODB</p>
                </div>
                <div className=' shadow-[#040c16] shadow-lg hover:scale-110 duration-300 my-2'>
                    <img src={NODE} alt="Node icon" />
                    <p className='my-4' >NODE</p>
                </div>
              <div className=' shadow-[#040c16] shadow-lg hover:scale-110 duration-300 my-2'>
                    <img src={GITHUB} alt="Github icon" />
                    <p className='my-4' >GITHUB</p>
                </div>
              <div className=' shadow-[#040c16] shadow-lg hover:scale-110 duration-300 my-2'>
                    <img src={TAILWIND} alt="Tailwind Css icon" />
                    <p className='my-4' >TAILWIND CSS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills 