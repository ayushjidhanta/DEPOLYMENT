import React from 'react';
import Slider from './Slider.jsx';
import  "./Home.css";
import { useNavigate } from 'react-router';
import Navbar2 from './Navbar2.jsx';
import Shortdiscription from '../ShortDiscription/shortdiscription.jsx';
import Footer from '../Footer/footer.jsx';
function Home() {

  //Navigation path is in App.js 
  const navigate = useNavigate();
  const toggleExplore=()=> {
    navigate("/explore");
  }

  return (
    <div>
      <Navbar2/>
      <div className="margin-box">
      <h1>Explore 2</h1>
    </div>
       <div className = "containe">
        {/* <h1>Interface UI</h1> */}
        {/* <h1>.</h1>
        <button className="Signout" >Signout</button> */}
       </div>
       
       <section className="section__1">
        <div className="wrapper">
          <div className="head__text">
            <h1 className="head__title">Himachal Harvest</h1>
            <h2 className="head__desc">Our Farm Our Promise</h2>
          </div>
          <button className="exp__btn"onClick={toggleExplore}>
            <p>Explore</p>
          </button>
          <div className="mouse">
            <div className="mouse__wheel"></div>
          </div>
        </div>
      </section>
      <Slider/>
      <Shortdiscription/>
      <Footer/>
    </div>
  )
}

export default Home
