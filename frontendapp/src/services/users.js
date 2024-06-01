import api from '../utils/api';

export const postUsers = async (data) => {
    const response = await api.post('/register', data);
    return response.data;
}