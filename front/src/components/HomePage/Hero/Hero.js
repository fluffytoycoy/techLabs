import React from 'react';
import Button from '@material-ui/core/Button';
import ScrollAnimation from 'react-animate-on-scroll';
import './Hero.scss'



function Hero(){
  return(
    <section id="hero">
      <div className="jumbo">
        <div className="img-wrapper">
          <ScrollAnimation animateOnce animateIn="fadeInLeft"><img src="/img/Logos/labs_logo.png"/></ScrollAnimation >
        </div>
        <div className="header-col col">
            <div>
              <div className="title">
                <h1><span>Develope specialized software solutions</span><br/>
                From proof of concept to ready to deploy solutions</h1>
              </div>
            </div>
        </div>
        <div className="map-col col">
          <div>
            <div className="title">
              <h1>1904 WAS A YEAR THAT BROUGHT TREMENDOUS PASSION, TALENT, AND
              INNOVATION TO ST LOUIS with the worldfair. WIth this mind set
              we inspire those same qualities in innovated ways</h1>
              <Button variant="outlined">Contact Us</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
