import React, { useContext, useEffect } from 'react';
import { changeHerosDisplayAction } from '../../actions/trainerActions';
import { TrainerContext } from '../../context/TrainerContext';
import HeroCard from '../heroes/HeroCard';
import HeroesPreviewList from '../heroes/HeroesPreviewList';

const DashboardContent = ({ setResponse }) => {
    const { trainerData, dispatchTrainerData } = useContext(TrainerContext);

    const handleHeroDisplay = (hero) => {
        dispatchTrainerData(changeHerosDisplayAction(hero))
    }

    useEffect(() => {
        console.log(trainerData)
    }, [trainerData])

    return (
        <div className="dashboard-content">
            {trainerData.heroOne && <HeroCard data={trainerData.heroOne} setResponse={setResponse} />}
            {trainerData.herosList && <HeroesPreviewList heroes={trainerData.herosList}
                onClickHero={handleHeroDisplay}
            />}
            {trainerData.heroTwo && <HeroCard data={trainerData.heroTwo} setResponse={setResponse} />}
        </div>
    );
};


export default DashboardContent;