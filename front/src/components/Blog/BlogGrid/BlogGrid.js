import * as React from 'react';
import Masonry from 'react-masonry-component';
import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from 'react-router-dom';
import {createUrlSlug} from '../../Utils/UrlHandlers/UrlHandlers';
import PropTypes from 'prop-types';

const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

class BlogGrid extends React.Component {
    constructor(props){
      super(props);
      this.state={
        leftCol: [],
        rightCol: [],
        currentCategory: undefined
      }
    }

    static getDerivedStateFromProps(nextProps, state) {
      console.log(nextProps)
      
      console.log(nextProps.currentCategory !== state.currentCategory)
      if(nextProps.currentCategory !== state.currentCategory){
        return getChildElements(nextProps)
      }

      return null;

      function getChildElements(props){
        let total = 1;
        let leftCol = [];
        let rightCol = [];
        props.elements.filter((element)=>{
          if(isSelectedCategory(element)){
            if(total % 2){
              total++;
              leftCol.push(element);
            }else{
              total++;
              rightCol.push(element);
            }
          }
        })
        console.log(leftCol)
        return {leftCol, rightCol}
      }

      function isSelectedCategory(element){
        return !nextProps.currentCategory || element.category.toLowerCase() === nextProps.currentCategory
      }

    }

    renderCol = (elements)=>{
      console.log(elements)
      return elements.map((element, i)=>{
        return(
          <li key={i} className="card">
            <ScrollAnimation animateOnce animateIn="fadeInUp">
              <div>
                <img alt={element.title} src={element.src} />
                <Link to={`/Blog/Article/${createUrlSlug(element.title)}`}><h4>{element.title}</h4></Link>
                <p>{element.description}</p>
              </div>
           </ScrollAnimation>
         </li>)
      })

    }

    render(props) {
        return (
            <div className="col-wrapper">
              <ul>
                {this.renderCol(this.state.leftCol)}
              </ul>
              <ul>
                {this.renderCol(this.state.rightCol)}
              </ul>
            </div>
        );
    }
}

BlogGrid.propTypes = {
  currentCategory: PropTypes.string,
  elements: PropTypes.array
};

export default BlogGrid;
