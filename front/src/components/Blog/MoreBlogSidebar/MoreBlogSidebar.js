import React, {Component, useState, useEffect } from 'react';
import SidebarBlog from './SidebarBlog';
import './MoreBlogSidebar.scss';


const MoreBlogSidebar = React.memo(props =>{
  const [blogs, setBlogs] = useState(props.blogs);

  useEffect(() => {
     //set blogs on change of blogs prop
     setBlogs(props.blogs)
  }, [props.blogs]);

  const getMoreBlogs = () => {
    let blogList = [];
    if (blogs) {
      if (blogs.length <= 4) {
        blogList = blogs.filter(blog => {
          return blog.title != props.blog.title
        });
      } else {
        const getRandomBlog = randomNoRepeats(blogs);
        for (let i = 0; i < 3; i++) {
          let item = getRandomBlog();
          if (item.title == props.selectedBlog.title) {
            item = getRandomBlog();
          }
          blogList.push(item);
        }
      }
    }

    return blogList;

    function randomNoRepeats(array) {
      var copy = array.slice(0);
      return function() {
        var index = Math.floor(Math.random() * copy.length);
        var item = copy[index];
        copy.splice(index, 1);
        return item;
      };
    }
  }

  const blogLinks = getMoreBlogs().map((blog, index)=>{
    return <SidebarBlog key={index} blog={blog}/>
  })

  return (
    <div className="blog-sidebar">
      <div>
        <h4>More Blogs</h4>
        <div className="blog-wrap">
          {blogLinks}
        </div>
      </div>
    </div>
  )
});

export default MoreBlogSidebar;
