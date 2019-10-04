import * as React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from 'react-router-dom';
import {createUrlSlug} from '../../Utils/UrlHandlers/UrlHandlers';
import PropTypes from 'prop-types';
import './BlogGrid.scss';

class BlogGrid extends React.Component {
    constructor(props){
      super(props);
      this.state={
        leftCol: [],
        midCol: [],
        rightCol: [],
        currentCategory: undefined,
        width: window.innerWidth
      }
    }

    updateDimensions = () => {

      //If we have elements
      if(this.props.elements){
        //To desktop from ipad
        //shift half of first 2 columns to thrid column
        if(window.innerWidth >= 1400 && this.state.width < 1400){
          let {leftCol, midCol, rightCol} = this.state;
          for(let i = 0; i < Math.floor(leftCol.length/2); i++){
            rightCol.push(leftCol.pop())
          }
          for(let i = 0; i < Math.floor(midCol.length/2); i++){
            rightCol.push(midCol.pop())
          }
          this.setState({midCol,leftCol,rightCol})
        }

        //To ipad from desktop
        //shift thrid column between first two
        else if(window.innerWidth < 1400 && this.state.width >= 1400){
          let {leftCol, midCol, rightCol} = this.state;
          let len = rightCol.length;
          for(let i = 0; i < len; i++){
            midCol.push(rightCol.pop())
            console.log(rightCol.length)
            if(rightCol.length){
              leftCol.push(rightCol.pop())
              i++;
            }
          }

        }
      }
      this.setState({
        width: window.innerWidth
      })
    };

    componentDidMount() {
      window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateDimensions);
    }

    static getDerivedStateFromProps(nextProps, state) {
      console.log(nextProps)
      if(nextProps.elements){
        if (nextProps.currentCategory !== state.currentCategory) {
          return getChildElements(nextProps)
        }
      }

      return null;

      function getChildElements(props) {
        if(state.width > 1400){
          return columns(props, 3);
        }else{
          return columns(props, 2);
        }

        function columns(props, columns){
          let total = 1;
          let leftCol = [];
          let midCol = [];
          let rightCol = [];
          if(columns === 3){
            props.elements.forEach((element) => {
              if (isSelectedCategory(element)) {
                if(total % 3 === 0){
                  total++;
                  rightCol.push(element);
                }
                else if (total % 2 === 0) {
                  total++;
                  midCol.push(element);
                } else {
                  total++;
                  leftCol.push(element);
                }
              }
            })
          }
          else{
            props.elements.forEach((element) => {
              if (isSelectedCategory(element)) {
                if (total % 2 === 0) {
                  total++;
                  midCol.push(element);
                } else {
                  total++;
                  leftCol.push(element);
                }
              }
            })
          }

          return {leftCol, rightCol, midCol, currentCategory: props.currentCategory}
        }

        function isSelectedCategory(element) {
          return !nextProps.currentCategory || element.category.toLowerCase() === nextProps.currentCategory
        }
    }
  }

    renderCol = (elements)=>{
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
                {this.renderCol(this.state.midCol)}
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
