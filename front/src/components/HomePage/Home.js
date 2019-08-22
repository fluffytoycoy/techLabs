import React from 'react';
import {Link} from 'react-router-dom';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Button from '@material-ui/core/Button';
import Hero from './Hero/Hero';
import Info from './Info/Info';
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
        <Info/>
      </div>
    );
}

export default Home;
