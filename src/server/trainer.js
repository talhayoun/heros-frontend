import Axios from 'axios';
import { getCookie } from './cookies';

export const trainHero = async (heroID) => {
    try {
        const token = getCookie();
        const res = await Axios.patch(`${process.env.REACT_APP_SERVER_API}/trainer/hero/update?token=${token}`, { heroID })
        if (res.data?.err) return res.data
        return res.data
    } catch (error) {
        if (error.response)
            throw new Error(error.response.data.err);
        else
            throw new Error(error)
    }
}

export const getAllHeros = async (pageNum) => {
    try {
        const token = getCookie()
        const res = await Axios.get(`${process.env.REACT_APP_SERVER_API}/trainer/heros/all?token=${token}&page=${pageNum}`);
        return res.data?.data;
    } catch (error) {
        console.log(error)
        throw new Error('Failed to find heros');
    }
}