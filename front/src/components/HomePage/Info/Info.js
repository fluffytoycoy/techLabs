import React from 'react';
import './Info.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import Button from '@material-ui/core/Button';

function Info(){

  function one(){
    return          <>
    <div>
                  <h2>modern software</h2>
                  <p>We modernize legacy platforms and transform them to meet the demands of today's digital world.</p>
                </div>
                <div>
                <h2>data solutions</h2>
                <p>We Leverage data and web technology to enhance and optimized user experiences.</p>
              </div>
              <div>
                <h2>Innovation</h2>
                <p>Simply put we solve problems and save you money</p>
              </div>
              </>
  }

  const style1={
    background: 'radial-gradient(circle, rgb(255, 255, 255), rgba(255, 255, 255, 0), rgb(32, 35, 42) 90%), url("/img/HeroSquares/field.jpeg")',
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
      img: '/img/HeroSquares/mono.jpeg'
    },
    {
      id: 4,
      title: 'Cage it up',
      postType: 'blog',
      description: '',
      img: '/img/Backgrounds/carrot.gif'
    },
  ]

  return(
    <section id="info">
      <div className="info-wrapper">
      <ScrollAnimation className="grid-header" animateOnce animateIn="fadeInLeft">
        <div>
          <h3 title="The techHub">The techHub</h3>
        </div>
      </ScrollAnimation>
      <ScrollAnimation className="item" animateOnce animateIn="fadeInLeft">
        <div style={style1}>
          <div className="hub-info">
              <div className="title">
              <img src="/img/Icons/up-arrows.svg"/>
                <h4>This is a title</h4>
              </div>
              <div className="body">
              <p>
                A telecommunications client needed to scale its individual applications and services independently and deliver to production faster to provide greater business value.
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation className="item" animateOnce animateIn="fadeInLeft">
        <div style={style1}>
          <div className="hub-info">
              <div className="title">
              <img src="/img/Icons/up-arrows.svg"/>
                <h4>This is a title</h4>
              </div>
              <div className="body">
              <p>
                A telecommunications client needed to scale its individual applications and services independently and deliver to production faster to provide greater business value.
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation className="item" animateOnce animateIn="fadeInLeft">
        <div style={style1}>
          <div className="hub-info">
              <div className="title">
              <img src="/img/Icons/up-arrows.svg"/>
                <h4>This is a title</h4>
              </div>
              <div className="body">
              <p>
                A telecommunications client needed to scale its individual applications and services independently and deliver to production faster to provide greater business value.
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation className="item" animateOnce animateIn="fadeInLeft">
        <div style={style1}>
          <div className="hub-info">
              <div className="title">
              <img src="/img/Icons/up-arrows.svg"/>
                <h4>This is a title</h4>
              </div>
              <div className="body">
              <p>
                A telecommunications client needed to scale its individual applications and services independently and deliver to production faster to provide greater business value.
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      </div>
    </section>
  )
}

export default Info;
