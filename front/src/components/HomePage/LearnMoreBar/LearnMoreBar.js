import React from 'react';
import './LearnMoreBar.scss';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

function LearnMoreBar(){
  return(
  <section className="learn-more">
    <div>
      <div className="text">
        <h3>
          technology is hard...
        </h3>
        <p>
        We understand the complexity of modern applications and bring an innovative approach to finding the perfect solutions for you.
        </p>
        <div className="btn-wrapper">
          <Link to="/#contact">
            <Button variant="outlined">Learn More</Button>
          </Link>
        </div>
      </div>
      <div className="img-wrapper">
      <picture>
        <source media="(min-width: 769px)" srcSet="img/Logos/pointing_guy.png"/>
        <source media="(min-width: 800px)" srcSet="img/Logos/pointing_up_guy.png"/>
          <img src="img/Logos/pointing_up_guy.png" alt="cartoon guy pointing at computer screen"/>
        </picture>
      </div>
    </div>
  </section>
  )
}

export default LearnMoreBar;
