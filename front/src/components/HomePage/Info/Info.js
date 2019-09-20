import React from 'react';
import './Info.scss';
import ScrollAnimation from 'react-animate-on-scroll';

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
    background: 'url("/img/HeroSquares/field.jpeg")',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }
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

          </div>
        </ScrollAnimation>
        <ScrollAnimation className="item" animateOnce animateIn="fadeInLeft">
          <div style={style1}>

          </div>
        </ScrollAnimation>
        <ScrollAnimation className="item" animateOnce animateIn="fadeInLeft">
          <div style={style1}>

          </div>
        </ScrollAnimation>
        <ScrollAnimation className="item" animateOnce animateIn="fadeInLeft">
          <div style={style1}>

          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default Info;
