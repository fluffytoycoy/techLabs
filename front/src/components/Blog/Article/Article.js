import React, { useState } from 'react';
import {parseUrl} from '../../Utils/UrlHandlers/UrlHandlers';
import MoreBlogSidebar from './MoreBlogSidebar/MoreBlogSidebar';
import './Article.scss';
import ShareFBBtn from '../../Utils/ShareButtons/ShareFBBtn';
import ShareTwitterBtn from '../../Utils/ShareButtons/ShareTwitterBtn';
import ShareEmailBtn from '../../Utils/ShareButtons/ShareEmailBtn';
import CopyLink from '../../Utils/ShareButtons/CopyLink';
import CopySnackbar from './CopySnackbar';

function Article(props){
  const [copied, setCopied] = useState(false);

  const parseSelectedBlog = ()=> {
    const blog = props.blogs.filter(blog => {
      return blog.title.toLowerCase() === parseUrl(props.selectedBlog)
    })[0]
    if (blog) {
      return blog
    } else {
      props.history.goBack();
    }
  }

    const blog = parseSelectedBlog();

    const handleCopy = () =>{
      setCopied(true)
    }

    return (
      <div id="article">
      { blog ?
        <>
        <div>

          <div className="title-bar">
            <h4>{blog.title}</h4>
            <div className="article-info">
              <p>By: {blog.author}</p>
              <div className="share-icons">
                <ShareFBBtn/>
                <ShareTwitterBtn/>
                <ShareEmailBtn/>
                <CopyLink onCopy={handleCopy}/>
              </div>
            </div>
          </div>
          <div className="article">
              <div className="img-wrapper">
                <img  alt={blog.title} src={blog.src} />
              </div>
              <div className="article-body">
                <div className="text-body">
                  <p>
                    Lorem ipsum dolor amet godard artisan shoreditch kinfolk cliche
                    gluten-free ethical blog whatever hexagon williamsburg squid organic
                    glossier. Art party meditation marfa post-ironic, air plant forage
                    direct trade neutra actually pitchfork man braid drinking vinegar raclette
                    8-bit wolf. Hella schlitz authentic messenger bag master cleanse asymmetrical.
                    Semiotics whatever blog yuccie 8-bit wolf lo-fi gluten-free, seitan pour-over lyft. Kombucha shoreditch succulents, tilde roof party forage plaid. Banjo 90's health goth chambray, freegan hell of raclette small batch hot chicken deep v man braid.
                  </p>
                  <p>
                    Intelligentsia helvetica lo-fi ramps, master cleanse plaid brooklyn vaporware waistcoat. Helvetica retro subway tile, vape narwhal cornhole migas pickled cloud bread organic chartreuse taiyaki occupy bitters affogato. Knausgaard street art hexagon whatever four loko pitchfork hell of farm-to-table bespoke copper mug beard wolf. Whatever bicycle rights woke YOLO readymade
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
          </div>
        </div>
        <MoreBlogSidebar selectedBlog={blog} blogs={props.blogs}/>
        </>
      : <>Loading</>}
      <CopySnackbar open={copied} setCopied={setCopied}/>
      </div>

    );
  }


export default Article;
