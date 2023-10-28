import React from 'react';
import "./SliderExp.css";

function SliderExp() {
  return (
    <div>
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
<div className="carousel-indicators">
  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div className="carousel-inner">
  <div className="carousel-item active" data-bs-interval="10000">
    <img src="/SliderExp-image/SliderExp-img1.jpeg" className="d-block w-10" alt="First "/>
    <div className="carousel-caption ">
      <h4>Choose the Products here </h4>
      <h5>Some representative placeholder content for the first slide.</h5>
    </div>
  </div>
  <div className="carousel-item" data-bs-interval="2000">
    <img src="/SliderExp-image/SliderExp-img2.jpeg" className="d-block w-10" alt="Second "/>
    <div className="carousel-caption ">
      <h4>Second slide label</h4>
      <h5>Some representative placeholder content for the second slide.</h5>
    </div>
  </div>
  <div className="carousel-item">
    <img src="/SliderExp-image/SliderExp-img3.jpeg" className="d-block w-10" alt="Third"/>
    <div className="carousel-caption ">
      <h4>Third slide label</h4>
      <h5>Some representative placeholder content for the third slide.</h5>
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

export default SliderExp;

