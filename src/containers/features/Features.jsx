    import React from 'react';
    import Feature from '../../components/feature/Feature';
    import './features.css';

    const featuresData = [
    {
        title: 'Quantum Ventures',
        text: 'Quantum Ventures',
    },
    {
        title: 'Quantum Ventures',
        text: 'Quantum Ventures',
    },
    {
        title: 'Quantum Ventures',
        text: 'Quantum Ventures',
    },
    {
        title: 'Quantum Ventures',
        text: 'Quantum Ventures',
    },
    ];

    const Features = () => (
    <div className="quantum__features section__padding" id="features">
        <div className="quantum__features-heading">
        <h1 className="gradient__text">Quantum Ventures</h1>
        </div>
        <div className="quantum__features-container">
        {featuresData.map((item, index) => (
            <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
        </div>
    </div>
    );

    export default Features;