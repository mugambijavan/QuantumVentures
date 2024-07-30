import React from 'react';
import './header.css';
import image from '../../assets/image.png';

const Header = () => (
  <div className="quantum__header section__padding" id="home">
    <div className="quantum__header-content">
      <h1 className="gradient__text">We Are Almost Ready for Launch</h1>
      <p>Our mission is to empower businesses to reach their highest potential by offering tailored solutions that drive growth and success in the digital age..</p>
    </div>

    <div className="quantum__header-image">
    <img src={image} />
    </div>
  </div>
);

export default Header;