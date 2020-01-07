import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://todai-backend.herokuapp.com/api/auth',
        headers: {
            authorization: token
        }
    });
};