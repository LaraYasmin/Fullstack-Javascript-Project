import api from '../utils/api';

export const postForms = async (data) => {
    const response = await api.post('/forms', data);
    return response.data;
}