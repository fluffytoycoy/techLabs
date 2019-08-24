import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import Button from '@material-ui/core/Button';
import BlogGrid from './BlogGrid';
import './Blog.scss';

class Blog extends Component{
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
          <h1>Blog</h1>
        </div>
        <div className="service-body">
          <section className="blog">
            <div className="blog-grid">
              <BlogGrid elements={[{src: '/img/HeroSquares/data.jpg'},{src: 'https://www.placecage.com/gif/500/300'}, {src: 'https://www.placecage.com/200/300'}, {src: 'https://www.placecage.com/300/300'}, {src: 'https://www.placecage.com/300/200'}, {src: 'https://www.placecage.com/gif/200/300'}]}/>

            </div>
            <div className="sidebar">
            </div>
          </section>
        </div>
      </div>

    );
  }

}

export default Blog;
