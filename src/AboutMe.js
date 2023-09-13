import React,{useState} from 'react'


function AboutMe() {
    const [isShown, setIsShown] = useState(false);

    const handleClick = (event) => {
        setIsShown((current) => !current);
      };


  return (
    <div className="opening-div">
            <button onClick={handleClick} style={{backgroundColor: isShown ? '#a9becd' : ''}} className="about-me-btn">About Me</button>
              {isShown && (
                <div>
                  <p className='my-text'> I was born in Russia but grew up in Cyprus and have since lived in Belgium where I studied Business Management and Marketing. I’ve spent my years exploring various passions such as photography, creative design, illustration. My goal for myself is to become a professional in the digital field by creating innovative web pages and to grow my knowledge exponentially.</p>
                  </div>
              )}
          </div>
  )
}

export default AboutMe