import React from 'react';
import {Link} from 'react-router-dom';
import {createUrlSlug} from '../../Utils/UrlHandlers/UrlHandlers';

function SidebarBlog(props){
  return (
    <div  className="blog-extra">
      <h5>{props.blog.title}</h5>
      <img alt={props.blog.title} src={props.blog.src}/>
      <p>{props.blog.description}</p>
      <Link to={`/Blog/Article/${createUrlSlug(props.blog.title)}`}>Read More</Link>
    </div>
  )
}

export default SidebarBlog;
