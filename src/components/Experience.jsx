import React from 'react'

function Experience() {
  return (
    <main id="experience" class="experience">
        <section>
            <div className='container' >
                <div class="experience-section-header">
                    <h2 class="section-title">Experience & Education</h2>
                    <p class="section-subtitle">My professional journey in the tech industry.</p>
                </div>

                <div class="timeline">
                    {/* <!-- Job 1 --> */}
                    <div class="timeline-item">
                        <span class="timeline-date">Dec 2024 - Present</span>
                        <div class="timeline-content">
                            <h3>UI/UX Designer & Developer</h3>
                            <span class="company">Shiftwave Technologies, Visakhapatnam</span>
                            <p>Designed and implemented responsive UI layouts using React.js. Translated Figma mockups into reusable components and integrated RESTful APIs to fetch dynamic data. Focused on mobile-first responsiveness and performance optimization.</p>
                        </div>
                    </div>

                    {/* <!-- Certification --> */}
                    <div class="timeline-item">
                        <span class="timeline-date">Jul 2024 - Nov 2024</span>
                        <div class="timeline-content">
                            <h3>UI/UX Development Certification</h3>
                            <span class="company">Tech Mahindra SMART Academy</span>
                            <p>Intensive training in modern web technologies, design principles, and user experience strategies.</p>
                        </div>
                    </div>

                    {/* <!-- Education --> */}
                    <div class="timeline-item">
                        <span class="timeline-date">2021 - 2024</span>
                        <div class="timeline-content">
                            <h3>B.Tech, Mechanical Engineering</h3>
                            <span class="company">Sanketika Vidya Parishad Engineering College</span>
                            <p>GPA: 76.5. Developed a strong foundation in logical analysis and project management.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Experience