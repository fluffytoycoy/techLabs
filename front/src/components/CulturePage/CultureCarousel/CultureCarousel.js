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
    slides = [
      { background: 'url("https://1904labs.com/wp-content/uploads/2017/01/IMG_1779-1-510x382.jpg")'},
      { background: 'url("https://1904labs.com/wp-content/uploads/2018/01/20171017_141536-510x382.jpg")'},
      { background: 'url("https://1904labs.com/wp-content/uploads/2017/01/IMG_5582-510x382.jpg")'},
      { background: 'url("https://1904labs.com/wp-content/uploads/2018/01/20171027_114558-510x382.jpg" )'},
      { background: 'url("https://1904labs.com/wp-content/uploads/2018/01/20171109_1546340-510x382.jpg")'},
      { background: 'url("https://1904labs.com/wp-content/uploads/2017/01/IMG_5539-510x382.jpg")'},
      { background: 'url("https://1904labs.com/wp-content/uploads/2017/01/IMG_2013-510x382.jpg")'},
      { background: 'url("https://1904labs.com/wp-content/uploads/2017/01/IMG_5304-510x382.jpg")'},
      { background: 'url("https://1904labs.com/wp-content/uploads/2017/01/IMG_1982-1-510x382.jpg")'},
      { background: 'url("https://1904labs.com/wp-content/uploads/2017/01/IMG_2013-510x382.jpg")'},
      { background: 'url("https://1904labs.com/wp-content/uploads/2018/01/21167719_875572002593418_6434077309757992956_o-510x382.jpg")'},
      { background: 'url("https://1904labs.com/wp-content/uploads/2018/01/20171109_1546340-510x382.jpg")'},


    ]

  componentWillUnmount(){

  }

    render() {
      const slides = this.slides.map(style=>{
        return (
          <div style={{...style, ...this.slide}}className="slide">
          </div>)
      })
        return (
            <AliceCarousel
              dotsDisabled={true}
              responsive={this.responsive}
              buttonsDisabled={true}
              autoPlayInterval={3000}
              autoPlayDirection="lft"
              autoPlay={false}
              mouseDragEnabled>
              {slides}
            </AliceCarousel>
        );
    }
}

export default CultureCarousel;
