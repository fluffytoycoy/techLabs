import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';

function Header(){
  const[menuOpen, toggleNavMenu] = React.useState(false)
  const[servicesOpen, toggleServicesMenu] = React.useState(false)
  const[workOpen, toggleWorkMenu] = React.useState(false)
  const[cultureOpen, toggleCultureMenu] = React.useState(false)
  const menuArray = [toggleServicesMenu, toggleWorkMenu, toggleCultureMenu];

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
    closeAllMenusExcept(toggleServicesMenu);
    toggleServicesMenu(!servicesOpen)
  }

  function handleWorkClick() {
    closeAllMenusExcept(toggleWorkMenu);
    toggleWorkMenu(!workOpen)
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
          <h3>techLabs</h3>
        </div>
        <div className={`${menuOpen ? 'open' : ''} nav-wrapper`}>
          <ul className="navigation">
            <li>
              <div className="dropdown-btn">
                <Link to="Services"><p>Services</p></Link><i onClick={handleServiceClick}className="fas fa-chevron-down"></i>
              </div>
              <ul className={`${servicesOpen ? 'open' : ''}`}>
                <li>Cloud Systems</li>
                <li>Data Engineering</li>
                <li>Decision Science</li>
              </ul>
            </li>
            <li>
              <div className="dropdown-btn">
                <Link to="Work"><p>Work</p></Link><i onClick={handleWorkClick}className="fas fa-chevron-down"></i>
              </div>
              <ul className={`${workOpen ? 'open' : ''}`}>
                <li>Cloud Systems</li>
                <li>Data Engineering</li>
                <li>Decision Science</li>
              </ul>
            </li>
            <li>
              <div className="dropdown-btn">
                <p>Culture</p><i onClick={handleCultureClick}className="fas fa-chevron-down"></i>
              </div>
              <ul className={`${cultureOpen ? 'open' : ''} culture`}>
                <li>Core Beliefs</li>
                <li>Community</li>
              </ul>
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
