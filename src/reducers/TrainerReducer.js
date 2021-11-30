import { CHANGE_DISPLAY, CLEAR_DATA, HERO_TRAINING, SET_ALL_HEROS, SET_HEROS } from "../actions/trainerActions";

export const initialTrainerState = {
    allHeros: [],
    herosList: [],
    heroOne: "",
    heroTwo: "",
    changeHeroNum: 1
}

const TrainerReducer = (state, action) => {
    switch (action.type) {
        case SET_ALL_HEROS:
            return { ...state, allHeros: action.heros };
        case SET_HEROS:
            let { heros } = action
            if (heros.length > 0) {
                let herosList = [];
                for (let i = 2; i < heros.length; i++) {
                    herosList.push(heros[i].hero);
                }
                herosList = herosList.sort((cHero, nHero) => cHero.currentPower.$numberDecimal - nHero.currentPower.$numberDecimal)
                return { ...state, heroOne: action.heros[0].hero, heroTwo: action.heros[1].hero, herosList }
            } else {
                return { ...state };
            }
        case CHANGE_DISPLAY:
            let copyHeros = [...state.herosList];
            copyHeros = copyHeros.filter((curHero) => curHero._id !== action.hero._id);

            let heroDisplay = state.changeHeroNum === 1 ? state.heroOne : state.heroTwo;
            copyHeros = [...copyHeros, heroDisplay];
            copyHeros = copyHeros.sort((cHero, nHero) => cHero.currentPower.$numberDecimal - nHero.currentPower.$numberDecimal)

            let heroOne = state.heroOne, heroTwo = state.heroTwo;
            if (state.changeHeroNum === 1)
                heroOne = action.hero;
            else
                heroTwo = action.hero
            console.log("bla")

            return { ...state, herosList: copyHeros, changeHeroNum: state.changeHeroNum === 1 ? 2 : 1, heroOne, heroTwo }

        case HERO_TRAINING:
            let heroOneState = state.heroOne;
            let heroTwoState = state.heroTwo;

            if (action.hero._id == heroOneState._id)
                heroOneState = action.hero
            else
                heroTwoState = action.hero;

            console.log(heroOneState, heroTwoState)
            return { ...state, heroOne: heroOneState, heroTwo: heroTwoState }
        case CLEAR_DATA:
            return { allHeros: [], herosList: [], heroOne: "", heroTwo: "", changeHeroNum: 1 }
        default:
            return { ...state };

    }
}

export default TrainerReducer;