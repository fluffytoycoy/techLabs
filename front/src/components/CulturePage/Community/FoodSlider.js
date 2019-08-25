import React from 'react';
import { Zoom } from 'react-slideshow-image';

const images = [
  '/img/LabSlider/foodbank.jpg',
  '/img/LabSlider/foodbank2.jpg',
  '/img/LabSlider/foodbank3.jpg',
];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
  scale: 1
}

const FoodSlider = () => {
    return (
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {
            images.map((each, index) => <img key={index} alt='foodbank 'style={{width: "100%"}} src={each} />)
          }
        </Zoom>
      </div>
    )
}

export default FoodSlider;
