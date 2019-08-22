import React from 'react';
import {Link} from 'react-router-dom';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Button from '@material-ui/core/Button';
import Hero from './Hero/Hero';
import './Home.scss';

function Home(){
    return (
      <div id="home">
        <Hero/>
        <div className="grid-wrapper">
          <section className="grid">
              <ScrollAnimation offset={50} animateOnce animateIn="fadeInUp"><div className="clouds"><h3>Cloud Services</h3></div></ScrollAnimation>
              <ScrollAnimation offset={50} animateOnce delay={100} animateIn="fadeInUp"><div className="data"><h3>Data Engineering</h3></div></ScrollAnimation>
              <ScrollAnimation offset={50} animateOnce delay={200}animateIn="fadeInUp"><div className="science"><h3>Decision Science</h3></div></ScrollAnimation>
              <ScrollAnimation offset={50} animateOnce delay={300}animateIn="fadeInUp"><div className="community"><h3>Community Driven</h3></div></ScrollAnimation>
          </section>
        </div>
        <section className="info">
          <div className="picture-col">
          <h1>modern software</h1>
          <h1>data solutions</h1>
          <h1>innovation </h1>
          </div>
          <div className="info-col">
          </div>
        </section>
      </div>
    );
}

export default Home;
