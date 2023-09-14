import React, {useState} from 'react'

function Projects() {
    const [isShown, setIsShown] = useState(false);

    const handleClick = (event) => {
        setIsShown((current) => !current);
      };
    

  return (
    <div className="opening-div">
        <button onClick={handleClick} style={{backgroundColor: isShown ? '#a9becd' : ''}} className="about-me-btn">Projects</button>
          {isShown && (
            <div>
                <img />
             <a href='https://jam-dan.netlify.app/' target="_blank" rel="noopener noreferrer" >Jamming Spotify API app</a>
              </div>
          )}
      </div>
  )
}

export default Projects




