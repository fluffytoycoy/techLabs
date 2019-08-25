import * as React from 'react';
import {createUrlSlug} from '../Utils/UrlHandlers/UrlHandlers';

class BlogGrid extends React.Component {

    handleClick(category){
      this.props.history.push(`/Blog/Category/${createUrlSlug(category)}`)
    }

    componentDidMount(){
      //If category url isn't a category push back to all blogs
      const catUrl = this.props.categories.filter(cat=>{
        return cat === this.props.currentCategory
      })[0]
      if(!catUrl){
        this.props.history.push('/Blog')
      }
    }

    render(props) {
        const childElements = this.props.categories.map((element)=>{
           return (
                <li  className={`${element === this.props.currentCategory ? 'selected ' : ''}image-element-class`}>
                    <p  onClick={()=>{this.handleClick(element)}}>
                      {element}
                    </p>
                </li>
            );
        });

        return (
            <div>
              <h4>Categories</h4>
                <ul>
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
