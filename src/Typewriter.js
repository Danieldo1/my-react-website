import React from 'react'
import Typewriter from 'typewriter-effect'


function Typewriters() {


  return (
    <div>
        <h2 className='me'>
            <Typewriter 
            options={{
                strings: ["Hi, I'm Daniil, a Web Developer !"],
                autoStart: true,
                delay: 85 ,
                cursor: "" ,
                deleteSpeed: 1500000,
            }}
           
            />
        </h2>
    </div>
  )
}

export default Typewriters;