import React from 'react';
import Hero from './Hero/Hero';
import Info from './Info/Info';
import LinkGrid from './LinkGrid/LinkGrid';
import Reviews from './Reviews/Reviews';
import LearnMoreBar from './LearnMoreBar/LearnMoreBar';
import './Home.scss';

function Home(props){
    return (
      <div id="home">
        <Hero/>
        <LinkGrid/>
        <LearnMoreBar/>
        <Info blogs={props.blogs}/>
        <Reviews/>
      </div>
    );
}

export default Home;
