import React from 'react';
import './Info.scss';

function Info(){
  return(
    <section className="info">
      <div className="info-wrapper">
        <div>
          <div className="icon"><i class="fas fa-laptop-code"></i></div>
          <div>
            <h2>modern software</h2>
            <p>We modernize legacy platforms and transform them to meet the demands of today's digital world.</p>
          </div>
        </div>
        <div>
        <div className="icon"><i class="fas fa-server"></i></div>
          <div>
            <h2>data solutions</h2>
            <p>We Leverage data and web technology to enhance and optimized user experiences.</p>
          </div>
        </div>
        <div>
        <div className="icon"><i class="far fa-lightbulb"></i></div>
          <div>
            <h2>Innovation</h2>
            <p>Simply put we solve problems and save you money</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info;
