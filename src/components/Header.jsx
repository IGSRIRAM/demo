import React from 'react'

function Header() {
  return (
    <header>
        <div className="container">
            <div className="logo">Sriram</div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="resume-button">
                <a href="#" className='primary-btn'>Resume</a>
            </div>
        </div>
    </header>
  )
}

export default Header