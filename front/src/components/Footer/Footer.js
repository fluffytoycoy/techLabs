import React from 'react';
//import {Link} from 'react-router-dom';
import './Footer.scss';
import Contact from './Contact/Contact'
import {Link} from 'react-router-dom';

function Footer(props){
  const test =
    <div className="copy">
      <p>©{new Date().getFullYear()} Retro Roulette & CoyCoding | All Rights Reserved</p>
    </div>

    return (
      <section id="footer">
        <div>
        <div className="logo top">
          <img alt="labs square logo" src="/img/Logos/labs_logo_top.png"/>
        </div>
          <div className="logo left">
            <img alt="labs square logo" src="/img/Logos/labs_logo.png"/>
          </div>
          <div className="footer-body">
            <Contact />
            <div className="info">
              <div className="quick-links">
                <h5>Quick Links</h5>
                <div>
                  <Link to="/Home">
                    <p>Home</p>
                  </Link>
                  <Link to="/Services">
                    <p>Services</p>
                  </Link>
                  <Link to="/Services">
                    <p>Culture</p>
                  </Link>
                  <Link to="/Services">
                    <p>Work</p>
                  </Link>
                  <Link to="/Services">
                    <p>Contact Us</p>
                  </Link>
                  <Link to="/Services">
                    <p>Blog</p>
                  </Link>
                </div>
              </div>
              <div className="company-info">
                <h5>Info</h5>
                <div>
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <div>
                    <p>21 Revolution Street</p>
                    <p>Paris, France</p>
                  </div>
                </div>
                <div>
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <div>
                    <p>+1-555-123-4567</p>
                  </div>
                </div>
                <div>
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <div>
                    <p>support@company.com</p>
                  </div>
                </div>
              </div>
              <div className="media-icons">
              <h5>Follow Us</h5>
                <div className="icons">
        					<a href="#"><i class="fab fa-facebook-square"></i></a>
        					<a href="#"><i className="fab fa-twitter-square"></i></a>
        					<a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
        				</div>
              </div>
            </div>
          </div>
          <div className="logo right">
            <img alt="labs square logo" src="/img/Logos/labs_logo_reverse.png"/>
          </div>
        </div>
     </section>
    );
}

export default Footer;
