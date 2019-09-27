import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const images = [
  '/img/LabSlider/foodbank.jpg',
  '/img/LabSlider/foodbank2.jpg',
  '/img/LabSlider/foodbank3.jpg',
];

const domSlides = images.map((image, index)=>{
return(
  <img key={index} alt="lab community" src={image}/>
  )
});

const FoodSlider = () => {
    return (
      <AliceCarousel
          fadeOutAnimation={true}
          dotsDisabled={true}
          autoPlayInterval={8000}
          autoPlayDirection="lft"
          buttonsDisabled={true}
          autoPlay={true}>
            {domSlides}
      </AliceCarousel>
    )
}

export default FoodSlider;
