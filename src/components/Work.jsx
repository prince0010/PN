import React from 'react'

const Work = () => {
  return (
    // Parent Div
    <div name = 'footer' className='bg-[#0a192f] max-w-[1000px] mx-auto h-full w-full py-12'>
        {/* Child Div */}
        <div className='bg-orange-500 h-screen w-full text-center justify-center py-5' >
            {/* Container for P tag */}
            <div>
                <p>
                    Test Work
                </p>
            </div>
        </div>
    </div>
  )
}

export default Work