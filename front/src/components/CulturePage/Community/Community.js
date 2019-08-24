import React from 'react';
import {Link} from 'react-router-dom';
import LabSlider from './LabSlider';
import FoodSlider from './FoodSlider';
import './Slider.scss';

function Community(){

    return (
      <div id="root-link">
        <div className={`jumbo community`}>
          <div className="corner-icon">
            <img src="/img/Logos/community.svg"/>
          </div>
          <h1 className="long-word">Community</h1>
        </div>
        <div className="service-body">
          <div className="body-wrapper">
            <div className="title">
              <h2>Committed to Community</h2>
              <p>We have a focus on serving the community. Some of the recent ways we’ve been able to give back are below. If you have an idea of how we can serve, please contact us.</p>
            </div>
            <div className="selection-body">
              <div>
                <div className="icon">
                  <LabSlider/>
                </div>
                <div className="info">
                  <h3>labCoders</h3>
                  <p>
                    The “Coders” program is designed to invest in the next generation of software engineers!
                    This course, sponsored by techLabs, enables students to develop their own smartphone apps
                    and have fun in the process. Students gain problem-solving skills and creativity, while learning
                    the fundamentals of software design and development techniques.
                  </p>
                    <p> By the end of the very first session,
                    students had built their own working app and their imaginations took off.
                  </p>
                </div>
              </div>
              <div>
                <div className="info no-img">
                  <h3>techRockets</h3>
                  <p>
                    For the rockets program, students built and designed their own model rockets. Putting together a rocket can be a tedious process.
                     Students have to measure things before cutting them. They have to go slow with the knife and take their time with tiny knots.
                     They had to wait for glue to dry. However at the end of it all,
                    the student got to watch something they worked extensively on fly into the sky, it was truly an awesome experience.
                   </p>
                </div>
              </div>
              <div className="reverse">
                <div className="icon">
                  <img src="/img/Logos/life_academy.png"/>
                </div>
                <div className="info">
                  <h3>Lift for Life Academy</h3>
                  <p>
                  LIFT FOR LIFE ACADEMY, which opened in 2000 as the first independent charter school in the city of St. Louis,
                  serves students in grades 6-12 from throughout the city. The Academy offers a private school atmosphere, while
                  all programs and services are provided at no cost to students and their families.
                  </p>
                </div>
              </div>
              <div>
                <div className="icon">
                  <img src="/img/LabSlider/pforp.jpg"/>
                </div>
                <div className="info">
                  <h3>Places for People</h3>
                  <p>Since 1972, Places for People (PfP) has served people who have the most serious mental illnesses in the St. Louis area. Places for People was formed initially to provide housing and services for people who had been discharged from the State Psychiatric Hospital. Over the years, the agency expanded to address new needs, including chronic homelessness, substance abuse disorders, and medical disorders.
                  </p>
                    <p>
                    techLabs asked Places for People what we could do to help them on an episodic basis. They said that they are always in need of food for walk-in clients, and asked us to deliver 50 lunch bags. They gave a list of items that included a sandwich, fruit, pretzels, a piece of chocolate, and a note of encouragement and we delivered…literally.
                  </p>
                </div>
              </div>
              <div className="reverse">
                <div className="icon">
                    <FoodSlider/>
                </div>
                <div className="info">
                  <h3>St. Louis Area Foodbank</h3>
                  <p>
                    The St. Louis Area Foodbank is an organization that relies on the generosity of others to make a difference in the
                    lives of those in need of food assistance. Over the years, they have grown to become the bi-state region’s largest
                    non-profit 501(c)(3) food distribution charity dedicated to feeding those in need.
                  </p>
                  <p>
                    For every $1 donated to the foodbank, they are able to provide 4 meals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Community;
