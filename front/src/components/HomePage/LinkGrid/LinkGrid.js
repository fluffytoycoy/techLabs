import React from 'react';
import './LinkGrid.scss';
import ScrollAnimation from 'react-animate-on-scroll';

function LinkGrid(){
  return(
    <div className="grid-wrapper">
      <section className="grid">
          <ScrollAnimation offset={50} animateOnce animateIn="fadeInUp"><div className="clouds"><h3>Cloud Services</h3></div></ScrollAnimation>
          <ScrollAnimation offset={50} animateOnce delay={100} animateIn="fadeInUp"><div className="data"><h3>Data Engineering</h3></div></ScrollAnimation>
          <ScrollAnimation offset={50} animateOnce delay={200}animateIn="fadeInUp"><div className="science"><h3>Decision Science</h3></div></ScrollAnimation>
          <ScrollAnimation offset={50} animateOnce delay={300}animateIn="fadeInUp"><div className="community"><h3>Community Driven</h3></div></ScrollAnimation>
      </section>
    </div>
  )
}

export default LinkGrid;
