import React from 'react'
import Typewriter from 'typewriter-effect'

function Typewriters() {
  return (
    <div>
        <h2 className='me'>
            <Typewriter 
            options={{
                strings: ["Hi, Im Daniil, a Web Developer"],
                autoStart: true,
                delay: 100 ,
                cursor: "" ,
                deleteSpeed: 150000,
            }}
           
            />
        </h2>
    </div>
  )
}

export default Typewriters;