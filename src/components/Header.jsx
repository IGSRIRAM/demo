import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faUser,
    faFileLines,
    faAddressCard,
    faBriefcase,  
    faEnvelope    
} from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header>
        <div className="container">
             {/* <div className="logo">Sriram</div> */}
            <nav>
                <ul>
                    <li><a href="#home"><FontAwesomeIcon icon={faUser} /> Home</a></li>
                    <li><a href="#about"><FontAwesomeIcon icon={faAddressCard} /> About</a></li>
                    <li><a href="#resume"><FontAwesomeIcon icon={faFileLines} /> Resume</a></li>
                    <li><a href="#portfolio"><FontAwesomeIcon icon={faBriefcase} /> Portfolio</a></li>
                    <li><a href="#contact"><FontAwesomeIcon icon={faEnvelope} /> Contact</a></li>
                </ul>
            </nav>
            {/* <div className="resume-button">
                <a href="#" className='primary-btn'>Resume</a>
            </div> */}
        </div>
    </header>
  )
}

export default Header