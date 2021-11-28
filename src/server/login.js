import Axios from 'axios';

export const loginUser = async (username, password) => {
    try {
        const res = await Axios.post(`${process.env.REACT_APP_SERVER_API}/login`, { username, password });
        return res.data;
    } catch (error) {
        throw new Error(error.response.data.err);
    }
}

export const signupUser = async (username, password) => {
    try {
        const res = await Axios.post(`${process.env.REACT_APP_SERVER_API}/signup`, { username, password });
        return res.data.trainer;
    } catch (error) {
        throw new Error("Password must contain  one alphanumeric char and one digit, minimum 8 charts ");
    }
}

export const verifyUser = async (token) => {
    try {
        const res = await Axios.get(`${process.env.REACT_APP_SERVER_API}/trainer/verify?token=${token}`);
        return res.data;
    } catch (error) {
        throw new Error("Failed to verify user");
    }
}