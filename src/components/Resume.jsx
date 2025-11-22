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

function Resume() {
  return (
    <main className="resume" id='resume'>
        <section>
            <div className="container">
                <div className="col-5 left">
                    <div className='meta'>Resume</div>
                    <h2>Experience & Education</h2>
                    <p>A quick snapshot of my journey from Mechanical Engineering to UI/UX Design & Front‑End Development. This section highlights my most relevant experience, education, and skills at a glance.</p>
                    <div className="btn-group">
                        <a href="https://example.com/resume.pdf" className='primary-btn' target="_blank" rel="noreferrer">Download Resume</a>
                        <a href="https://example.com/resume.pdf" className='secondary-btn' target="_blank" rel="noreferrer">Let's work together</a>                       
                    </div>
                    <div className="box">
                        <div className="wrapper">
                            {/* <div className='sub-heading'>UI/UX Trainee</div> */}
                            <div className="pill">Open to Work</div>
                        </div>
                        <p>Actively looking for roles as a UI/UX Designer and Front‑End Developer.</p>
                    </div>
                    {/* <h3>.Web Development</h3>
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
                    </div> */}
                </div>
                <div className="col-7 right">
                    <div className="col-6">
                        <div className="meta">Experience</div>
                        <div className="box">
                            <div className="wrapper">
                                <div className='sub-heading'>UI/UX Designer</div>
                                <div className="pill">Full-Time</div>
                            </div>
                            <div className="meta">Shiftwave Technologies · <span>2024 — Present</span></div>
                            <ul>
                                <li>Designing and developing responsive websites for small businesses and startups.</li>
                                <li>Creating user flows, wireframes, and high‑fidelity Figma prototypes.</li>
                                <li>Translating UI designs into clean HTML, CSS, and JavaScript/React code.</li>
                            </ul>
                        </div>
                        <div className="box">
                            <div className="wrapper">
                                <div className='sub-heading'>UI/UX Trainee</div>
                                <div className="pill">Training</div>
                            </div>
                            <div className="meta">Tech Mahindra SMART Academy · <span>Jul 2024 — Nov 2024</span></div>
                            <ul>
                                <li>Learned design fundamentals, UX process, and modern UI patterns.</li>
                                <li>Worked on mini‑projects: portfolio, landing pages, dashboards.</li>
                                <li>Practiced tools like Figma, Photoshop, Illustrator, and basic prototyping.</li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="col-6">
                        <div className="meta">Education</div>
                        <div className="box">
                            <div className="wrapper">
                                <div className='sub-heading'>B.Tech — Mechanical Engineering</div>
                                <div className="pill">Graduate</div>
                            </div>
                            <div className="meta">Completed in 2024</div>
                            <ul>
                                <li>Developed strong problem‑solving and analytical thinking skills.</li>
                                <li>Worked on projects combining engineering logic with creative solutions.</li>
                            </ul>
                        </div>
                        <div className="box">
                            <div className="wrapper">
                                <div className='sub-heading'>Certification — Core Java</div>
                                <div className="pill">Certified</div>
                            </div>
                            <div className="meta">Millennium Software Solutions · <span>Apr 2024 — Aug 2024</span></div>
                            <ul>
                                <li>Learned OOP concepts and fundamentals of programming.</li>
                                <li>Helps in understanding logic building and front‑end interactions.</li>
                            </ul>
                        </div>
                        
                    </div>
                   
                </div>
            </div>
        </section>
    </main>
  )
}

export default Resume