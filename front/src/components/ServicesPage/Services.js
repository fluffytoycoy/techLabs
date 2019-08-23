import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import Button from '@material-ui/core/Button';
import './Services.scss';

class Services extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }






  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props.location.pathname === nextProps.location.pathname)
    if(this.props.location.pathname === nextProps.location.pathname)
      return false;
    return true;
  }

  render(){
    return (
      <div id="root-link">
        <div className={`jumbo services`}>
          <h1>Services</h1>
        </div>
        <div className="service-body">
          <div className="body-wrapper">
            <div className="title">
              <h2>Designing and delivering specialized software solutions</h2>
              <p>Companies today need specialized software solutions to maintain a competitive advantage.
              Users expect more both in functionality and usability from the software.
              Having access to software developers that understand both the right software technologies
              and the end user’s requirements can be a challenge for companies. We solve this problem.</p>
            </div>
            <div className="selection-body">
              <div>
                <div className="icon">
                  <img src="/img/science_icon.svg"/>
                </div>
                <div className="info">
                  <Link to="/Services/Decision-Science"><h3>Decision Science</h3></Link>
                  <p>Our Decision Science practice focuses on enabling clients to derive insights from their data that
                  facilitate data-based decision making. We work with clients during problem discovery to identify issues
                  that could be solved with data. Next, we help identify their data needs and assist in building data collection
                  steams.</p>
                </div>
              </div>
              <div>
                <div className="icon">
                  <img src="/img/data_icon.svg"/>
                </div>
                <div className="info">
                  <Link to="/Services/Data-Engineering"><h3>Data Engineering</h3></Link>
                  <p>
                     Our Data Engineering practice is focused on developing highly efficient, distributed and easily customizable data solutions.
                     We focus on streaming and batch data pipelines, in transit data enrichment and standardization, data modeling and storage, data
                     governance and data access. We are motivated by our desire to transform businesses into data driven enterprises.
                   </p>
                </div>
              </div>
              <div>
                <div className="icon">
                  <img src="/img/cloud_icon.svg"/>
                </div>
                <div className="info">
                  <Link to="Services/Cloud"><h3>Cloud</h3></Link>
                  <p>
                      We revolutionize the way applications are designed, built, and managed. Starting with users and then creating modern cloud
                      based solutions that align to their needs. We manage delivery using an agile process that was developed in
                      by our full-stack engineers to help us stay focused on the right solutions to your toughest engineering problems.
                  </p>
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
