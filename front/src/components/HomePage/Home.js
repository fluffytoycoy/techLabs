import React from 'react';
import {Link} from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import Button from '@material-ui/core/Button';
import Hero from './Hero/Hero';
import Info from './Info/Info';
import LinkGrid from './LinkGrid/LinkGrid';
import BlogLinks from './BlogLinks/BlogLinks';
import Contact from './Contact/Contact';
import './Home.scss';

function Home(){
    return (
      <div id="home">
        <Hero/>
        <LinkGrid/>
        <Info/>
        <BlogLinks/>
        <Contact/>
      </div>
    );
}

export default Home;
