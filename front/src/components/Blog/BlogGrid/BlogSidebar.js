import * as React from 'react';
import {createUrlSlug} from '../../Utils/UrlHandlers/UrlHandlers';

class BlogGrid extends React.Component {
    constructor(props){
      super(props);
      this.state={
        menuOpen: false
      }
      this.toggleMenu = this.toggleMenu.bind(this)
    }
    handleClick(category){
      this.props.history.push(`/Blog/Category/${createUrlSlug(category)}`)
    }

    toggleMenu(){
      this.setState({
        menuOpen: !this.state.menuOpen
      })
    }

    componentDidMount(){
      //If category url isn't a category push back to all blogs
      if(this.props.currentCategory){
        const catUrl = this.props.categories.filter(cat=>{
          return cat === this.props.currentCategory
        })[0]
        if(!catUrl){
          this.props.history.push('/Blog')
        }
      }

    }

    render(props) {
        const childElements = this.props.categories.map((element, i)=>{
           return (
                <li  key={i} className={`${element === this.props.currentCategory ? 'selected ' : ''}image-element-class`}>
                    <p  onClick={()=>{this.handleClick(element)}}>
                      {element}
                    </p>
                </li>
            );
        });

        return (
            <div>
              <h4 onClick={this.toggleMenu}>Categories<i className="fas fa-chevron-down"></i></h4>
                <ul className={`${this.state.menuOpen ? 'open' : ''}`}>
                  <li className="image-element-class">
                    <p  onClick={()=>{this.handleClick('')}}>all </p>
                  </li>
                  {childElements}
                </ul>
            </div>
        );
    }
}

export default BlogGrid;
