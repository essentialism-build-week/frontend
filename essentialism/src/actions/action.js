import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (props) => dispatch => {
    let history = useHistory();
    dispatch({ LOGIN_START });
    axiosWithAuth()
    .post('/login', props.credentials)
    .then(response => {
            dispatch({ type: LOGIN_SUCCESS, payload: localStorage.setItem("token", response.data.token)})
            history.push('/home');
        
    })
    .catch(error => {
        dispatch({ type: LOGIN_FAILURE, payload: error.response })
    });
}

