import React, { useEffect, useState } from 'react';
import HeroPreview from './HeroPreview';

const HeroesPreviewList = ({ heroes, onClickHero }) => {
    const [herosList, setHerosList] = useState([]);

    useEffect(() => {
        let heros = heroes.sort((cHero, nHero) => cHero.currentPower.$numberDecimal > nHero.currentPower.$numberDecimal)
        setHerosList(heros);
    }, [heroes])

    return (
        <div className="heroes-list">
            <h1>Heroes</h1>
            <div className="heroes-list-container">
                {herosList.map((hero) =>
                    <HeroPreview data={hero} onClickHero={onClickHero} />
                )}
            </div>
        </div>
    );
};

export default HeroesPreviewList