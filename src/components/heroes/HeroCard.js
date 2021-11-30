import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { heroTrainingAction } from '../../actions/trainerActions';
import { TrainerContext } from '../../context/TrainerContext';
import { trainHero } from '../../server/trainer';
import Label from './Label';
import SuitColor from './SuitColor';

const HeroCard = ({ data, setResponse }) => {
    const { ability, name, image, suitColor, currentPower, lastTrainPower, createdAt, trainingCount } = data;

    const { dispatchTrainerData } = useContext(TrainerContext);
    const navigate = useNavigate();

    const handleTrainClick = () => {
        trainHero(data._id).then(
            (res) => {
                if (res.err) {
                    setResponse([res.err, 'failure'])
                    setTimeout(() => {
                        setResponse(["", ""])
                    }, 2000);
                }
                else
                    dispatchTrainerData(heroTrainingAction(res));
            },
            (err) => {
                if (err.message === 'Auth failed')
                    navigate('/login')
            }
        )
    };

    return (
        <div className="hero-card">
            <div className="hero-details-container">
                <div className="hero-details-header">
                    <h2>{name}</h2>
                    <span>PLAYED SINCE {createdAt?.split("T")[0]}</span>
                </div>
                <div className="hero-details">
                    <div className="hero-details-labels">
                        <Label title="CP" value={currentPower?.$numberDecimal.substr(0, 5) || '-'} />
                        <Label title="SP" value={lastTrainPower?.$numberDecimal.substr(0, 5) || '-'} />
                        <Label title="Num of trains" value={trainingCount} />
                    </div>
                    <div className="hero-details-ability">
                        <Label title="Ability" value={ability?.toUpperCase()} />
                        <SuitColor title="Suit Color" colors={suitColor} />
                        <button
                            className="start-btn"
                            // disabled={trainingCount >= 5 ? true : false}
                            onClick={handleTrainClick}
                        >
                            Train
                        </button>
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img alt={name} src={image} />
            </div>
        </div>
    );
};


export default HeroCard;
