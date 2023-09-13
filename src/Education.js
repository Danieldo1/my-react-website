import React, { useState } from "react";
import './Education.css'


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
            <div>
          <h3>The Heritage Private School, Cyprus</h3>

          <img
            src="https://muskita.com.cy/sites/default/files/styles/slick_style/public/2020-08/heritage_private-_school-1920x1080-min.jpg?itok=yde-Z8fG"
            height="250"
          />

          <ul className="my-list">
            <li>Apolytirion: 18.6/20</li>

            <li>A-Level Photography: A</li>

            <li>A-Level History: B</li>

            <li>A-Level Business: B</li>

            <li>Member of Ecology Club</li>

            <li>Varsity Soccer - 2 Years</li>
          </ul>
          </div>

          <div className="card">
          <h3>The Heritage Private School, Cyprus</h3>

          <img
            src="https://muskita.com.cy/sites/default/files/styles/slick_style/public/2020-08/heritage_private-_school-1920x1080-min.jpg?itok=yde-Z8fG"
            height="250"
          />

          <ul className="my-list">
            <li>Apolytirion: 18.6/20</li>

            <li>A-Level Photography: A</li>

            <li>A-Level History: B</li>

            <li>A-Level Business: B</li>

            <li>Member of Ecology Club</li>

            <li>Varsity Soccer - 2 Years</li>
          </ul>
          </div>

          </div>
          
      )}
    </div>
  );
}

export default Education;
