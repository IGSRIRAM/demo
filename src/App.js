import './App.css';
import Header from './components/Header';
import Resume from './components/Resume';
import Hero from './components/Hero'
import Portfolio from './components/Portfolio';
import Resume_btn from './components/Resume_btn';
import Mode_btn from './components/Mode_btn';

function App() {
  return (
  
    <>
    <Header/>
    <Resume_btn/>
    <Mode_btn/>
    <Hero/>
    <Resume/>
    <Portfolio/>
    </>
  );
}

export default App;
