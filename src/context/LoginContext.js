import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router';
import { setHerosAction } from '../actions/trainerActions';
import { loginAction } from '../actions/userActions';
import userReducer, { initialUserState } from '../reducers/userReducer';
import { getCookie, removeCookie } from '../server/cookies';
import { verifyUser } from '../server/login';
import { TrainerContext } from './TrainerContext';

export const LoginContext = createContext()

const LoginContextProvider = (props) => {

    const [userData, dispatchUserData] = useReducer(userReducer, initialUserState);
    const { dispatchTrainerData } = useContext(TrainerContext);

    const navigate = useNavigate();

    useEffect(() => {
        let token = getCookie();
        verifyUser(token).then(
            (res) => {
                dispatchUserData(loginAction(res.username, res.id, token));
                dispatchTrainerData(setHerosAction(res.heroes))
            },
            (err) => {
                removeCookie();
                navigate("/login")
            }
        )
    }, [])

    return (
        <LoginContext.Provider value={{ userData, dispatchUserData }}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider;