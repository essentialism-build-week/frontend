import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            baseURL: "https://todai-backend.herokuapp.com/api/auth",
            authorization: token
        }
    });
};