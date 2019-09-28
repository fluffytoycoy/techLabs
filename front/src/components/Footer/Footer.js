import React from 'react';
//import {Link} from 'react-router-dom';
import './Footer.scss';
import Contact from './Contact/Contact'
import {Link} from 'react-router-dom';

function Footer(props){
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
            <Contact {...props}/>
            <div className="info">
              <div className="quick-links">
                <h5>Quick Links</h5>
                <div>
                  <Link to="/">
                    <p>Home</p>
                  </Link>
                  <Link to="/Services">
                    <p>Services</p>
                  </Link>
                  <Link to="/Culture">
                    <p>Culture</p>
                  </Link>
                  <Link to="/Work">
                    <p>Work</p>
                  </Link>
                  <Link to="#contact-us">
                    <p>Contact Us</p>
                  </Link>
                  <Link to="/Blog">
                    <p>Blog</p>
                  </Link>
                </div>
              </div>
              <div className="company-info">
                <h5>Info</h5>
                <div>
                  <i className="fas fa-home" aria-hidden="true"></i>
                  <div>
                    <p>21 Revolution Street</p>
                    <p>Paris, France</p>
                  </div>
                </div>
                <div>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <div>
                    <p>+1-555-123-4567</p>
                  </div>
                </div>
                <div>
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                  <div>
                    <p>support@company.com</p>
                  </div>
                </div>
              </div>
              <div className="media-icons">
              <h5>Follow Us</h5>
                <div className="icons">
        					<a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank"><i className="fab fa-facebook-square"></i></a>
        					<a href="https://twitter.com" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter-square"></i></a>
        					<a href="https://linkedin.com" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>
                  <a href="https://instagram.com" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram"></i></a>
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
