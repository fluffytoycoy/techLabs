import React from 'react';
import './Info.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import GridItem from './GridItem';

function Info(props){

  const hubItems = () =>{
    var blogPosts = [];
    if(props.blogs.length > 4){
      for(let i = 0; i < 4; i++){
        blogPosts.push(<GridItem item={props.blogs[i]} key={i}/>);
      }
    }else{
      for(let i = 0; i < props.blogs.length; i++){
        blogPosts.push(<GridItem item={props.blogs[i]} key={i}/>);
      }
    }
    return blogPosts;
  }


  return(
    <section id="info">
      <div className="info-wrapper">
      <ScrollAnimation className="grid-header" animateOnce animateIn="fadeInLeft">
        <div>
          <h3 title="The techHub">The techHub</h3>
        </div>
      </ScrollAnimation>
      {hubItems()}
      </div>
    </section>
  )
}

export default Info;
