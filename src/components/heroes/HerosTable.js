import React, { useContext, useEffect, useState } from 'react';
import { setAllHerosAction } from '../../actions/trainerActions';
import { TrainerContext } from '../../context/TrainerContext';
import { getAllHeros } from '../../server/trainer';
import HeroCard from './HeroCard';

const HerosTable = () => {
    const [pageNum, setPageNum] = useState(1);
    const [isPaginationComplete, setIsPaginationComplete] = useState(false);
    const { trainerData, dispatchTrainerData } = useContext(TrainerContext);


    const handleArrowClickLeft = () => {
        if (pageNum <= 1) return
        setPageNum(curNum => curNum - 1)
    }
    const handleArrowClickRight = () => {
        if (isPaginationComplete) return;
        setPageNum(curNum => curNum + 1)
    }

    const getHeros = () => {
        getAllHeros(pageNum).then(
            (res) => {
                if (res.isComplete) setIsPaginationComplete(true);
                else setIsPaginationComplete(false)
                dispatchTrainerData(setAllHerosAction(res.heros));
            },
            (err) => {
                console.log("Failed to get heros");
            }
        )
    }

    useEffect(() => {
        getHeros()
    }, [])

    useEffect(() => {
        getHeros()
    }, [pageNum])


    return (
        <div className="herostable">
            <div className={isPaginationComplete ? "arrow-disabled arrow-right" : "arrow-right"} onClick={handleArrowClickRight}></div>
            <div className={pageNum <= 1 ? "arrow-disabled arrow-left" : "arrow-left"} onClick={handleArrowClickLeft}></div>
            <div className="herostable-container">
                {trainerData.allHeros.map((hero) => <HeroCard data={hero} />)}
            </div>
        </div>
    );
};

export default HerosTable;