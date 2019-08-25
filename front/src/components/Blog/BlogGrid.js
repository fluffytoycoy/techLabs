import * as React from 'react';
import Masonry from 'react-masonry-component';
import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from 'react-router-dom';
import {createUrlSlug} from '../Utils/UrlHandlers/UrlHandlers';

const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

class BlogGrid extends React.Component {
  shouldComponentUpdate(){
    return true;
  }
    render(props) {
        const childElements = this.props.elements.filter((element)=>{
          return !this.props.currentCategory || element.category.toLowerCase() === this.props.currentCategory;
        }).map((element, i)=>{
          return (
               <li key={i} className="image-element-class">
                 <ScrollAnimation animateOnce animateIn="fadeInUp"><div>
                   <img alt={element.title} src={element.src} />
                   <Link to={`/Blog/Article/${createUrlSlug(element.title)}`}><h4>{element.title}</h4></Link>
                   <p>{element.description}</p>
                 </div></ScrollAnimation>
               </li>
           );
        });

        return (
            <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
              {childElements}

            </Masonry>
        );
    }
}

export default BlogGrid;
