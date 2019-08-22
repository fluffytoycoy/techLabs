import React from 'react';
import {Link} from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import Button from '@material-ui/core/Button';
import Hero from './Hero/Hero';
import Info from './Info/Info';
import LinkGrid from './LinkGrid/LinkGrid';
import './Home.scss';

function Home(){
    return (
      <div id="home">
        <Hero/>
        <LinkGrid/>
        <Info/>
        <section id="blog">
          <ScrollAnimation offset={50} animateOnce animateIn="fadeInDown"><div><h1>Blog</h1></div></ScrollAnimation>
          <section className="blog-grid">
              <ScrollAnimation offset={50} animateOnce animateIn="fadeInLeft"><div><div className="clouds"></div><h3>Data Manageable</h3></div></ScrollAnimation>
              <ScrollAnimation offset={50} animateOnce delay={100} animateIn="fadeInRight"><div><div className="data"></div><h3>The Secret Little Code</h3></div></ScrollAnimation>
          </section>
        </section>
      </div>
    );
}

export default Home;
