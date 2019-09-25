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
      categories: ['data engineering','agile','news','resource','culture','case study'],
      currentCategory: parseUrl(this.props.match.params.category),
    }
  }

  componentDidMount() {
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(prevState.currentCategory !== nextProps.match.params.category){
      return ({currentCategory: parseUrl(nextProps.match.params.category)});
    }
    return null;
  }

  render(props){
    console.log(this.props.blogs)
    return (
      <div id="root-link">
        <div className={`jumbo services`}>
          <h1>Blog</h1>
        </div>
        <div className="service-body blog-wrapper">
          <section className="blog">
            <div className="blog-grid">
              {this.props.match.params.blogId ? <Article blogId={this.props.match.params.blogId} blogList={this.props.blogs}/> :
                <BlogGrid currentCategory={this.state.currentCategory} elements={this.props.blogs}/>
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
