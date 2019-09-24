import React, {Component} from 'react';

class Services extends Component{

  animationStyle={
    display: 'flex',
    justifyContent: 'flex-end'
  }



  render(){
    return (
      <div id="root-link">
        <div className={`jumbo services`}>
          <h1>Our Work</h1>
        </div>
        <div className="service-body">
          <div className="body-wrapper">
            <div className="title">
              <div>
                <h2>Building the Right Thing the Right Way</h2>
                <p style={{textAlign: 'center'}}>
                    In other words: We solve the right problem
                    and make sure the solution we build works the way users want it to work and need it to work
                </p>
              </div>
            </div>
            <div className="selections work">
              <div className="selection-wrapper">
                <div>
                  <div className="icon">
                    <img alt="people clipart" src="/img/Logos/people.png"/>
                  </div>
                  <div className="info">
                    <h3>Human-Centered Design Agile</h3>
                    <p>Our Agile process ensures that the specialized software solutions we design and
                    develop are useful and usable by intensely focusing on users, and designing around their wants and needs
                    at all stages of the development lifecycle.</p> <p>Human-Centered Design (HCD) Agile is a framework that
                    designs and develops products and solutions by involving the human perspective in all steps of the
                    process: observing the problem within context, conceptualizing, developing, testing, and implementing the solution..</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="selections">
              <div className="selection-wrapper">
                <div className="reverse">
                  <div className="icon">
                    <img alt="empty field" src="/img/HeroSquares/field.jpeg"/>
                  </div>
                  <div className="info">
                    <h3>Field Reporting Tools</h3>
                    <p>A multinational pharmaceutical and life sciences company endured tedious,
                    time-intensive processes to compare large sets of crop trial data. We combined reporting platforms into a single
                    solution that offered more powerful analytic capabilities and improved the overall user experience.</p>
                  </div>
                </div>
                <div className="reverse">
                  <div className="icon">
                    <img alt="monolithic stone" src="/img/HeroSquares/mono.jpg" />
                  </div>
                  <div className="info">
                    <h3>Breaking Monoliths</h3>
                    <p>A telecommunications client needed to scale its individual
                    applications and services independently and deliver to production faster
                    to provide greater business value.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }

}

export default Services;
