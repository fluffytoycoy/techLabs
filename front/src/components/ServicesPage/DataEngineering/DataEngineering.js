import React from 'react';

function DataEngineering(){

    return (
      <div id="root-link">
        <div className={`jumbo data`}>
          <div className="corner-icon">
            <img alt="could with gears" src="/img/Logos/data_icon.svg"/>
          </div>
          <h1 className="long-word">Data Engineering</h1>
        </div>
        <div className="service-body">
          <div className="body-wrapper">
            <div className="title">
              <div>
                <h2>Data-Driven Enterprises</h2>
                <p>We have a passion for open source technologies, strive to build cloud first applications,
                and are motivated by our desire to transform businesses into data-driven enterprises. Our Data
                Engineering practice is focused on developing highly performant, distributed, and easily customizable
                data solutions for: streaming and batch data pipelines, in transit data enrichment and standardization,
                data modeling and storage, data governance, and data access.</p>
              </div>
            </div>
            <div className="selections">
              <div className="selection-wrapper">
                <div className="reverse">
                  <div className="icon">
                    <img alt="Cloud with gears" src="/img/Logos/data_icon.svg"/>
                  </div>
                  <div className="info">
                    <h3>Data is an Asset</h3>
                    <p>Great data solutions can unlock the true potential of a business and transform them from prescriptive to predictive. As that happens, they are better able to service their customers, cut down on expenses and create a leaner, more efficient organization.</p>
                  </div>
                </div>
                <div>
                  <div className="info no-img">
                    <h3>Offerings and Capabilities</h3>
                    <ul>
                      <li><p>Streaming and microbatch data ingestion solutions using open source and distributed technologies</p></li>
                      <li><p>In transit data enrichment and standardization</p></li>
                      <li><p>Comprehensive data modeling</p></li>
                      <li><p>Data access and security solutions</p></li>
                      <li><p>Data governance solutions</p></li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="info no-img">
                    <h3>What will Data Engineering Do for You?</h3>
                    <ul className="grid-50 double">
                      <li>
                        <ul>
                          <li><p>Tailored Fit</p></li>
                          <li><p>Greater Transparency</p></li>
                          <li><p>Improved Predictability</p></li>
                          <li><p>Enhanced Flexibility</p></li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                        <li><p>Better Quality</p></li>
                        <li><p>Reduce Costs</p></li>
                        <li><p>Increase Revenue</p></li>
                        <li><p>Unify Data Source</p></li>
                        <li><p>Faster Time to Market</p></li>
                        </ul>
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

export default DataEngineering;
