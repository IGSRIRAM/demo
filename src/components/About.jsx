import React from 'react'

import photoshop from '../assets/images/Adobe  Photoshop.svg'
import figma from '../assets/images/figma-brands-solid-full.svg'
import illustrator from '../assets/images/Adobe illustrator.svg'
import html from '../assets/images/html5-brands-solid-full.svg'
import css from '../assets/images/css3-alt-brands-solid-full.svg'
import js from '../assets/images/square-js-brands-solid-full.svg'
import react from '../assets/images/react-brands-solid-full.svg'
import bootstrap from '../assets/images/bootstrap-brands-solid-full.svg'
import canva from '../assets/images/canva.svg'
import wordpress from '../assets/images/wordpress-brands-solid-full.svg'
import wix from '../assets/images/wix-brands-solid-full.svg'

function About() {
  return (
    <main className="about" id='about'>
        <section>
            <div className="container">
                <div className="about-text col-lg-7 col-md-12 left">
                    <h2 className="section-title" style={{ textAlign: 'left', display: 'block' }}>About Me</h2>

                    <h3>From Mechanical Engineering to Digital Engineering</h3>
                    <p>I graduated in Mechanical Engineering (2024), but my passion for logic and creation led me to the IT world. Over the past two years, I have successfully transitioned into a full-time UI/UX Developer.</p>
                    <p>Currently, I work at <strong>Shiftwave Technologies</strong>, bridging the gap between design and code. My unique background gives me a problem-solving mindset—I don't just write code; I engineer solutions.</p>

                    <div className="btn-group">
                        <a href="https://example.com/resume.pdf" className='primary-btn' target="_blank" rel="noreferrer">Download Resume</a>
                        <a href="https://example.com/resume.pdf" className='secondary-btn' target="_blank" rel="noreferrer">Let's work together</a>                       
                    </div>
                </div>

                <div className="col-lg-4 col-md-12 right">
                    <h3>.Web Development</h3>
                        <div className='skills'>
                            <img src={html} alt="" />
                            <img src={css} alt="" />
                            <img src={js} alt="" />
                            <img src={react} alt="" />
                            <img src={bootstrap} alt="" />
                            <img src={wordpress} alt="" />
                            <img src={wix} alt="" />
                        </div>
                    <div >
                        </div>
                    <h3>.Design tools</h3>
                    <div className='skills'>
                        <img src={figma} alt="" />
                        <img src={photoshop} alt="" />
                        <img src={illustrator} alt="" />
                        <img src={canva} alt="" />  
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default About