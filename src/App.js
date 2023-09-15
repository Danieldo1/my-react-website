import myPhoto from "./my.png";
import Typewriters from './Typewriter'
import "./App.css";
import Header from "./Header";
import React from "react";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Projects from "./Projects";


function App() {
  const handleClick =() => {
    alert('OoOoUch! Stop poking me !')
  }
  
  return (
    <>
      <div className="backgroung">
        <Header />
        <div className="photo-cont">
          <img className="my-img"  src={myPhoto} height="200px" onClick={handleClick} />
          <Typewriters />
         
          <AboutMe  />
          <Education />
          <Projects />
         <p className="footer">© 2023 Daniil Speranskii</p>
        </div>
      </div>
    </>
  );
}

export default App;
