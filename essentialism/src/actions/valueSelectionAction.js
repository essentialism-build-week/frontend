import { axiosWithAuth } from '../utils/axiosWithAuth';

export const GET_VALUES_START = 'GET_VALUES_START';
export const GET_VALUES_SUCCESS = 'GET_VALUES_SUCCESS';
export const GET_VALUES_FAILURE = 'GET_VALUES_FAILURE'; 

// getting values

export const getValues = () => (dispatch) => {
    dispatch({ type: GET_VALUES_START })
    axiosWithAuth()
    .get('/values')
    .then(response => {
        console.log( `VALUE SELECTION ACTION`, response)
        dispatch({ type: GET_VALUES_SUCCESS, payload: response })
    })
    .catch(error => {
        dispatch({ type: GET_VALUES_FAILURE, payload: error.response})
    })
}