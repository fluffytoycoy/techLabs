import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import './CultureCarousel.scss'

class CultureCarousel extends Component {

  responsive={
    0: {items: 1},
    700: {items: 5}
  }
  handleOnDragStart = e => e.preventDefault()

  slide={
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '300px'
  }

  slide2={
    background: 'url("/img/science.jpg")',
  }


  slide1={
    background: 'url("/img/clouds.jpg")'
  }

  componentWillUnmount(){

  }

    render() {
        return (
            <AliceCarousel
              dotsDisabled={true}
              responsive={this.responsive}
              buttonsDisabled={true}
              autoPlayInterval={3000}
              autoPlayDirection="lft"
              autoPlay={false}
              mouseDragEnabled>
              <div style={{...this.slide2, ...this.slide}}className="slide">
              </div>
              <div style={{...this.slide1, ...this.slide}}className="slide1">
              </div>
              <div style={{...this.slide2, ...this.slide}} className="slide">
              </div>
              <div style={{...this.slide1, ...this.slide}}className="slide1">
              </div>
              <div style={{...this.slide2, ...this.slide}} className="slide">
              </div>
              <div style={{...this.slide1, ...this.slide}}className="slide1">
              </div>
              <div style={{...this.slide2, ...this.slide}} className="slide">
              </div>
            </AliceCarousel>
        );
    }
}

export default CultureCarousel;
