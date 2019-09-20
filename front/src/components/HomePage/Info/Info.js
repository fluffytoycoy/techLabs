import React from 'react';
import './Info.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import GridItem from './GridItem';

function Info(){
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

  const hubItems =
    gridItems.map((item, index)=>{
      return <GridItem item={item} key={index}/>
    })

  return(
    <section id="info">
      <div className="info-wrapper">
      <ScrollAnimation className="grid-header" animateOnce animateIn="fadeInLeft">
        <div>
          <h3 title="The techHub">The techHub</h3>
        </div>
      </ScrollAnimation>
      {hubItems}
      </div>
    </section>
  )
}

export default Info;
