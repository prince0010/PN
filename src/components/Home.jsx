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
    <div name ="home" className='w-full h-screen bg-[#0a192f]'>
        
      {/* Container for text */}
      {/* mx-auto can center the container div */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>

        <p className='text-red-500'>Hi I'm: </p>
        {/* sm:text-4xl is like pag mu exceed nas 640px ata na pixel mudako ang objects like fonts, images, etc. sa specific na xl gihatag sa sm:text-4xl */}
        <h1 className='text-[#ccd6f6] font-bold text-3xl sm:text-4xl'>Prince Nagac</h1>
      {/* Front-End Text */}
        <FrontEnd />
        {/* Description about me text */}
         <Homedefinition />
          

        {/* Container for Button */}
        <div>
          <button>
            View Works
            <HiArrowNarrowRight onClick={buttonClicked}/>
          </button>
        </div>
      </div>
    </div>
    
  )
}

export default Home