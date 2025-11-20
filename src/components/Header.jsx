import React, { useState, useEffect, useRef   } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faUser,
    faFileLines,
    faAddressCard,
    faBriefcase,  
    faEnvelope    
} from '@fortawesome/free-solid-svg-icons';



function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const menuRef = useRef(null);
  const indicatorRef = useRef(null);

  // Scroll -> update active section
  useEffect(() => {
    const sectionIds = ['home', 'about', 'resume', 'portfolio', 'contact'];

    const handleScroll = () => {
      let current = sectionIds[0];
      const checkpoint = window.innerHeight * 0.3;

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= checkpoint && rect.bottom >= checkpoint) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    handleScroll(); // run once on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Move the sliding background when activeSection changes
  useEffect(() => {
    const menu = menuRef.current;
    const indicator = indicatorRef.current;
    if (!menu || !indicator) return;

    const activeLink = menu.querySelector('a.active');
    if (!activeLink) return;

    const linkRect = activeLink.getBoundingClientRect();
    const menuRect = menu.getBoundingClientRect();

    indicator.style.width = `${linkRect.width}px`;
    indicator.style.transform = `translateX(${linkRect.left - menuRect.left}px)`;
  }, [activeSection]);


  return (
    <header>
        <div className="container">
             {/* <div className="logo">Sriram</div> */}
            <nav>
                <ul ref={menuRef}>
                    <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}onClick={() => setActiveSection('home')}><FontAwesomeIcon icon={faUser} /> <div className='page-name'>Home</div></a></li>
                    <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}onClick={() => setActiveSection('about')}><FontAwesomeIcon icon={faAddressCard} /> <div className='page-name'>About</div></a></li>
                    <li><a href="#resume" className={activeSection === 'resume' ? 'active' : ''}onClick={() => setActiveSection('resume')}><FontAwesomeIcon icon={faFileLines} /> <div className='page-name'>Resume</div></a></li>
                    <li><a href="#portfolio" className={activeSection === 'portfolio' ? 'active' : ''}onClick={() => setActiveSection('portfolio')}><FontAwesomeIcon icon={faBriefcase} /> <div className='page-name'>Portfolio</div></a></li>
                    <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}onClick={() => setActiveSection('contact')}><FontAwesomeIcon icon={faEnvelope} /> <div className='page-name'>Contact</div></a></li>
                </ul>
                 <div className="nav-indicator" ref={indicatorRef}></div>
            </nav>
            {/* <div className="resume-button">
                <a href="#" className='primary-btn'>Resume</a>
            </div> */}
        </div>
    </header>
  )
}

export default Header