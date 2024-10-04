import React from 'react'
import BFP from '../assets/projects/bfp.png'
import Narva from '../assets/projects/login.png'
import PCIS from '../assets/projects/PCISlogin.png'
import Tasktd from '../assets/projects/index_task.png'
import BookR from '../assets/projects/index.png'
import TaskList from '../assets/projects/task_list.png'

const Work = () => {
  return (
    // Parent Div
    <div name = 'work' className='pt-15 bg-[#0a192f] lg:h-[120vh] md:h-screen w-full text-gray-300'>
        {/* Child Div Container of Content in the Parent DIV */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full w-full' >
            {/* Container for P tag */}
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-orange-300'>
                   Work
                </p>
                <p className='py-6'>Check out some of my Projects: </p>
            </div>
           
          {/* This is the Parent Div of all Container Card in this DIV's*/}
           {/* This is the PARENT CONTAINER OF THE ALL THE CARDS AND IMAGES ADDED IN THIS PART OF WORK.JSX COMPONENT  */}
           {/* Container */}
           {/* In this part if the screensize is in 648 px or like mobile phone screen, the grid on it will be divided in 1 (so there will be 1 images in each grids),
            and in sm: size or 768 pixel I guess the grid will be limited on 2 boxes or grids in each row, and in md: if the grid is in screen size of like laptop monitor size it 
            will display 3 images in grid in each row, !!JUST RESIZE THE SCREENSIZE IN WEBSITE AND LOOK TO THE CARDS IN HOW MANY GRID IN EACH SCREENSIZE AND ADJUST IT IF YOU DONT LIKE THE GRIDS 
            IN EACH SCRENSIZE(mobileversion{which has no command since reactjs is always default in mobile device in making it responsive}, THE SM: {small screensize}, THE MD:{the medium size}, THE LG:?)  */}
      {/* !!NEW TASK, CREATE A ANIMATION HOVER IN EVERY CARD IN THIS CARD WORKS LIKE ZOOM IN AND OUT AND NAAY TEXT MU TRANSITION TO PASAKA AND PAG DILI MA HOVER MU PANAOG ANG TEXY DAYON */}
          <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          
          {/* Container of Card Item */}
          {/* the content-div is a custom css for the Images that will be add in this card content like background-img: no-repeat, just look the custom css that I add in the index.css */}
          
          {/* Grid Items (Work Card Images and its Information ) */}
              <div style={{backgroundImage: `url(${Narva})`}} 
              className='shadow-lg shadow-[#030c16] rounded-md group container flex justify-center items-center mx-auto content-div'>   
                {/*Hover effects*/}
                <div className='opacity-0 group-hover:opacity-100'>
                  {/* Card */}
                  {/* tracking-wider is letter spacing in tailwind css */}
                  <span className='lg:text-xl font-bold text-white tracking-wider sm:text-base md:text-base'>
                      Narva
                    <div className='pt-8 text-center'> 
              <a href="/">
                <button className='text-center py-3 px-4 m-2 rounded-lg bg-white text-gray-700 font-bold text-xl sm:text-base md:text-base'> Demo </button>
              </a>
              <a href="https://github.com/prince0010/PN">
                <button className='text-center py-3 px-4 m-2 rounded-lg bg-white text-gray-700 font-bold text-base sm:text-base md:text-base'> Code</button>
              </a>
                    </div>
                  </span>
                </div>
              </div>

      {/* 2nd Grid Item (Work Card Images and its information)  */}
              <div style={{backgroundImage: `url(${BFP})`}} 
              className='shadow-lg shadow-[#030c16] rounded-md group container flex justify-center items-center mx-auto content-div'>   
                {/*Hover effects*/}
                <div className='opacity-0 group-hover:opacity-100'>
                  {/* Card */}
                  {/* tracking-wider is letter spacing in tailwind css */}
                  <span className=' lg:text-xl text-base font-bold text-white sm:text-base md:text-base tracking-normal text-center'>
                     BOFP Fire Inspection Certificate System
                    <div className='pt-8 text-center'> 
              <a href="/">
                <button className='text-center py-3 px-4 m-2 rounded-lg bg-white text-gray-700 font-bold text-base sm:text-base md:text-base '> Demo </button>
              </a>
              <a href="https://github.com/prince0010/PN">
                <button className='text-center py-3 px-4 m-2 rounded-lg bg-white text-gray-700 font-bold text-base sm:text-base md:text-base'> Code</button>
              </a>
                    </div>
                  </span>
                </div>
              </div>
              {/* 3rd Grid Item  (Work Card Images and its information)  */}
              <div style={{backgroundImage: `url(${PCIS})`}} 
              className='shadow-lg shadow-[#030c16] rounded-md group container flex justify-center items-center mx-auto content-div'>   
                {/*Hover effects*/}
                <div className='opacity-0 group-hover:opacity-100'>
                  {/* Card */}
                  {/* tracking-wider is letter spacing in tailwind css */}
                  <span className=' lg:text-xl text-base font-bold text-white sm:text-base md:text-base tracking-normal'>
                     Police Clearance Issuance System 
                    <div className='pt-8 text-center'> 
              <a href="/">
                <button className='text-center py-3 px-4 m-2 rounded-lg bg-white text-gray-700 font-bold text-base  sm:text-base md:text-base'> Demo </button>
              </a>
              <a href="https://github.com/prince0010/PN">
                <button className='text-center py-3 px-4 m-2 rounded-lg bg-white text-gray-700 font-bold text-base  sm:text-base md:text-base'> Code</button>
              </a>
                    </div>
                  </span>
                </div>
              </div>
        {/* End of 3rd Item Grid (Work Card Images and its information) */}

           {/* 4th Grid Item  (Work Card Images and its information)  */}
           <div style={{backgroundImage: `url(${Tasktd})`}} 
              className='shadow-lg shadow-[#030c16] rounded-md group container flex justify-center items-center mx-auto content-div'>   
                {/*Hover effects*/}
                <div className='opacity-0 group-hover:opacity-100'>
                  {/* Card */}
                  {/* tracking-wider is letter spacing in tailwind css */}
                  <span className=' lg:text-xl text-base font-bold text-white sm:text-base md:text-base tracking-normal'>
                      Laravel Task List App
                    <div className='pt-8 text-center'> 
              <a href="/">
                <button className='text-center py-3 px-4 m-2 rounded-lg bg-white text-gray-700 font-bold text-base  sm:text-base md:text-base'> Demo </button>
              </a>
              <a href="/">
                <button className='text-center py-3 px-4 m-2 rounded-lg bg-white text-gray-700 font-bold text-base  sm:text-base md:text-base'> Code</button>
              </a>
                    </div>
                  </span>
                </div>
              </div>
        {/* End of 4th Item Grid (Work Card Images and its information) */}

           {/* 5th Grid Item  (Work Card Images and its information)  */}
           <div style={{backgroundImage: `url(${BookR})`}} 
              className='shadow-lg shadow-[#030c16] rounded-md group container flex justify-center items-center mx-auto content-div'>   
                {/*Hover effects*/}
                <div className='opacity-0 group-hover:opacity-100'>
                  {/* Card */}
                  {/* tracking-wider is letter spacing in tailwind css */}
                  <span className=' lg:text-xl text-base font-bold text-white sm:text-base md:text-base tracking-normal'>
                      Book Review Website
                    <div className='pt-8 text-center'> 
              <a href="/">
                <button className='text-center py-3 px-4 m-2 rounded-lg bg-white text-gray-700 font-bold text-base  sm:text-base md:text-base'> Demo </button>
              </a>
              <a href="/">
                <button className='text-center py-3 px-4 m-2 rounded-lg bg-white text-gray-700 font-bold text-base  sm:text-base md:text-base'> Code</button>
              </a>
                    </div>
                  </span>
                </div>
              </div>
        {/* End of 5th Item Grid (Work Card Images and its information) */}

           {/* 6th Grid Item  (Work Card Images and its information)  */}
           <div style={{backgroundImage: `url(${TaskList})`}} 
              className='shadow-lg shadow-[#030c16] rounded-md group container flex justify-center items-center mx-auto content-div'>   
                {/*Hover effects*/}
                <div className='opacity-0 group-hover:opacity-100'>
                  {/* Card */}
                  {/* tracking-wider is letter spacing in tailwind css */}
                  <span className=' lg:text-xl text-base font-bold text-white sm:text-base md:text-base tracking-normal'>
                      Task Todo List Web App
                    <div className='pt-8 text-center'> 
              <a href="/">
                <button className='text-center py-3 px-4 m-2 rounded-lg bg-white text-gray-700 font-bold text-base  sm:text-base md:text-base'> Demo </button>
              </a>
              <a href="/">
                <button className='text-center py-3 px-4 m-2 rounded-lg bg-white text-gray-700 font-bold text-base  sm:text-base md:text-base'> Code</button>
              </a>
              
                    </div>
                  </span>
                </div>
              </div>
        {/* End of 6th Item Grid (Work Card Images and its information) */}

            </div>
        </div>
    </div>
  )
}

export default Work