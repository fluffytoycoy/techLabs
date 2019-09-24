import React from 'react';

function Cloud(){
  const test =           <div className="corner-icon">
              <img alt="clip art cloud" src="/img/Logos/cloud_icon.svg"/>
            </div>
    return (
      <div id="root-link">
        <div className={`jumbo cloud`}>

          <h1>Cloud</h1>
        </div>
        <div className="service-body">
          <div className="body-wrapper">
            <div className="title">
              <div>
                <h2>Cloud Application Development</h2>
                <p>We revolutionize the way applications are designed, built, and
                managed by starting with users and then creating modern cloud-based
                solutions that align to their needs. We are focused on developing
                software with improved time to market, flexibility, and cost savings in
                 an iterative, repeatable fashion.</p>
               </div>
            </div>
            <div className="selections">
              <div className="selection-wrapper">
                <div>
                  <div className="icon">
                    <img alt="cloud clipart" src="/img/Logos/cloud_data.png"/>
                  </div>
                  <div className="info">
                    <h3>Cloud Native Refactoring</h3>
                    <p>
                      In this offering we come alongside companies that have an application or applications they want to move to the cloud.
                      This is the typical monolithic-to-microservices transition.It involves provisioning cloud-based assets, building APIs,
                      creating front-ends, ensuring security and logging, and containerizing any primary services that the application might
                      need.
                    </p>
                    <p>
                      Our teams provide a roadmap for transitioning an organization’s legacy applications onto a cloud native infrastructure.
                      This transition may or may not include running co-located with the legacy application and maintaining operations while
                       the newly-created assets are deployed.
                     </p>
                  </div>
                </div>
                <div className="reverse">
                  <div className="icon">
                    <img alt="cloud clipart" src="/img/Logos/cloud_dev.png"/>
                  </div>
                  <div className="info">
                    <h3>Cloud-Based Development</h3>
                    <p>
                      This is green field development in which we partner with an organization to help them accomplish their application
                      development requirements. We use continuous integration, test driven development, human centered design,
                      microservices, container based deployments, logging, service discovery, caching, etc.
                    </p>
                    <p>
                        We embrace agile in everything we do and we are cloud first in our thinking. We know how to deploy across multiple
                        cloud providers including AWS, Google Compute, and Azure. We can use internally-provisioned hardware and solutions as
                        well. We think in patterns and templates to help you go from concept to cloud-based application in record time.
                     </p>
                  </div>
                </div>
                <div>
                  <div className="icon">
                    <img alt="cloud clipart" src="/img/Logos/robot_person.png"/>
                  </div>
                  <div className="info">
                    <h3>Hybrid Cloud Solutions</h3>
                    <p>
                      This combines legacy Cloud Native Refactoring with new Cloud-Based Development. In certain
                      circumstances organizations may not be ready to shut down existing services because of their breadth of reach through
                      an organization or previous investment. In the Hybrid option we will seek to understand the existing utilization of assets and build services that
                       compliment them and increase their capability.
                     </p>
                     <p>
                      This approach honors previous investment while addressing the current
                      reality that there are economies of scale as well as cost savings with moving toward a cloud based architecture and
                      infrastructure. We bring the best of Cloud Native Refactoring along with our abilities in Cloud-Based Application
                      Development.
                      </p>
                  </div>
                </div>
                <div className="reverse">
                  <div className="icon">
                    <img alt="cloud clipart" src="/img/Logos/research.png"/>
                  </div>
                  <div className="info">
                    <h3>Research and Development Strategy</h3>
                    <p>
                    The focus of this is Research and Development as well as Strategy and Roadmap Formation.
                    It can be an added on to any of the above offerings. We bring a team and all of our knowledge in Cloud-Based Application Development.
                    We research tools and technologies and leave behind a trail based on current and previous development experience. </p>
                    <p>In this offering the team deliberately looks beyond the end of the current contract providing a plan for the future aligned with the goals of the organization. Research and Development can be combined with our discovery process and it can be used as a leader into any of the other offerings. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Cloud;
