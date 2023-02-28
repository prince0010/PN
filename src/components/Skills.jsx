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
    <div name = 'skills'  className=' bg-[#0a192f]'>
        {/* Container */}
        <div >
            <div>
                <p>Experience</p>
                <p>These are the Languages that I've learned so far..</p>
            </div>
            {/* Container 2 */}
            <div>
                <div>
                    <img src={HTML} alt="HTML icon" />
                    <p>HTML</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills