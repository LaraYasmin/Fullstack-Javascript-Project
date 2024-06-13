import api from './api';

export const postUsers = async (data) => {
    const response = await api.post('/register', data);
    return response.data;
}

export const postForms = async (data) => {
    const response = await api.post('/forms', data);
    return response.data;
}

export const putVerificationCode = async (data) => {
    const response = await api.put('/code_v', data);
    return response.data;
}