import React from 'react'
import me from '../assets/images/me.png';


function Hero() {
  return (
     <main className="home" id='home'>
        <section>
            <div className="">
              <img src={me} alt="" className='home_img'/>
           
            <div className="home_content">
                <h3>👋, my name is SRIRAM and I am a UI/UX</h3>
                <h1>DEVELOPER</h1>
                <h1>& DESIGNER</h1>
                <h4 style={{ textAlign: 'end' }}>Let's make something beautiful together ✨.</h4>
            </div>
            <div className="home_content_outline">
                <h3>👋, my name is SRIRAM and I am a UI/UX</h3>
                <h1>DEVELOPER</h1>
                <h1 className='outline-text'>& DESIGNER</h1>
                <h4 style={{ textAlign: 'end' }}>Let's make something beautiful together ✨.</h4>
            </div>
             </div>
        </section>
     </main>  
  )
}

export default Hero