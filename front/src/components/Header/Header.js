import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';

function Header(){
  const[menuOpen, toggleNavMenu] = React.useState(false)
  const[servicesOpen, toggleServicesMenu] = React.useState(false)
  const[cultureOpen, toggleCultureMenu] = React.useState(false)
  const menuArray = [toggleServicesMenu, toggleCultureMenu];

  function closeAllMenusExcept(menu){
    if(window.innerWidth > 768){
      menuArray.forEach(func=>{
        if(func !== menu){
          func(false);
        }
      })
    }
  }

  function handleServiceClick() {
    if(window.innerWidth)
    closeAllMenusExcept(toggleServicesMenu);
    toggleServicesMenu(!servicesOpen)
  }

  function handleCultureClick() {
    closeAllMenusExcept(toggleCultureMenu);
    toggleCultureMenu(!cultureOpen)
  }

  function handleMenuClick(){
    toggleNavMenu(!menuOpen)
  }
    return (
      <div id="header">
      <div>
        <div onClick={handleMenuClick}className="menu-btn">x</div>
        <div className="logo">
          <Link to="/"><h3>techLabs</h3></Link>
        </div>
        <div className={`${menuOpen ? 'open' : ''} nav-wrapper`}>
          <ul className="navigation">
            <li>
              <div className="dropdown-btn">
                <Link to="/Services"><p>Services</p></Link><i onClick={handleServiceClick}className="fas fa-chevron-down"></i>
              </div>
              <ul className={`${servicesOpen ? 'open' : ''}`}>
                <Link to="/Services/Cloud"><li>Cloud Systems</li></Link>
                <Link to="/Services/Data-Engineering"><li>Data Engineering</li></Link>
                <Link to="/Services/Decision-Science"><li>Decision Science</li></Link>
              </ul>
            </li>

            <li>
              <div className="dropdown-btn">
                <Link to="/Culture"><p>Culture</p></Link ><i onClick={handleCultureClick}className="fas fa-chevron-down"></i>
              </div>
              <ul className={`${cultureOpen ? 'open' : ''} culture`}>
                <li>Core Beliefs</li>
                <li>Community</li>
              </ul>
            </li>
            <li>
              <div className="dropdown-btn">
                <Link to="/Work"><p>Work</p></Link>
              </div>
            </li>
            <li>
              <div className="dropdown-btn">
                <p>About Us</p>
              </div>
            </li>
          </ul>
        </div>
        </div>
      </div>

    );
}

export default Header;
