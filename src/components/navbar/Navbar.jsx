import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenuToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleCloseMenu = () => {
    setToggleMenu(false);
  };

  return (
    <div>
      <div className="quantum__navbar">
        <div className="quantum__navbar-links">
          <div className="quantum__navbar-links_container">
            <p><a href="#home" onClick={handleCloseMenu}>Home</a></p>
            <p><a href="#about" onClick={handleCloseMenu}>About Us</a></p>
            <p><a href="#services" onClick={handleCloseMenu}>Services</a></p>
            <p><a href="#industries" onClick={handleCloseMenu}>Industries</a></p>
            <p><a href="#casestudies" onClick={handleCloseMenu}>Case Studies</a></p>
            <p><a href="#blog" onClick={handleCloseMenu}>Blog</a></p>
            <p><a href="#contact" onClick={handleCloseMenu}>Contact Us</a></p>
          </div>
        </div>
        <div className="quantum__navbar-menu">
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={handleMenuToggle} />
            : <RiMenu3Line color="#fff" size={27} onClick={handleMenuToggle} />}
          {toggleMenu && (
            <div className="quantum__navbar-menu_container scale-up-center">
              <div className="quantum__navbar-menu_container-links">
                <p><a href="#home" onClick={handleCloseMenu}>Home</a></p>
                <p><a href="#about" onClick={handleCloseMenu}>About Us</a></p>
                <p><a href="#services" onClick={handleCloseMenu}>Services</a></p>
                <p><a href="#industries" onClick={handleCloseMenu}>Industries</a></p>
                <p><a href="#casestudies" onClick={handleCloseMenu}>Case Studies</a></p>
                <p><a href="#blog" onClick={handleCloseMenu}>Blog</a></p>
                <p><a href="#contact" onClick={handleCloseMenu}>Contact Us</a></p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
