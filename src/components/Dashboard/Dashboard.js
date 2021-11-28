import React, { useContext, useState } from 'react';
import { changeHerosDisplayAction } from '../../actions/trainerActions';
import { LoginContext } from '../../context/LoginContext';
import { TrainerContext } from '../../context/TrainerContext';
import HeroCard from '../heroes/HeroCard';
import HeroesPreviewList from '../heroes/HeroesPreviewList';
import HerosTable from '../heroes/HerosTable';
import DashboardContent from './DashboardContent';
import NavBar from './NavBar';

const Dashboard = () => {
    const [response, setResponse] = useState(["", ""]);
    const [isDashboardVisible, setIsDashboardVisible] = useState(true);

    const { userData } = useContext(LoginContext);
    const { trainerData, dispatchTrainerData } = useContext(TrainerContext);

    const handleHeroDisplay = (hero) => {
        dispatchTrainerData(changeHerosDisplayAction(hero))
    }



    return (
        <>
            {response[0] && <p className={response[1] === 'failure' ? "response-fail" : 'response-success'}>{response[0]}</p>}
            <div className="dashboard">
                <div className="dashboard-container">
                    <NavBar setIsDashboardVisible={setIsDashboardVisible} />
                    <div className="dashboard-content-container">
                        <div className="dashboard-content-header">
                            <h1>Hi {userData.username}</h1>
                            <p>Welcome back, your heroes waiting to be trained</p>
                        </div>
                        {isDashboardVisible ?
                            <DashboardContent setResponse={setResponse} />
                            :
                            <HerosTable />
                        }
                    </div>
                </div>
            </div>
        </>
    );
};


export default Dashboard;