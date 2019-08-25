import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import Button from '@material-ui/core/Button';
import BlogGrid from './BlogGrid';
import BlogSidebar from './BlogSidebar';
import './Blog.scss';

class Blog extends Component{
  constructor(props){
    super(props);
    this.state={
      categories: ['Data Engineering','Agile','News','Resource','Culture','Community'],
      currentCategory: 'Data Engineering',
    }
    this.setSelectedCategory = this.setSelectedCategory.bind(this);
  }

  blogs=[{
    src: 'https://www.placecage.com/gif/500/300',
    title: 'Modernize Data Management',
    category: 'Data Engineering',
    description: 'How can large companies use automation to modernize the ways they manage data? That question was a key focus of my recent presentation at the Gateway to Innovation conference in St. Louis about a project 1904labs completed with Charter. Joined by Jonathan Andrews'
  },{
    src: 'https://www.placecage.com/gif/500/500',
    title: 'Modernize Data Management',
    category: 'Agile',
    description: 'How can large companies use automation to modernize the ways they manage data? That question was a key focus of my recent presentation at the Gateway to Innovation conference in St. Louis about a project 1904labs completed with Charter. Joined by Jonathan Andrews'
  },{
    src: 'https://www.placecage.com/gif/400/300',
    title: 'Modernize Data Management',
    category: 'Agile',
    description: 'How can large companies use automation to modernize the ways they manage data? That question was a key focus of my recent presentation at the Gateway to Innovation conference in St. Louis about a project 1904labs completed with Charter. Joined by Jonathan Andrews'
  },{
    src: 'https://www.placecage.com/gif/300/300',
    title: 'News',
    description: 'St. Louis about a project 1904labs completed with Charter. Joined by Jonathan Andrews'
  },{
    src: 'https://www.placecage.com/gif/500/300',
    title: 'Resource',
    description: 'That question was a key focus of my recent presentation at the Gateway to Innovation conference in St. Louis about a project 1904labs completed with Charter. Joined by Jonathan Andrews'
  },
]


  setSelectedCategory(){

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
              <BlogGrid currentCategory={this.state.currentCategory} elements={this.blogs}/>
            </div>
            <div className="sidebar">
              <BlogSidebar currentCategory={this.state.currentCategory} categories={this.state.categories}/>
            </div>
          </section>
        </div>
      </div>

    );
  }

}

export default Blog;
