import React, {Component} from 'react';
import BlogGrid from './BlogGrid/BlogGrid';
import BlogSidebar from './BlogGrid/BlogSidebar';
import Article from './Article/Article';
import {parseUrl} from '../Utils/UrlHandlers/UrlHandlers';
import Jumbo from '../Utils/Layouts/Jumbo';
import './Blog.scss';

class Blog extends Component{
  constructor(props){
    super(props);
    this.state={
      categories: ['data engineering','agile','news','resource','culture','case study'],
      currentCategory: parseUrl(this.props.match.params.category),
    }
  }

  componentDidMount(){
    console.log(parseUrl(this.props.match.params.category))
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(prevState.currentCategory !== nextProps.match.params.category){
      return ({currentCategory: parseUrl(nextProps.match.params.category)});
    }
    return null;
  }

  isPost(){
    return this.props.match.params.blogId ? 'post' : '';
  }

  render(props){
    const hero = {
      title:'Blog',
    }
    return (
      <div id="root-link">
      <Jumbo
        title={hero.title}/>
        <div className="service-body blog-wrapper">
          <section className="blog">
            <div>
              <div className="blog-grid">
                {this.props.match.params.blogId ? <Article blogId={this.props.match.params.blogId} blogList={this.props.blogs}/> :
                  <BlogGrid currentCategory={this.state.currentCategory} elements={this.props.blogs}/>
                }
              </div>
              <div className="sidebar">
                <BlogSidebar {...this.props} currentCategory={this.state.currentCategory} categories={this.state.categories}/>
              </div>
            </div>
          </section>
        </div>
      </div>

    );
  }

}

export default Blog;
