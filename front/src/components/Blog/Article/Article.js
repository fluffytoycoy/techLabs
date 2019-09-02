import React, {Component} from 'react';
import {parseUrl} from '../../Utils/UrlHandlers/UrlHandlers';
import './Article.scss';

class Article extends Component{
  constructor(props){
    super(props);
    this.state={
      blog: this.blogExists()
    }
  }

  blogExists(){
    console.log(this.props)
    const blogExists = this.props.blogList.filter(blog=>{
      return blog.title.toLowerCase() === parseUrl(this.props.blogId)
    })[0]
    if(blogExists){
      console.log(blogExists)
      return blogExists
    }else{
      console.log('gone back')
      this.props.history.goBack();
    }
  }

  componentDidMount(){
    console.log(this.state.blog)
  }

  render(){

    return (
      <div id="article">
{        this.state.blog ? <div>
            <h4>{this.state.blog.title}</h4>
            <p>By: {this.state.blog.author}</p>
            <img  alt={this.state.blog.title} src={this.state.blog.src} />
            <div className="article-body">
              <p>
                Lorem ipsum dolor amet godard artisan shoreditch kinfolk cliche
                gluten-free ethical blog whatever hexagon williamsburg squid organic
                glossier. Art party meditation marfa post-ironic, air plant forage
                direct trade neutra actually pitchfork man braid drinking vinegar raclette
                8-bit wolf. Hella schlitz authentic messenger bag master cleanse asymmetrical.
                Semiotics whatever blog yuccie 8-bit wolf lo-fi gluten-free, seitan pour-over lyft.
                Kombucha shoreditch succulents, tilde roof party forage plaid. Banjo 90's health
                goth chambray, freegan hell of raclette small batch hot chicken deep v man braid.
              </p>
              <p>
                Intelligentsia helvetica lo-fi ramps, master cleanse plaid brooklyn vaporware waistcoat.
                Helvetica retro subway tile, vape narwhal cornhole migas pickled cloud bread organic chartreuse
                taiyaki occupy bitters affogato. Knausgaard street art hexagon whatever four loko pitchfork hell
                of farm-to-table bespoke copper mug beard wolf. Whatever bicycle rights woke YOLO readymade
                raw denim art party, tofu humblebrag palo santo cloud bread. Tumblr skateboard pok pok subway
                tile tilde edison bulb, flannel gentrify chambray small batch.
              </p>
              <p>
                Seitan cliche four dollar toast, scenester butcher mumblecore heirloom before they sold out.
                Truffaut pok pok fanny pack pinterest church-key salvia four dollar toast pork belly taxidermy
                tumeric glossier. Authentic meggings man bun paleo. Raw denim pour-over portland iceland, squid
                crucifix godard. Biodiesel sartorial knausgaard, pickled keffiyeh waistcoat craft beer humblebrag
                kitsch cardigan everyday carry iceland plaid vinyl. Palo santo vegan occupy sartorial,
                gluten-free tattooed vape etsy thundercats selfies migas. Tousled asymmetrical kinfolk squid
                fam vice small batch vinyl roof party.
              </p>
            </div>
        </div>
      :
    <>test</>}
      </div>

    );
  }

}

export default Article;