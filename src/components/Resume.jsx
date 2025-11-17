import React from 'react'

function Resume() {
  return (
    <main className="resume">
        <section>
            <div className="container">
                <div className="col-6">
                    <div className='meta'>Resume</div>
                    <h2>Experience & Education</h2>
                    <p>A quick snapshot of my journey from Mechanical Engineering to UI/UX Design & Front‑End Development. This section highlights my most relevant experience, education, and skills at a glance.</p>
                    <div className="btn-group">
                        <a href="https://example.com/resume.pdf" className='primary-btn' target="_blank" rel="noreferrer">Download Resume</a>
                        <a href="https://example.com/resume.pdf" className='secondary-btn' target="_blank" rel="noreferrer">Let's work together</a>                       
                    </div>
                    <h3>Front-End Proficiencies</h3>
                </div>
                <div className="col-6 right">
                    <div className="col-6">
                        <div className="meta">Experience</div>
                    </div>
                    <div className="col-6">Education</div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Resume