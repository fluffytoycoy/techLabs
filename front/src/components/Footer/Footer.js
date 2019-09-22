import React from 'react';
//import {Link} from 'react-router-dom';
import './Footer.scss';
import Contact from './Contact/Contact'
function Footer(){
  const test =
    <div className="copy">
      <p>©{new Date().getFullYear()} Retro Roulette & CoyCoding | All Rights Reserved</p>
    </div>

    return (
      <section id="footer">
        <div>
          <div className="logo left">
            <img alt="labs square logo" src="/img/Logos/labs_logo.png"/>
          </div>
          <div className="footer-body">
            <Contact/>
          </div>
          <div className="logo right">
            <img alt="labs square logo" src="/img/Logos/labs_logo.png"/>
          </div>
        </div>
     </section>
    );
}

export default Footer;
