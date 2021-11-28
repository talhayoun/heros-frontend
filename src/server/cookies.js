import Cookies from 'js-cookie';

export const addCookie = (token) => {
    Cookies.set('token', token);
}

export const removeCookie = () => {
    Cookies.remove('token');
}
export const getCookie = () => {
    const token = Cookies.get('token');
    return token;
}
