import React, {Component} from 'react';

function MoreBlogSidebar(props){
  return (
    <div key={props.key} className="blog-extra">
      <h5>{props.blog.title}</h5>
      <img src={props.blog.src}/>
    </div>
  )
}

export default MoreBlogSidebar;
