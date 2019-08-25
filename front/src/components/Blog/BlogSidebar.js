import * as React from 'react';

class BlogGrid extends React.Component {
    render() {
        console.log(this.props)
        const childElements = this.props.categories.map((element)=>{
           return (
                <li className="image-element-class">
                    <p className={`${element === this.props.currentCategory ? 'selected' : ''}`}>
                      {element}
                    </p>
                </li>
            );
        });

        return (
            <>
              <h4>Categories</h4>
              <ul>
                {childElements}
              </ul>
            </>
        );
    }
}

export default BlogGrid;
