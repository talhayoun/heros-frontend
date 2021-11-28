export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const loginAction = (username, id, token) => ({
    type: LOGIN,
    username,
    id,
    token
})

export const logoutAction = () => ({
    type: LOGOUT
})