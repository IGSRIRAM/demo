import React from 'react'
import Slider from "react-slick"


function Portfolio() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 2000,
    fade: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <main className="portfolio" id="portfolio">
      <section>
        <div className="container">
          <div>
            <p className="section-subtitle">working process</p>
            <h2>Latest Projects</h2>
        {/* <h2>LATEST PROJECTS</h2> */}
          </div>

          <Slider {...settings}>
            <div className='slide'><h3>1</h3></div>
            <div className='slide'><h3>2</h3></div>
            <div className='slide'><h3>3</h3></div>
            <div className='slide'><h3>4</h3></div>
            <div className='slide'><h3>5</h3></div>
            <div className='slide'><h3>6</h3></div>
          </Slider>
        </div>
      </section>
    </main>
  )
}

export default Portfolio
