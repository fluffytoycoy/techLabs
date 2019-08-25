import React, {Component} from 'react';
import {parseUrl} from '../Utils/UrlHandlers/UrlHandlers';
import './Blog.scss';

class Article extends Component{
  constructor(props){
    super(props);
    this.state={
      blog: this.blogExists()
    }
  }

  blogExists(){
    const blogExists = this.props.blogList.filter(blog=>{
      return blog.title.toLowerCase() === parseUrl(this.props.blogId)
    })[0]
    if(blogExists){
      console.log(blogExists)
      return blogExists
    }else{
      this.props.history.goBack();
    }
  }

  componentDidMount(){
    console.log(this.state.blog)
  }

  render(){

    return (
      <div id="root-link">
{        this.state.blog ? <div>
            <h4>{this.state.blog.title}</h4>
            <img  alt={this.state.blog.title} src={this.state.blog.src} />
            <p>{this.state.blog.description}</p>
        </div>
      :
    <>test</>}
      </div>

    );
  }

}

export default Article;
