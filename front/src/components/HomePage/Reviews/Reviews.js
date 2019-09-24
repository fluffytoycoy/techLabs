import React, {useState} from 'react';
import './Reviews.scss';
import {Link} from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


const slides = [
  {
    text: 'If it weren’t for techLabs, we would not be in the cloud which is now a huge advantage. We are grateful for their relentless commitment to getting us there.',
    name: "betty summers",
    position: "Senior IT Executive",
    company: 'Nike',
    img: "/img/HeroSquares/review-icon-1.png"
  },
  {
    text: 'We value entrepreneurial thinking. We value creativity. We value innovation and diversity of thought. Looking for different ways to find top developers, 1904labs has proven to be a great partner. Their innovation approach to attracting and developing talent has helped us deliver outstanding results to our customers.',
    name: "randy savage",
    position: "Senior IT Executive",
    company: 'Life Pharma',
    img: "/img/HeroSquares/review-icon-2.png"
  },
  {
    text: 'If it weren’t for 1904labs, we would not be in the cloud which is now a huge advantage. We are grateful for their relentless commitment to getting us there.',
    name: "Jim Clark",
    position: "Project Manager",
    company: 'Global Scope Inc.',
    img: "/img/HeroSquares/review-icon-3.png"
  },
  {
    text: 'If it weren’t for 1904labs, we would not be in the cloud which is now a huge advantage. We are grateful for their relentless commitment to getting us there.',
    name: "Chris Long",
    position: "Tech Lead",
    company: 'Voom Tech',
    img: "/img/HeroSquares/review-icon-4.png"
  },
]

class Reviews extends React.Component{
  constructor(props){
    super(props);
    this.state={
      currentIndex: 0,
      itemsInSlide: 4,
      selectedReview: 0,
      autoPlay: true,
      responsive: { 0: { items: 1 }},
    }
  }

  slideTo = (i) => this.setState({ selectedReview: i })

  endAutoPlay= () => this.setState({autoPlay: false})

  handleClick=(i)=> {
    this.endAutoPlay();
    this.setState({
      clicked: true
    })
    this.slideTo(i);
  }

  thumbItem = (item, i) => {
    return (
    <div className={`img-wrapper ${this.state.selectedReview == i ? 'active' : ''}`} onClick={() => this.handleClick(i)}>
      <img src={`${item.img}`}></img>
    </div>
    )
  }

  domSlides = slides.map(slide=>{
    return(
      <div className="review">
        <p><b>"</b>{slide.text}<b>"</b></p>
        <div>
          <h4>{slide.name}</h4>
          <h5>{slide.position}</h5>
        </div>
      </div>
      )
    });

    handleSlideChange =(e) =>{
      if(!this.state.clicked){
        if((e.slide+1) < this.state.itemsInSlide){
          this.slideTo(e.slide + 1);
        }else{
          this.slideTo(0);
        }
      }else{
    }
}
    render(){
      return (
        <div id="blog">
          <div>
            <AliceCarousel
                fadeOutAnimation={true}
                dotsDisabled={true}
                responsive={this.responsive}
                autoPlayInterval={7000}
                autoPlayDirection="lft"
                slideToIndex={this.state.selectedReview}
                buttonsDisabled={true}
                onSlideChange={this.handleSlideChange}
                autoPlay={this.state.autoPlay}>
                  {this.domSlides}
            </AliceCarousel>
          </div>
          <div  className="thumb-items" >
            <div>
              {slides.map(this.thumbItem)}
            </div>
          </div>
        </div>
      )
    }
}


export default Reviews;
