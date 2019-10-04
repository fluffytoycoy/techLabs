import React, {Component} from 'react';
import {parseUrl} from '../../Utils/UrlHandlers/UrlHandlers';
import MoreBlogSidebar from './MoreBlogSidebar/MoreBlogSidebar';
import './Article.scss';
import ShareFBBtn from '../../Utils/ShareButtons/ShareFBBtn'

function Article(props){

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
    console.log(props.selectedBlog)
    return (
      <div id="article">
      { blog ?
        <>
        <div>
          <div className="title-bar">
            <h4>{blog.title}</h4>
            <div className="article-info">
              <p>By: {blog.author}</p>
              <ShareFBBtn/>


<a class="resp-sharing-button__link" href="https://twitter.com/intent/tweet/?text=format%20title%20like%20this&amp;url=https%3A%2F%2Ftechlabs.coycoding.com" target="_blank" rel="noopener" aria-label="">
  <div class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/></svg>
    </div>
  </div>
</a>

<a class="resp-sharing-button__link" href="mailto:?subject=format%20title%20like%20this&amp;body=https%3A%2F%2Ftechlabs.coycoding.com" target="_self" rel="noopener" aria-label="">
  <div class="resp-sharing-button resp-sharing-button--email resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.25 14.43l-3.5 2c-.08.05-.17.07-.25.07-.17 0-.34-.1-.43-.25-.14-.24-.06-.55.18-.68l3.5-2c.24-.14.55-.06.68.18.14.24.06.55-.18.68zm4.75.07c-.1 0-.2-.03-.27-.08l-8.5-5.5c-.23-.15-.3-.46-.15-.7.15-.22.46-.3.7-.14L12 13.4l8.23-5.32c.23-.15.54-.08.7.15.14.23.07.54-.16.7l-8.5 5.5c-.08.04-.17.07-.27.07zm8.93 1.75c-.1.16-.26.25-.43.25-.08 0-.17-.02-.25-.07l-3.5-2c-.24-.13-.32-.44-.18-.68s.44-.32.68-.18l3.5 2c.24.13.32.44.18.68z"/></svg>
    </div>
  </div>
</a>

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
      </div>

    );
  }


export default Article;
