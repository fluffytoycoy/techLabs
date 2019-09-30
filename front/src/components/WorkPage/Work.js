import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {createUrlSlug} from '../Utils/UrlHandlers/UrlHandlers';
import Jumbo from '../Utils/Layouts/Jumbo';

class Services extends Component{

  animationStyle={
    display: 'flex',
    justifyContent: 'flex-end'
  }

  renderCaseStudies =  () =>{
    let caseStudies = [];
    let index = 0;
    if(this.props.blogs.length){
      while(index < this.props.blogs.length){
        const item = this.props.blogs[index];
        if(item.category === 'case study'){
              caseStudies.push(
                <div className="reverse" key={index}>
                <div className="icon">
                  <img alt="empty field" src={item.src}/>
                </div>
                <div className="info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Link to={`/Blog/Article/${createUrlSlug(item.title)}`}><Button variant="outlined">Read More</Button></Link>
                </div>
              </div>
            );
        }
        index++;
    }
  }
  return caseStudies;
}


  render(){
    const hero = {
      title:'Our Work',
      subTitle:'Building the Right Thing the Right Way',
      info:'In other words: We solve the right problem and make sure the solution we build works the way users want it to work and need it to work',
    }
    return (
      <div id="root-link">
        <Jumbo
          title={hero.title}
          subTitle={hero.subTitle}
          info={hero.info} />
        <div className="service-body">
          <div className="body-wrapper">
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
                {this.renderCaseStudies()}

              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }

}

export default Services;
