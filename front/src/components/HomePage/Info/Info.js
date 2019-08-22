import React from 'react';
import './Info.scss';
import ScrollAnimation from 'react-animate-on-scroll';

function Info(){
  return(
    <section className="info">
      <div className="info-wrapper">
        <div>
          <ScrollAnimation animateOnce animateIn="fadeInLeft">
            <div className="icon">
              <i class="fas fa-laptop-code"></i>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateOnce  animateIn="fadeInRight">
            <div>
              <h2>modern software</h2>
              <p>We modernize legacy platforms and transform them to meet the demands of today's digital world.</p>
            </div>
          </ScrollAnimation>
        </div>
        <div>
          <ScrollAnimation animateOnce animateIn="fadeInLeft">
            <div className="icon">
              <i class="fas fa-server">  </i>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateOnce animateIn="fadeInRight">
            <div>
              <h2>data solutions</h2>
              <p>We Leverage data and web technology to enhance and optimized user experiences.</p>
            </div>
          </ScrollAnimation>
        </div>
        <div>
        <ScrollAnimation animateOnce animateIn="fadeInLeft">
          <div className="icon">
            <i class="far fa-lightbulb"></i>
          </div>
        </ScrollAnimation>
          <ScrollAnimation animateOnce animateIn="fadeInRight">
            <div>
              <h2>Innovation</h2>
              <p>Simply put we solve problems and save you money</p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default Info;
