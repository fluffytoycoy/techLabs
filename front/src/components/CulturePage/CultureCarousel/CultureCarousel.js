import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import './CultureCarousel.scss'

class CultureCarousel extends Component {

  responsive={
    0: {items: 1},
    700: {items: 3}
  }
  handleOnDragStart = e => e.preventDefault()

  slide={
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

slide2={
  background: 'url("/img/science.jpg")',

}


slide1={
  background: 'url("/img/clouds.jpg")'
}

change(e){
  if(e.item === e.itemsInSlide -1){
    console.log('yes')
  }
}
    render() {
        return (
            <AliceCarousel
            dotsDisabled={true}
            responsive={this.responsive}
            buttonsDisabled={true}
            autoPlayInterval={3000}
            autoPlayDirection="lft"
            autoPlay={true}
            mouseDragEnabled
            onSlideChange={this.change} className="test">
              <div style={{...this.slide2, ...this.slide}}className="slide">
              </div>
              <div style={{...this.slide1, ...this.slide}}className="slide1">
              </div>
              <div className="slide">
              </div>
            </AliceCarousel>
        );
    }
}

export default CultureCarousel;
