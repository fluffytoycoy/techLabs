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
  return(
    <section id="info">
      <div className="info-wrapper">
      <h1>Case Studies</h1>
        <div>
          <ScrollAnimation animateOnce animateIn="fadeInLeft">
          <div>
            <div className="circle">
            </div>
            <div className="img-wrapper">
              <img src="https://www.placecage.com/g/500/500"/>
            </div>
          </div>
          </ScrollAnimation>
          <ScrollAnimation animateOnce  animateIn="fadeInRight">
            <div>
              <h2>Where does it come from?</h2>
              <p>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
              </p>
            </div>
          </ScrollAnimation>
        </div>
        <div>
          <ScrollAnimation animateOnce animateIn="fadeInLeft">
          <div>
            <div className="circle">
            </div>
            <div className="img-wrapper">
              <img src="https://www.placecage.com/g/500/500"/>
            </div>
          </div>
          </ScrollAnimation>
          <ScrollAnimation animateOnce animateIn="fadeInRight">
          <div>
            <h2>Where does it come from?</h2>
            <p>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
            </p>
          </div>
          </ScrollAnimation>
        </div>
        <div>
        <ScrollAnimation animateOnce animateIn="fadeInLeft">
          <div>
            <div className="circle">
            </div>
            <div className="img-wrapper">
              <img src="https://www.placecage.com/g/500/500"/>
            </div>
          </div>
        </ScrollAnimation>
          <ScrollAnimation animateOnce animateIn="fadeInRight">
          <div>
            <h2>Where does it come from?</h2>
            <p>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
            </p>
          </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default Info;
