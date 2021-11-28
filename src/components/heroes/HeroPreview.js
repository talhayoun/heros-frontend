import React from 'react';
import Label from './Label';

const HeroPreview = ({ data, onClickHero }) => {
    return (
        <div className="hero-preview" onClick={() => onClickHero(data)}>
            <div className="hero-preview-bg"></div>
            <div className="hero-preview-container">
                <div className="hero-preview-img">
                    <img src={data.image} />
                </div>
                <h3>
                    {data.name}
                </h3>
                <Label title="C.P" value={data.currentPower.$numberDecimal.substr(0, 5)} />
            </div>
        </div>
    );
};

export default HeroPreview;