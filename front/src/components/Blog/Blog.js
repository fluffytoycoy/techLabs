import React, {Component} from 'react';
import BlogGrid from './BlogGrid';
import BlogSidebar from './BlogSidebar';
import Article from './Article/Article';
import {parseUrl} from '../Utils/UrlHandlers/UrlHandlers';
import './Blog.scss';

class Blog extends Component{
  constructor(props){
    super(props);
    this.state={
      categories: ['data engineering','agile','news','resource','culture','community'],
      currentCategory: parseUrl(this.props.match.params.category),
    }
  }

  componentDidMount() {
  }

  blogs=[
    {
    src: 'https://www.placecage.com/gif/500/300',
    title: 'Modernize Data Management',
    category: 'data engineering',
    description: 'How can large companies use automation to modernize the ways they manage data? That question was a key focus of my recent presentation at the Gateway to Innovation conference in St. Louis about a project 1904labs completed with Charter. Joined by Jonathan Andrews',
    author: "Matt Coy"
  },{
    src: 'https://www.placecage.com/gif/500/500',
    title: 'Agile Data Management',
    category: 'agile',
    author: "Matt Coy",
    description: 'How can large companies use automation to modernize the ways they manage data? That question was a key focus of my recent presentation at the Gateway to Innovation conference in St. Louis about a project 1904labs completed with Charter. Joined by Jonathan Andrews'
  },{
    src: 'https://www.placecage.com/gif/400/300',
    title: 'Agile Testing',
    category: 'agile',
    author: "Matt Coy",
    description: 'How can large companies use automation to modernize the ways they manage data? That question was a key focus of my recent presentation at the Gateway to Innovation conference in St. Louis about a project 1904labs completed with Charter. Joined by Jonathan Andrews'
  },{
    src: 'https://www.placecage.com/gif/300/300',
    title: 'News',
    category: 'news',
    author: "Rob Cage",
    description: 'St. Louis about a project 1904labs completed with Charter. Joined by Jonathan Andrews'
  },
  {
    src: 'https://www.placecage.com/gif/500/300',
    title: 'Cage it up',
    category: 'culture',
    author: "Nick Coy",
    description: 'How can large companies use automation to modernize the ways they manage data? That question was a key focus of my recent presentation at the Gateway to Innovation conference in St. Louis about a project 1904labs completed with Charter. Joined by Jonathan Andrews'
  },{
    src: 'https://www.placecage.com/gif/500/300',
    title: 'New Resources',
    category: 'resource',
    author: "Joe Ukee",
    description: 'That question was a key focus of my recent presentation at the Gateway to Innovation conference in St. Louis about a project 1904labs completed with Charter. Joined by Jonathan Andrews'
  },
  {
    src: 'https://www.placecage.com/gif/400/300',
    title: 'Life Like Cage',
    category: 'culture',
    author: "Rob Cage",
    description: 'How can large companies use automation to modernize the ways they manage data? That question was a key focus of my recent presentation at the Gateway to Innovation conference in St. Louis about a project 1904labs completed with Charter. Joined by Jonathan Andrews'
  },
]

  static getDerivedStateFromProps(nextProps, prevState) {
    if(prevState.currentCategory !== nextProps.match.params.category){
      return ({currentCategory: parseUrl(nextProps.match.params.category)});
    }
    return null;
  }

  render(){
    return (
      <div id="root-link">
        <div className={`jumbo services`}>
          <h1>Blog</h1>
        </div>
        <div className="service-body blog-wrapper">
          <section className="blog">
            <div className="blog-grid">
              {this.props.match.params.blogId ? <Article blogId={this.props.match.params.blogId} blogList={this.blogs}/> :
                <BlogGrid currentCategory={this.state.currentCategory} elements={this.blogs}/>
              }
            </div>
            <div className="sidebar">
              <BlogSidebar {...this.props} currentCategory={this.state.currentCategory} categories={this.state.categories}/>
            </div>
          </section>
        </div>
      </div>

    );
  }

}

export default Blog;
