import api from '../utils/api';

export const putVerificationCode = async (data) => {
    const response = await api.put('/code_v', data);
    return response.data;
}