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
                ><img src={Excursion} height='auto' width='auto'  />
                </a>
                
                <p>
A static webpage has been designed exclusively using cascading style sheets (CSS), showcasing the power of CSS in shaping the page's visual elements. This minimalist approach highlights the importance of design and layout in web development without relying on complex scripts or dynamic content</p>
                <br />

                <a href='https://danieldo1.github.io/Colmar_acd/'
                target="_blank" rel="noopener noreferrer" >Colmar Academy</a>
                <a href='https://danieldo1.github.io/Colmar_acd/'
                target="_blank" rel="noopener noreferrer"
                ><img src={ColmarAcd} height='auto' width='auto' />
                </a>
                
                <p>This webpage seamlessly adapts to both mobile and desktop layouts through responsive styling techniques, all guided by a single provided design sheet. You can witness this adaptability by simply resizing your browser window, showcasing the design's flexibility and attention to user experience across devices. This achievement underscores the significance of effective design principles in creating a versatile and user-friendly web interface.</p>
                <br />
  
                <h2>JavaScript & React</h2>

                <a href='https://papaya-torrone-a2cc84.netlify.app/'
                target="_blank" rel="noopener noreferrer" >Ravenous</a>
                <a href='https://papaya-torrone-a2cc84.netlify.app/'
                target="_blank" rel="noopener noreferrer"
                ><img src={Ravenous} height='auto' width='auto'/>
                </a>
                
                <p>This webpage dynamically generates cards featuring restaurant information by connecting to the Yelp API, providing real-time data and enhancing the user experience with up-to-date restaurant details. This integration showcases the power of dynamic data retrieval in delivering current and relevant content to users interested in exploring restaurants. The result is a dynamic and interactive web experience, enriching user engagement through live data connections.</p>
                <br/>

                <a href='https://jam-dan.netlify.app/ '
                target="_blank" rel="noopener noreferrer" >Jammming</a>
                <a href='https://jam-dan.netlify.app/ '
                target="_blank" rel="noopener noreferrer"
                ><img src={Jammming} height='auto' width='auto' />
                </a>
                
                <p>This website enables users to connect with the Spotify API, empowering them to create custom playlists by searching for songs and seamlessly adding them to their personal playlist section, streamlining the music curation process. This integration showcases the website's interactive and user-centric approach to music selection and playlist creation, enhancing the overall user experience. The result is a feature-rich platform that puts music customization directly in the hands of its users.</p>
                <br/>

                <a href='https://danieldo1.github.io/Expenses/'
                target="_blank" rel="noopener noreferrer" >Expenses Counter</a>
                <a href='https://danieldo1.github.io/Expenses/'
                target="_blank" rel="noopener noreferrer"
                ><img src={Expense} height='auto' width='auto' />
                </a>
                
                <p>
This app offers users the ability to track their expenses and presents the data in visually appealing charts that illustrate monthly spending patterns. The application leverages the power of React.js to create a dynamic and seamless experience, with data flowing dynamically between components to provide deep insights into your financial habits. It combines user-friendly design with robust data handling, offering a comprehensive solution for expense tracking and analysis.</p>          
                <br/>

                <h2>UI & UX</h2>

                <a href='https://www.figma.com/proto/YSCQV83ToS4CPcgaZxalS9/Codecademy?page-id=0%3A1&type=design&node-id=1802-2&viewport=167%2C341%2C0.11&t=s8Hk5sm0rVJCilzX-1&scaling=scale-down&starting-point-node-id=1802%3A2&mode=design'
                target="_blank" rel="noopener noreferrer" >Introduction to Figma prototyping</a>
                <a href='https://www.figma.com/proto/YSCQV83ToS4CPcgaZxalS9/Codecademy?page-id=0%3A1&type=design&node-id=1802-2&viewport=167%2C341%2C0.11&t=s8Hk5sm0rVJCilzX-1&scaling=scale-down&starting-point-node-id=1802%3A2&mode=design'
                target="_blank" rel="noopener noreferrer"
                ><img src={Intro} height='auto' width='auto' />
                </a>
                
                <p>
Learning about design thinking involves understanding the iterative steps users must take when interacting with your website. It encompasses empathizing with their needs, defining the problem, ideating creative solutions, prototyping, and testing to ensure a user-centric and effective design that aligns with their journey and goals on your platform. Embracing design thinking principles ensures a holistic and user-driven approach to web development, resulting in improved user experiences and successful outcomes.</p>
                <br/>

                <a href="https://www.figma.com/proto/wijso6VDNe1B01SRcIcSSn/%5BTemplate%5D-User-Flow%3A-Millie's-Muffins-(Copy)?page-id=11%3A33768&node-id=11-34056&starting-point-node-id=11%3A34056&mode=design&t=usNqBkjpqsrPwXJp-1"
                target="_blank" rel="noopener noreferrer" >Designing Users Steps</a>
                <a href="https://www.figma.com/proto/wijso6VDNe1B01SRcIcSSn/%5BTemplate%5D-User-Flow%3A-Millie's-Muffins-(Copy)?page-id=11%3A33768&node-id=11-34056&starting-point-node-id=11%3A34056&mode=design&t=usNqBkjpqsrPwXJp-1"
                target="_blank" rel="noopener noreferrer"
                ><img src={Design} height='auto' width='auto' />
                </a>
                
                <p>Deepening my knowledge of the user's steps in the checkout process of a retail website involves gaining a comprehensive understanding of each stage a customer goes through when making a purchase. This includes steps such as adding items to the cart, reviewing the cart, entering shipping and payment information, confirming the order, and receiving an order confirmation. A thorough grasp of these steps is essential for optimizing the checkout experience, reducing cart abandonment, and improving overall user satisfaction on the retail website.</p>


              </div>
          )}
      </div>
  )
}

export default Projects




