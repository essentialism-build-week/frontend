import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = () => dispatch => {
    let history = useHistory();
    dispatch({ type: LOGIN_START });
    axiosWithAuth()
    .post('/login')
    .then(response => {
        console.log(response)
            dispatch({ type: LOGIN_SUCCESS, payload: stored})
            let stored = localStorage.setItem("token", response.data.token)
            history.push('/home');
        
    })
    .catch(error => {
        console.log(error)
        dispatch({ type: LOGIN_FAILURE, payload: error.response })
    });
}

