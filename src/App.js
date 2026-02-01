import './App.css';
import Header from './components/Header';
import Resume from './components/Resume';
import Experience from './components/Experience';
import Hero from './components/Hero'
import About from './components/About';
import Services from './components/Services.jsx';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact.jsx';   
import Resume_btn from './components/Resume_btn';
import Mode_btn from './components/Mode_btn';
import "@fortawesome/fontawesome-free/css/all.min.css";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




function App() {
  return (
  
    <>
    <Header/>
    <Resume_btn/>
    <Mode_btn/>
    <Hero/>
    <Services/>
    <Portfolio/>
    <About/>
    <Experience/>
    <Contact/>
    </>
  );
}

export default App;
