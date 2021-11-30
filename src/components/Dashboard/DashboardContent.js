import React, { useContext } from 'react';
import { changeHerosDisplayAction } from '../../actions/trainerActions';
import { TrainerContext } from '../../context/TrainerContext';
import HeroCard from '../heroes/HeroCard';
import HeroesPreviewList from '../heroes/HeroesPreviewList';

const DashboardContent = ({ setResponse }) => {
    const { trainerData, dispatchTrainerData } = useContext(TrainerContext);

    const handleHeroDisplay = (hero) => {
        dispatchTrainerData(changeHerosDisplayAction(hero))
    }


    return (
        <div className="dashboard-content">
            {trainerData.herosList.length > 0 ?
                <>
                    {trainerData.heroOne && <HeroCard data={trainerData.heroOne} setResponse={setResponse} />}
                    {trainerData.herosList && <HeroesPreviewList heroes={trainerData.herosList}
                        onClickHero={handleHeroDisplay}
                    />}
                    {trainerData.heroTwo && <HeroCard data={trainerData.heroTwo} setResponse={setResponse} />}
                </>
                :
                <p className="dashboard-content-noheros">No heros to display</p>
            }
        </div>
    );
};


export default DashboardContent;