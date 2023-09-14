import React, { useState } from "react";
import "./Education.css";

function Education() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <div className="opening-div">
      <button
        onClick={handleClick}
        style={{ backgroundColor: isShown ? "#a9becd" : "" }}
        className="about-me-btn"
      >
        Education
      </button>
      {isShown && (
        <div className="card">
          <div className="edu-card">
            <h4><a href="https://www.heritageschool.ac.cy/" target="_blank" rel="noopener noreferrer" >The Heritage Private School, Cyprus</a></h4>
            <img
              className="edu-img"
              src="https://muskita.com.cy/sites/default/files/styles/slick_style/public/2020-08/heritage_private-_school-1920x1080-min.jpg?itok=yde-Z8fG"
              height="250"
            />
            <ul className="my-list">
              <li>Apolytirion: 18.6/20</li>
              <li>A-Level Photography: A</li>
              <li>A-Level History: B</li>
              <li>A-Level Business: B</li>
              <br />
              <li>Member of Ecology Club</li>
              <li>Varsity Soccer - 2 Years</li>
            </ul>
          </div>

          <div className="edu-card">
            <h4><a href="https://uibs.org/" target="_blank" rel="noopener noreferrer" >United International Business School, Belgium</a></h4>
            <img
              className="edu-img"
              src="https://images.static-collegedunia.com/public/image/24378f58a0217ef7272b036fd4b8acd4.jpeg?tr=w-800,h-534,c-force"
              height="250"
            />
            <ul className="my-list">
              <li>Business Management Major/Marketing Minor</li>
              <li>BBA 3.6 GPA</li>
              <li>School President - 1 Year</li>
              <br/>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Education;
