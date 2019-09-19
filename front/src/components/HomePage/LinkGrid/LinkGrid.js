import React from 'react';
import './LinkGrid.scss';
import {Link} from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

function LinkGrid(){
  return(
    <section className="info-grid">
      <div className="grid">
          <ScrollAnimation offset={50} animateOnce animateIn="fadeInUp"><Link to="/Services/Cloud"><div className="clouds"><h3>Cloud Services</h3></div></Link></ScrollAnimation>
          <ScrollAnimation offset={50} animateOnce delay={100} animateIn="fadeInUp"><Link to="/Services/Data-Engineering"><div className="data"><h3>Data Engineering</h3></div></Link></ScrollAnimation>
          <ScrollAnimation offset={50} animateOnce delay={200}animateIn="fadeInUp"><Link to="/Services/Decision-Science"><div className="science"><h3>Decision Science</h3></div></Link></ScrollAnimation>
          <ScrollAnimation offset={50} animateOnce delay={300}animateIn="fadeInUp"><Link to="/Culture/Community"><div className="community"><h3>Community</h3></div></Link></ScrollAnimation>
      </div>
    </section>
  )
}

export default LinkGrid;
