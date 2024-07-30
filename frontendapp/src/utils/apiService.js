import api from './api';

export const postUsers = async (data) => {
    try{
        const response = await api.post('/register/', data);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export const postLogin = async (data) => {
    try {
        const response = await api.post('/login/', data);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}