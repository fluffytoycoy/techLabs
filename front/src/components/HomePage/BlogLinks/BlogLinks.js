import React from 'react';
import './BlogLinks.scss';
import {Link} from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

function BlogLinks(){
  return(
    <section id="blog">
      <ScrollAnimation offset={50} animateOnce animateIn="fadeInDown"><div><h1>Why choose us?</h1></div></ScrollAnimation>
      <section className="blog-grid">
          <ScrollAnimation offset={50} animateOnce delay={100} animateIn="fadeInRight"><Link to="/Blog/Article/Modernize-Data-Management"><div><div className="data"></div><h3>Modernize Data Management</h3></div></Link></ScrollAnimation>
      </section>
    </section>
  )
}

export default BlogLinks;
