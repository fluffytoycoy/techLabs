import React from 'react';
import {Link} from 'react-router-dom';
import './Home.scss';

function Home(){
    return (
      <div id="home">
        <section id="hero">
          <div className="jumbo">
            <h1>modern software</h1>
            <h1>data solutions</h1>
            <h1>innovation </h1>
          </div>
          <div className="grid">
            <div className="clouds"></div>
            <div className="data"></div>
            <div className="science"></div>
            <div className="community"></div>
          </div>
        </section>
      </div>
    );
}

export default Home;
