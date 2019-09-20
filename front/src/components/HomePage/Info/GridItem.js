import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

function GridItem(props){

  const styles={
    background: `radial-gradient(circle, rgba(255, 255, 255, 0) 50%, rgb(32, 35, 42) 90%), url("${props.item.img}")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }
  const gridItems=[
    {
      id: 1,
      title: 'The Green Fields',
      postType: 'case study',
      description: 'A multinational pharmaceutical and life sciences company endured tedious, time-intensive processes to compare large sets of crop trial data. We combined reporting platforms into a single solution that offered more powerful analytic capabilities and improved the overall user experience.',
      img: '/img/HeroSquares/field.jpeg'
    },
    {
      id: 2,
      title: 'Modernized Data Management',
      postType: 'blog',
      description: '',
      img: '/img/Blog/old-computer-small.png'
    },
    {
      id: 3,
      title: 'Breaking MonoLiths',
      postType: 'case study',
      description: 'A telecommunications client needed to scale its individual applications and services independently and deliver to production faster to provide greater business value.',
      img: '/img/HeroSquares/mono.jpg'
    },
    {
      id: 4,
      title: 'Cage it up',
      postType: 'blog',
      description: '',
      img: '/img/Blog/bubsy.gif'
    },
  ]

  return(
    <ScrollAnimation className="item" animateOnce animateIn="fadeInLeft">
      <div style={styles}>
        <div className="hub-info">
            <div className="title">
            <img src="/img/Icons/up-arrows.svg"/>
              <h4>{props.item.title}</h4>
            </div>
            <div className="body">
            <p>{props.item.description}</p>
            <Link to="/#contact"><Button variant="outlined">Contact Us</Button></Link>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  )
}

export default GridItem;
