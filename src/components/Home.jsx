import React from 'react'
// find the icons in the website and copy and paste it and import here in react
import {HiArrowNarrowRight} from 'react-icons/hi'
import FrontEnd from './Text/FrontEnd';
import Homedefinition from './Text/Homedefinition';
import {Link} from 'react-scroll';
import profileImage from './../assets/_LDCU_2684.jpg';

const Home = () => {

  function buttonClicked () {
      console.log(' Test Clicked');
  }
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Flex container for text and image, adjusted for a larger view */}
      <div className='max-w-[1000px] mx-auto px-8 flex justify-between items-center h-full'>
        {/* Text container */}
        <div className='flex flex-col justify-center'>
          <p className='text-orange-300'>Hi I'm:</p>
          <h1 className='text-[#ccd6f6] font-bold text-3xl sm:text-5xl'>Prince <span className='text-orange-300'>Nagac</span></h1>
          <FrontEnd />
          <Homedefinition />
          <div>
          <button className=' group text-white border-2 px-4 py-3 my-3 flex items-center font-bold hover:bg-orange-300 hover:border-orange-300 hover:text-black rounded-full' onClick={buttonClicked}>
          {/* ang Link is naa na sa react-scroll na package and it is passing the component to the higher order which is the button and pag i click is i redirect siya sa naay "name na work"
          (name=work ==> to = "work") and naa na sa Navbar.jsx which is global siya sa Link lang since nag link sila gikan sa navbar and pwede ra niya tawagon sa lain component since Link na
           sila sa global ato bisag dili na iimport sa taas ang component location file okay lang og matawag og or mag send og order like pag i click ang button mu redirect siya sa naay name
            na "work" since tungod sa Link na Element na gikan sa react-scroll na package (npm install react-scroll) */}
          <Link to="work" smooth={true} offset={5} duration={500} >
          View Works
        </Link>
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

        {/* Image on the right side, adjusted to cover and focus on the top */}
        <img src={profileImage} 
         style={{
          height: 'auto',
          objectFit: 'cover',
          objectPosition: window.innerWidth > 960 ? 'center top' : 'center center',
        }}
        alt="Prince Nagac" className="w-96 h-96 object-cover object-top" />
      </div>
    </div>
  )
}


export default Home