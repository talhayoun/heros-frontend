import React, { createContext, useReducer } from 'react';
import TrainerReducer, { initialTrainerState } from '../reducers/TrainerReducer';

export const TrainerContext = createContext();

const TrainerContextProvider = (props) => {

    const [trainerData, dispatchTrainerData] = useReducer(TrainerReducer, initialTrainerState);

    return (
        <TrainerContext.Provider value={{ trainerData, dispatchTrainerData }} >
            {props.children}
        </TrainerContext.Provider>
    )
}
export default TrainerContextProvider