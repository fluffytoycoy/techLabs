import React from 'react';
import { Zoom } from 'react-slideshow-image';

const images = [

  '/img/LabSlider/lab_slider1.jpg',
  '/img/LabSlider/lab_slider2.jpg',
  '/img/LabSlider/lab_slider3.jpg',
  '/img/LabSlider/lab_slider4.jpg',
];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
  scale: 1
}

const LabSlider = () => {
    return (
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {
            images.map((each, index) => <img alt='kids learning' key={index} style={{width: "100%"}} src={each} />)
          }
        </Zoom>
      </div>
    )
}

export default LabSlider;
