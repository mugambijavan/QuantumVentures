import React from 'react'
import Feature from '../../components/feature/Feature';
import './about.css'

const About = () => (
  <div className="quantum__about section__margin" id="about">
    <div className="quantum__about-feature">
      <Feature title="Quantum Quest Ventures" text="Quantum Quest Ventures is an innovative business solutions provider committed to transforming industries through cutting-edge technology, strategic insights, and exceptional service. Our mission is to empower businesses to reach their highest potential by offering tailored solutions that drive growth and success in the digital age." />
    </div>
    <div className="quantum__about-heading">
      <h1 className="gradient__text">We're almost ready for Launch</h1>
    </div>
    <div className="quantum__about-container">
      <Feature title="Technology Consulting" text="Digital Transformation, IT Infrastructure Management, Cybersecurity Solutions" />
      <Feature title="Innovation Solutions" text="AI and Machine Learning Integration, Blockchain Development, Internet of Things (IoT) Solutions" />
      <Feature title="Business Strategy" text="Market Analysis and Research, Strategic Planning and Execution, Operational Efficiency Optimization" />
    </div>
  </div>
);

export default About