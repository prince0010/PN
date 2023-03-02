import React from 'react'
// find the icons in the website and copy and paste it and import here in react
import {HiArrowNarrowRight} from 'react-icons/hi'
import FrontEnd from './Text/FrontEnd';
import Homedefinition from './Text/Homedefinition';

const Home = () => {

  function buttonClicked () {
      console.log('Clicked');
  }

  return (
    // Main Container
    <div name ='home' className='w-full h-screen bg-[#0a192f]'>
        
      {/* Container for text */}
      {/* mx-auto can center the container div */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>

        <p className='text-orange-300'>Hi I'm: </p>
        {/* sm:text-4xl is like pag mu exceed nas 640px ata na pixel mudako ang objects like fonts, images, etc. sa specific na xl gihatag sa sm:text-4xl */}
        <h1 className='text-[#ccd6f6] font-bold text-3xl sm:text-5xl'>Prince <span className='text-orange-300'> Nagac </span></h1>
      {/* Front-End Text */}
        <FrontEnd />
        {/* Description about me text */}
         <Homedefinition />
          

        {/* Container for Button */}
        <div>
          <button className=' group text-white border-2 px-4 py-3 my-3 flex items-center font-bold hover:bg-orange-300 hover:border-orange-300 hover:text-black rounded-full' onClick={buttonClicked}>
            View Works
            {/* margin-left or ml-3 */}
            {/* if you wnat to do something in a button liek animation and stuff ibutang nas span para dali siya ma animate ang object or something */}
           {/* put it in a group so para pag ma hover na siyas button ma animate jud siya dili lang pag i hover sa icon itself but sa container jud like button or something and
           then add pud kag "group" sa classname sa container para ma group jud siya sa animation pud sa tailwind animation css 
           hover:rotate-90 to group-hover:rotate-90*/}
           <span className='group-hover:rotate-90 duration-300' >
           <HiArrowNarrowRight className='ml-2 ' />
           </span>
          </button>
        </div>
      </div>
    </div>
    
  )
}

export default Home