import React from 'react';
import './BlogLinks.scss';
import {Link} from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

function BlogLinks(){

    const responsive={
      0: {items: 1}
    }

    const slide={
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }

    const slides = [
      {
        text: '“If it weren’t for techLabs, we would not be in the cloud which is now a huge advantage. We are grateful for their relentless commitment to getting us there.”',
        name: "mark summers",
        position: "Senior IT Executive",
        company: 'Nike'
      },
      {
        text: '“We value entrepreneurial thinking. We value creativity. We value innovation and diversity of thought. Looking for different ways to find top developers, 1904labs has proven to be a great partner. Their innovation approach to attracting and developing talent has helped us deliver outstanding results to our customers.”',
        name: "randy savage",
        position: "Senior IT Executive",
        company: 'Life Pharma'
      },
      {
        text: '“If it weren’t for 1904labs, we would not be in the cloud which is now a huge advantage. We are grateful for their relentless commitment to getting us there.”',
        name: "Jim Clark",
        position: "Project Manager",
        company: 'Global Scope Inc.'
      },
      {
        text: '“If it weren’t for 1904labs, we would not be in the cloud which is now a huge advantage. We are grateful for their relentless commitment to getting us there.”',
        name: "Chris Long",
        position: "Tech Lead",
        company: 'Voom Tech'
      },
    ]

    const domSlides = slides.map(slide=>{
      return(
        <div>
          <p>{slide.text}</p>
          <h4>{slide.name}</h4>
          <h4>{slide.position}</h4>
        </div>
      )
    });

    return (
      <div id="blog">
        <AliceCarousel
            dotsDisabled={true}
            responsive={responsive}
            autoPlayInterval={3000}
            autoPlayDirection="lft"
            autoPlay={false}>
              {domSlides}
        </AliceCarousel>
      </div>
    )
}


export default BlogLinks;
