import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";




function Header() {
  return (
    <div className='header'>
 <a href='mailto:daniel.speranskiy@gmail.com' target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon style={{margin: '0.253em',color: '#4D6A80'}} icon={faEnvelope} className='fa-3x' /></a>
 <a href='https://www.facebook.com/daniel.speranskiy1' target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon  style={{margin: '0.253em',color: '#4D6A80'}} icon={faFacebook} className='fa-3x' /></a>
<a href='https://github.com/danieldo1' target="_blank" rel="noopener noreferrer"  ><FontAwesomeIcon  style={{margin: '0.253em',color: '#4D6A80'}} icon={faGithub} className='fa-3x' /></a>
<a  href='https://www.linkedin.com/in/daniil-speranskii/' target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon style={{margin: '0.253em',color: '#4D6A80'}} icon={faLinkedin} className='fa-3x' /></a>
    </div>
  )
}

export default Header