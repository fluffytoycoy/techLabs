import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Button from '@material-ui/core/Button';
import './Hero.scss'



function Hero(){


  return(
    <section id="hero">
      <div className="jumbo">
        <div className="header-col col">
            <div>
              <div className="title">
                <h1><span>Develope specialized software solutions</span><br/>
                From proof of concept to ready to deploy solutions</h1>
              </div>
            </div>
        </div>
        <div className="sub col">
          <div>
            <div className="title">
              <h1>1904 WAS A YEAR THAT BROUGHT TREMENDOUS PASSION, TALENT, AND
              INNOVATION TO ST LOUIS with the worldfair. WIth this mind set
              we inspire those same qualities in innovated ways</h1>
              <Link to="/#contact"><Button variant="outlined">Contact Us</Button></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
