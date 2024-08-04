import api from './api';

export const postForm = async (data) => {
    try{
        const response = await api.post('/post-form/', data);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}