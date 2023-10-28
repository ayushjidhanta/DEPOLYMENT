import React from 'react'
import "./SliderAbout.css";

function SliderAbout() {
  return (
     
    <div className="one">
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
  
        <div className="carousel-item active" data-bs-interval="10000" Style="background-image:url(/public/About-Images/SliderAbout-img.jpg);">
          <div className="container">
            <h1 className="display-4">Experience the Authentic Taste of Himachal Pradesh</h1>
            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident exercitationem perspiciatis a amet quod! Doloribus voluptatum voluptatem eius quisquam, ut incidunt ullam repellendus ipsum suscipit, eos accusantium iusto aliquam quos!</p>
            <button type="button" className="btn btn-lg btn-success">Know More</button>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="10000">
          <div className="container">
            <h1 className="display-4">Get The Fruits at Low Costs During Our Seasons</h1>
            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident exercitationem perspiciatis a amet quod! Doloribus voluptatum voluptatem eius quisquam, ut incidunt ullam repellendus ipsum suscipit, eos accusantium iusto aliquam quos!</p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <h1 className="display-4">Headlines Here</h1>
            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident exercitationem perspiciatis a amet quod! Doloribus voluptatum voluptatem eius quisquam, ut incidunt ullam repellendus ipsum suscipit, eos accusantium iusto aliquam quos!</p>
          </div>
        </div>
  
      </div>
  
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  
  )
}

export default SliderAbout;
