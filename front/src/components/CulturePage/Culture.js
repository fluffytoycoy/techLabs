import React, {Component} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import CultureCarousel from './CultureCarousel/CultureCarousel'

class Culture extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }

  componentDidMount(){
    this.scrollTo();
  }

  componentDidUpdate(prevProps) {
    this.scrollTo();
  }

  scrollTo(){
    if(this.props.location.hash){
      setTimeout(() => {
      const id = this.props.location.hash.replace('#','');
      console.log(id)
      const element = document.getElementById(id);
      console.log(element)
      if (element){

        element.scrollIntoView({behavior: "smooth", scroll: true});
      }
         }, 0);
    }
  }

  render(){
    return (
      <div id="root-link">
        <div className={`jumbo services`}>
          <h1>Culture</h1>
        </div>
        <div className="service-body">
          <div className="body-wrapper">
            <div className="title">
              <div>
                <h2>Empowering our teams to achieve anything</h2>
                <p>We know and respect the value of our team members, which is why we’ve created a
                culture that allows all our employees to thrive, grow and most importantly, feel
                fulfilled and part of something greater.</p>
              </div>
            </div>
            <div className="selections">
              <div className="selection-wrapper">
                <div>
                  <div className="info no-img">
                  <h3>An enjoyable working environment for our team and clients</h3>
                  <p>The success and happiness of our team is equally important to us as it is to our clients.</p>
                  <p>Our Decision Science practice focuses on enabling clients to derive insights from their data that
                  facilitate data-based decision making.</p> <p>We work with clients during problem discovery to identify issues
                  that could be solved with data. Next, we help identify their data needs and assist in building data collection
                  steams.</p>
                  </div>
                </div>
                <div>
                  <div className="info no-img">
                  <ul className="grid-50 wrap">
                    <li>
                      <ScrollAnimation offset={50} animateOnce animateIn="fadeInLeft"><h3>Great Working Environment</h3></ScrollAnimation>
                      <ScrollAnimation animateOnce animateIn="fadeIn">
                        <p>
                          We work hard and play hard. From snacks in the office and the CIC cafe, to ping pong, foosball,
                          and games in the lounge, we pride ourselves on being a great place to work! Regular speakers plus
                          lunch-and-learn sessions help broaden your horizons. Our team members are not only given the opportunity
                          to participate; they are given a forum to lead these learning sessions as well.
                        </p>
                      </ScrollAnimation>
                    </li>
                    <li>
                      <ScrollAnimation offset={50} animateOnce animateIn="fadeInLeft"><h3>Innovation Hours</h3></ScrollAnimation>
                      <ScrollAnimation  animateOnce animateIn="fadeIn">
                        <p>
                          Exploring passions makes employees more productive, happier and well rounded – all while fostering individual
                          ideas. That’s why we allow 10% of your time to be devoted to innovation hours. This time can be used to foster
                          individual ideas, personal projects, startup ideas, improve an open source tool or for career advancement
                          self-education. All during traditional working hours.
                        </p>
                      </ScrollAnimation>
                    </li>
                    <li>
                      <ScrollAnimation offset={50} animateOnce animateIn="fadeInLeft"><h3>Career Development</h3></ScrollAnimation>
                      <ScrollAnimation  animateOnce animateIn="fadeIn">
                        <p>
                            We aren’t just employers – we’re career partners. We help you build your career along the path that fits your passions.
                            We have regular one-on-one sessions and work with you to develop a skills-based track that lets you grow your career along
                            the path to meet your professional objectives.
                        </p>
                      </ScrollAnimation>
                    </li>
                    <li>
                      <ScrollAnimation offset={50} animateOnce animateIn="fadeInLeft"><h3>Competitive Benefits</h3></ScrollAnimation>
                      <ScrollAnimation  animateOnce animateIn="fadeIn">
                        <p>
                          <span>Life is busy, and work is only one piece of it. That’s why we believe in compensating our employees competitively while offering
                          flexible hours – allowing you to live a productive and healthy life outside of work. We also surround our employees with cutting-edge
                           technology in a collaborative space.</span>
                        </p>
                      </ScrollAnimation>
                    </li>
                  </ul>
                  </div>
              </div>
              </div>
            </div>
            <CultureCarousel/>
            <div className="selections">
              <div className="selection-wrapper">
                <div>
                  <div className="info no-img">
                  <h3>Clients Are Our Cornerstone</h3>
                    <p>We are committed to providing our clients a level of service that exceeds their expectations.
                    As such, we will only provide services in alignment with our areas of expertise. We will deliver all
                    work at the highest level of quality possible.</p>
                  </div>
                </div>
                <div>
                  <div className="info no-img">
                  <ul className="grid-50 wrap">
                    <li>
                      <ScrollAnimation offset={50} animateOnce animateIn="fadeInLeft"><h3>The Foundation</h3></ScrollAnimation>
                      <ScrollAnimation  animateOnce animateIn="fadeIn">
                      <p>
                        We value people skills and technical skills equally. As such, we are committed to providing each team member
                        with opportunities that will allow them to develop their people and technical skills while working at 1904labs.
                        We will foster a company culture that encourages team members to collaborate effectively with each other and be
                        open to learning from each other.
                      </p>
                      </ScrollAnimation>
                    </li>
                    <li>
                      <ScrollAnimation offset={50} animateOnce animateIn="fadeInLeft"><h3>Cloud-Native Software</h3></ScrollAnimation>
                      <ScrollAnimation  animateOnce animateIn="fadeIn">
                      <p>
                        Today, software must scale in various cloud environments and meet different business requirements. We value modern,
                         cloud-native architectural tools and scalable software. We think software must be built from the beginning with
                         the cloud in mind.
                      </p>
                      </ScrollAnimation>
                    </li>
                    <li>
                      <ScrollAnimation offset={50} animateOnce animateIn="fadeInLeft"><h3>Agile</h3></ScrollAnimation>
                      <ScrollAnimation  animateOnce animateIn="fadeIn">
                      <p>
                        We use Agile Development practices such as Scrum, Kanban, and XP when appropriate to deliver intuitive and
                        effective software and data solutions.
                      </p>
                      </ScrollAnimation>
                    </li>
                    <li>
                      <ScrollAnimation offset={50} animateOnce animateIn="fadeInLeft"><h3>Work/Life Balance</h3></ScrollAnimation>
                      <ScrollAnimation  offset={50} animateOnce animateIn="fadeIn">
                      <p>
                          We understand that our team members work so that they can live and not the other way around.
                          We are committed to our team members having an appropriate balance between work and personal commitments.
                          Our goal is to do work for our clients that aligns with our areas of focus and is deliverable with reasonable
                          effort by our team members.
                      </p>
                      </ScrollAnimation>
                    </li>
                  </ul>
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

export default Culture;
