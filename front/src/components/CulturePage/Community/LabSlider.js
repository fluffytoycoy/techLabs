import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

  const images = [
    '/img/LabSlider/lab_slider1.jpg',
    '/img/LabSlider/lab_slider2.jpg',
    '/img/LabSlider/lab_slider3.jpg',
    '/img/LabSlider/lab_slider4.jpg',
  ];

  const responsive = { 0: { items: 1 }}

  const domSlides = images.map((image, index)=>{
    return(
      <img key={index} alt="lab community" src={image}/>
      )
  });

  const LabSlider = () => {
      return (
        <AliceCarousel
            fadeOutAnimation={true}
            dotsDisabled={true}
            autoPlayInterval={8000}
            autoPlayDirection="lft"
            buttonsDisabled={true}
            autoPlay={true}
            responsive={responsive}>
              {domSlides}
        </AliceCarousel>
      )
  }

export default LabSlider;
