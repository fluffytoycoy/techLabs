import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

function GridItem(props){

  const styles={
    background: `radial-gradient(circle, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.75) 90%) , url("${props.item.img}")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }

  return(
    <ScrollAnimation className="item" animateOnce animateIn="fadeInRight">
      <div style={styles}>
        <div className="hub-info">
            <div className="title">
            <img src="/img/Icons/up-arrows.svg"/>
              <h4>{props.item.title}</h4>
            </div>
            <div className="body">
            <p>{props.item.description}</p>
            <Link to="/#contact"><Button variant="outlined">Read More</Button></Link>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  )
}

export default GridItem;
