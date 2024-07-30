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
        <div className="quantum__navbar">
        <div className="quantum__navbar-links">
            
            <div className="quantum__navbar-links_container">
            <p><a href="#home" onClick={handleCloseMenu}>Home</a></p>
            <p><a href="#menu" onClick={handleCloseMenu}>Menu</a></p>
            <p><a href="#menu" onClick={handleCloseMenu}>Menu</a></p>
            <p><a href="#menu" onClick={handleCloseMenu}>Menu</a></p>
            <p><a href="#menu" onClick={handleCloseMenu}>Menu</a></p>
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
                <p><a href="#menu" onClick={handleCloseMenu}>Menu</a></p>
                <p><a href="#menu" onClick={handleCloseMenu}>Menu</a></p>
                <p><a href="#menu" onClick={handleCloseMenu}>Menu</a></p>
                <p><a href="#menu" onClick={handleCloseMenu}>Menu</a></p>
            </div>
            
            </div>
            )}
        </div>
        </div>
    );
    };

    export default Navbar;