import * as React from 'react';
import {createUrlSlug} from '../Utils/UrlHandlers/UrlHandlers';

class BlogGrid extends React.Component {

    handleClick(category){
      this.props.history.push(`/Blog/Category/${createUrlSlug(category)}`)
    }

    componentDidMount(){
      if(this.props.categories.filter(cat=>{
        return cat === this.props.currentCategory
      })[0]){
        console.log('testing')
      }

    }

    render(props) {
        const childElements = this.props.categories.map((element)=>{
           return (
                <li className="image-element-class">
                    <p  onClick={()=>{this.handleClick(element)}} className={`${element === this.props.currentCategory ? 'selected' : ''}`}>
                      {element}
                    </p>
                </li>
            );
        });

        return (
            <>
              <h4>Categories</h4>
                <ul>
                  <li className="image-element-class">
                    <p  onClick={()=>{this.handleClick('')}}>all </p>
                  </li>
                  {childElements}
                </ul>
            </>
        );
    }
}

export default BlogGrid;
