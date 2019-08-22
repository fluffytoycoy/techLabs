import React from 'react';
import './BlogLinks.scss';
import ScrollAnimation from 'react-animate-on-scroll';

function BlogLinks(){
  return(
    <section id="blog">
      <ScrollAnimation offset={50} animateOnce animateIn="fadeInDown"><div><h1>Blog</h1></div></ScrollAnimation>
      <section className="blog-grid">
          <ScrollAnimation offset={50} animateOnce animateIn="fadeInLeft"><div><div className="clouds"></div><h3>Data Manageable</h3></div></ScrollAnimation>
          <ScrollAnimation offset={50} animateOnce delay={100} animateIn="fadeInRight"><div><div className="data"></div><h3>The Secret Little Code</h3></div></ScrollAnimation>
      </section>
    </section>
  )
}

export default BlogLinks;
