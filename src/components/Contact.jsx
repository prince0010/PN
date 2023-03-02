import React from 'react'
import loogo from '../assets/node.png'
const Contact = () => {
  return (
    <div name = 'contact' className='bg-[#0a192f] w-full h-screen flex justify-center items-center p-4'>
      <form method = "" action = "" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-4 py-16'>
            <p className='inline border-b-4 border-orange-300 text-gray-300 text-3xl font-bold'>
              Contact
            </p>
            <p className='text-gray-400 text-xs sm:text-sm sm:text-gray-400 py-4'> If you have something to say just send the form or email me: princenagac12@gmail.com</p>
        </div>
          <input className='bg-[#ccd6f6] p-2 ' type="text" placeholder='Name' name = 'name' />
        <input className ='bg-[#ccd6f6] my-4 p-2'  type="email" placeholder='Email' name = 'name' />
        <textarea className='bg-[#ccd6f6] p-2' name="message" cols="30" rows="10" placeholder='Enter the message'></textarea>
        <button className=' border-2 text-base border-orange-300 hover:bg-orange-300 hover:border-orange-300 hover:text-black py-2 px-4 my-3 mx-auto flex items-center text-gray-300 rounded-lg'> Send Message</button>
      </form>
    </div>
  )
}

export default Contact