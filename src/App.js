import myPhoto from "./my.png";
import Typewriters from './Typewriter'
import "./App.css";
import Header from "./Header";
import React from "react";
import AboutMe from "./AboutMe";
import Education from "./Education";


function App() {
  
  
  return (
    <>
      <div className="backgroung">
        <Header />
        <div className="photo-cont">
          <img className="my-img"  src={myPhoto} height="200px" />
          
          <Typewriters />
          <AboutMe  />
          <Education />
        </div>
      </div>
    </>
  );
}

export default App;
