import React from 'react';
import Hero from './Hero/Hero';
import Info from './Info/Info';
import LinkGrid from './LinkGrid/LinkGrid';
import BlogLinks from './BlogLinks/BlogLinks';
import Contact from './Contact/Contact';
import './Home.scss';

function Home(props){
    return (
      <div id="home">
        <Hero/>
        <LinkGrid/>
        <Info/>
        <BlogLinks/>
        <Contact{...props}/>
      </div>
    );
}

export default Home;
