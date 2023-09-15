import React,{useState} from 'react'


function AboutMe() {
    const [isShown, setIsShown] = useState(false);

    const handleClick = (event) => {
        setIsShown((current) => !current);
      };


  return (
    <div className="opening-div" >
            <button onClick={handleClick} style={{backgroundColor: isShown ? '#a9becd' : '' }} className="about-me-btn">About Me</button>
              {isShown && (
                <div >
                  <p className='my-text' > I was born in Russia but raised in Cyprus and later relocated to Belgium, where I pursued a formal education in Business Management and Marketing. Throughout my journey, I have dedicated my time to cultivating a diverse skill set, delving into areas of interest such as photography, creative design, and illustration. Committed to my ambition, I am currently working towards a career in web development, aiming to specialize in the creation of innovative web interfaces while consistently advancing my expertise.</p>
                  </div>
              )}
          </div>
  )
}

export default AboutMe