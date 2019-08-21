import React from 'react';
import {Link} from 'react-router-dom';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import './Home.scss';

function Home(){
    return (
      <div id="home">
        <section id="hero">
          <div className="jumbo">
            <h1>modern software</h1>
            <h1>data solutions</h1>
            <h1>innovation </h1>
          </div>
        </section>
        <section className="grid">
            <ScrollAnimation animateOnce animateIn="fadeInUp"><div className="clouds"><h3>Cloud Services</h3></div></ScrollAnimation>
            <ScrollAnimation animateOnce delay={100} animateIn="fadeInUp"><div className="data"><h3>Data Engineering</h3></div></ScrollAnimation>
            <ScrollAnimation animateOnce delay={200}animateIn="fadeInUp"><div className="science"><h3>Decision Science</h3></div></ScrollAnimation>
            <ScrollAnimation animateOnce delay={300}animateIn="fadeInUp"><div className="community"><h3>Community Driven</h3></div></ScrollAnimation>
        </section>
        <section className="info">
          <div className="picture-col">
          </div>
          <div className="info-col">
          </div>
        </section>
      </div>
    );
}

export default Home;
