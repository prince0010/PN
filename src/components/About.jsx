import React from 'react'
import AboutDescLeft from './Text/AboutDescLeft'
import AboutDescRight from './Text/AboutDescRight'

const About = () => {
  return (
    <div name = 'about' className='w-full h-screen bg-[#0a192f] text-gray-300 '>
        {/* Container of the ALL ABOUT */}
        <div className=' flex flex-col justify-center items-center w-full h-full '>
         {/* Parent div container for the This about na unsa content ani na div */}
         <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            {/* Container for the P Tag */}
            {/* small screen or sm: ? is the screen size limit is 640px */}
            <div className='sm:text-right pb-8 pl-4'>
                <p className=' text-2xl font-bold text-gray-100 inline border-b-4 border-orange-300'>
                About
                </p>
            </div>
            <div>

            </div>
            </div>
            {/* Parent div */}
            {/* in tailwind if yoi define grid it automatically puts it to one there so we can just define if we wanted anything over one we can define that in grid-cols-2 or 3 or 4 and the 
            "sm:" is to make the grid to one at a column when the screen is in 670px or in a small size screen */}
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-3 '>
                {/* Child div container */}
              <AboutDescRight />
                {/* Child Container for the right side description */}
             <AboutDescLeft />
            </div>
         </div>
        </div>
  )
}

export default About