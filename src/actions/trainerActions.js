export const SET_HEROS = 'SET_HEROS';
export const CHANGE_DISPLAY = 'CHANGE_DISPLAY';
export const HERO_TRAINING = 'HERO_TRAINING';
export const SET_ALL_HEROS = 'SET_ALL_HEROS';
export const CLEAR_DATA = 'CLEAR_DATA';

export const setHerosAction = (heros) => ({
    type: SET_HEROS,
    heros
})

export const changeHerosDisplayAction = (hero) => ({
    type: CHANGE_DISPLAY,
    hero
})

export const heroTrainingAction = (hero) => ({
    type: HERO_TRAINING,
    hero
})

export const setAllHerosAction = (heros) => ({
    type: SET_ALL_HEROS,
    heros
})

export const clearTrainerDataAction = () => ({
    type: CLEAR_DATA
})