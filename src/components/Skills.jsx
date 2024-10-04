import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import TAILWIND from '../assets/tailwind.png'
import GITHUB from '../assets/github.png'
import REACT from '../assets/react.png'
import JS from '../assets/javascript.png'
import MONGO from '../assets/mongo.png'
import LARAVEL from '../assets/laravel.png'
import PHP from '../assets/php.png'
import MySQL from '../assets/sql.jpg'
import MUI from '../assets/MUI.png'
import FIGMA from '../assets/Figma.png'
import Firebase from '../assets/firebase.png'


const Skills = () => {
  return (
    // Parent Container
    <div name = 'skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full' >
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-orange-300 text-orange-300'>Tech Stack</p>
                <p className=' py-4'>These are the Tech Stacks that I've used and Learned so far..</p>
            </div>
            {/* Container 2 icons and text title*/}
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8' >
                {/* Hoverable scale lang ng image in this one is scale:110 and scale:150px  */}
                <div className=' shadow-[#040c16] shadow-md hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4' >HTML</p>
                </div>
                <div className=' shadow-[#040c16] shadow-md hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                    <p className='my-4' >CSS</p>
                </div>
                <div className=' shadow-[#040c16] shadow-md hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={JS} alt="Javascript icon" />
                    <p className='my-4' >JAVASCRIPT</p>
                </div>
                <div className=' shadow-[#040c16] shadow-md hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={REACT} alt="React icon" />
                    <p className='my-4' >REACT JS</p>
                </div>
                <div className=' shadow-[#040c16] shadow-md hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={MONGO} alt="MongoDB icon" />
                    <p className='my-4' >MONGODB</p>
                </div>
                <div className=' shadow-[#040c16] shadow-md hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={LARAVEL} alt="Node icon" />
                    <p className='my-4' >Laravel</p>
                </div>
              <div className=' shadow-[#040c16] shadow-md hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={GITHUB} alt="Github icon" />
                    <p className='my-4' >GITHUB</p>
                </div>
              <div className=' shadow-[#040c16] shadow-md hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={TAILWIND} alt="Tailwind Css icon" />
                    <p className='my-4'> TAILWIND CSS</p>
                </div>
              <div className=' shadow-[#040c16] shadow-md hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={PHP} alt="PHP" />
                    <p className='my-4'> PHP </p>
                </div>
              <div className=' shadow-[#040c16] shadow-md hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={MySQL} alt="MySQL" />
                    <p className='my-4'> MySQL </p>
                </div>
              <div className=' shadow-[#040c16] shadow-md hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={Firebase} alt="MySQL" />
                    <p className='my-4'> Firebase </p>
                </div>
              <div className=' shadow-[#040c16] shadow-md hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={MUI} alt="MUI" />
                    <p className='my-4'> MUI </p>
                </div>
              <div className=' shadow-[#040c16] shadow-md hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={FIGMA} alt="Figma" />
                    <p className='my-4'> Figma </p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Skills 