import React, {useState} from 'react'
import './Projects.css'
import Excursion from './ProjectsPhotos/Excursion.png'
import ColmarAcd from './ProjectsPhotos/ColmarAcd.png'
import Ravenous from './ProjectsPhotos/Ravenous.png'
import Jammming from './ProjectsPhotos/Jammming.png'
import Expense from './ProjectsPhotos/Expenses.png'
import Intro from './ProjectsPhotos/IntroToFigma.png'
import Design from './ProjectsPhotos/UsersSteps.png'


function Projects() {
    const [isShown, setIsShown] = useState(false);

    const handleClick = (event) => {
        setIsShown((current) => !current);
      };
    

  return (
    <div className="opening-div">
        <button onClick={handleClick} style={{backgroundColor: isShown ? '#a9becd' : ''}} className="about-me-btn">Projects</button>
          {isShown && (
            <div className='projects'>

              <h2>HTML & CSS </h2>

              <a href='https://danieldo1.github.io/excursion/'
                target="_blank" rel="noopener noreferrer" >Excursions</a>
              <a href='https://danieldo1.github.io/excursion/'
                target="_blank" rel="noopener noreferrer"
                ><img src={Excursion} height='300'  />
                </a>
                
                <p>Static webpage created by only using Design sheet.</p>
                <br />

                <a href='https://danieldo1.github.io/Colmar_acd/'
                target="_blank" rel="noopener noreferrer" >Colmar Academy</a>
                <a href='https://danieldo1.github.io/Colmar_acd/'
                target="_blank" rel="noopener noreferrer"
                ><img src={ColmarAcd} height='300' />
                </a>
                
                <p>Webpage utilizing mobile and desktop layout done through styling.
                  Done by only provided Design sheet.(Resize your browser)</p>
                <br />
  
                <h2>JavaScript & React</h2>

                <a href='https://papaya-torrone-a2cc84.netlify.app/'
                target="_blank" rel="noopener noreferrer" >Ravenous</a>
                <a href='https://papaya-torrone-a2cc84.netlify.app/'
                target="_blank" rel="noopener noreferrer"
                ><img src={Ravenous} height='300'/>
                </a>
                
                <p>Webpage uses Dynamic Data to create cards that connect with Yelp API to render restaurant.</p>
                <br/>

                <a href='https://jam-dan.netlify.app/ '
                target="_blank" rel="noopener noreferrer" >Jammming</a>
                <a href='https://jam-dan.netlify.app/ '
                target="_blank" rel="noopener noreferrer"
                ><img src={Jammming} height='300' />
                </a>
                
                <p>Website allows you to connect through Spotify API and create your own playlists via search input and add them straight to your playlist section.</p>
                <br/>

                <a href='https://danieldo1.github.io/Expenses/'
                target="_blank" rel="noopener noreferrer" >Expenses Counter</a>
                <a href='https://danieldo1.github.io/Expenses/'
                target="_blank" rel="noopener noreferrer"
                ><img src={Expense} height='300' />
                </a>
                
                <p>App that you can track your Expenses presented in nice charts depending on how much was spent per month, uses deep dynamic information being rendered between React components.</p>          
                <br/>

                <h2>UI & UX</h2>

                <a href='https://www.figma.com/proto/YSCQV83ToS4CPcgaZxalS9/Codecademy?page-id=0%3A1&type=design&node-id=1802-2&viewport=167%2C341%2C0.11&t=s8Hk5sm0rVJCilzX-1&scaling=scale-down&starting-point-node-id=1802%3A2&mode=design'
                target="_blank" rel="noopener noreferrer" >Introduction to Figma prototyping</a>
                <a href='https://www.figma.com/proto/YSCQV83ToS4CPcgaZxalS9/Codecademy?page-id=0%3A1&type=design&node-id=1802-2&viewport=167%2C341%2C0.11&t=s8Hk5sm0rVJCilzX-1&scaling=scale-down&starting-point-node-id=1802%3A2&mode=design'
                target="_blank" rel="noopener noreferrer"
                ><img src={Intro} height='300' />
                </a>
                
                <p>Learning how to use Design thinking and steps a user has to take while using your website.</p>
                <br/>

                <a href="https://www.figma.com/proto/wijso6VDNe1B01SRcIcSSn/%5BTemplate%5D-User-Flow%3A-Millie's-Muffins-(Copy)?page-id=11%3A33768&node-id=11-34056&starting-point-node-id=11%3A34056&mode=design&t=usNqBkjpqsrPwXJp-1"
                target="_blank" rel="noopener noreferrer" >Designing Users Steps</a>
                <a href="https://www.figma.com/proto/wijso6VDNe1B01SRcIcSSn/%5BTemplate%5D-User-Flow%3A-Millie's-Muffins-(Copy)?page-id=11%3A33768&node-id=11-34056&starting-point-node-id=11%3A34056&mode=design&t=usNqBkjpqsrPwXJp-1"
                target="_blank" rel="noopener noreferrer"
                ><img src={Design} height='300' />
                </a>
                
                <p>Deepening my knowledge in users steps for checkout process in a retail website.</p>


              </div>
          )}
      </div>
  )
}

export default Projects




