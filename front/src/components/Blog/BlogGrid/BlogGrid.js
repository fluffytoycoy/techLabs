import * as React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from 'react-router-dom';
import {createUrlSlug} from '../../Utils/UrlHandlers/UrlHandlers';
import PropTypes from 'prop-types';

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
      if(window.innerWidth < 768 && this.state.width >= 768){
        this.setState({rightCol:[]})
      }
      else if(window.innerWidth >= 768 && this.state.width < 768){
        this.setState({rightCol: this.state.leftCol})
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
      if (nextProps.currentCategory !== state.currentCategory) {
        return getChildElements(nextProps)
      }

      return null;

      function getChildElements(props) {
        let total = 1;
        let leftCol = [];
        let rightCol = [];
        props.elements.forEach((element) => {
          if (isSelectedCategory(element)) {
            if (total % 2) {
              total++;
              leftCol.push(element);
            } else {
              total++;
              rightCol.push(element);
            }
          }
        })
        return {
          leftCol,
          rightCol,
          currentCategory: props.currentCategory
        }
      }

    function isSelectedCategory(element) {
      return !nextProps.currentCategory || element.category.toLowerCase() === nextProps.currentCategory
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
