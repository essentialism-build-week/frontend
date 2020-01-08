import { axiosWithAuth } from '../utils/axiosWithAuth';

export const GET_VALUES_START = 'GET_VALUES_START';
export const GET_VALUES_SUCCESS = 'GET_VALUES_SUCCESS';
export const GET_VALUES_FAILURE = 'GET_VALUES_FAILURE'; 

export const ADD_SELECTED_VALUES_START = 'ADD_SELECTED_VALUES_START';
export const ADD_SELECTED_VALUES_SUCCESS = 'ADD_SELECTED_VALUES_SUCCESS';
export const ADD_SELECTED_VALUES_FAILURE = 'ADD_SELECTED_VALUES_FAILURE';

export const REMOVE_SELECTED_VALUES_START = 'REMOVE_SELECTED_VALUES_START';
export const REMOVE_SELECTED_VALUES_SUCCESS = 'REMOVE_SELECTED_VALUES_SUCCESS';
export const REMOVE_SELECTED_VALUES_FAILURE = 'REMOVE_SELECTED_VALUES_FAILURE';


// getting values

export const getValues = () => (dispatch) => {
    dispatch({ type: GET_VALUES_START })
    axiosWithAuth()
    .get('/values')
    .then(response => {
        // console.log( `VALUE SELECTION ACTION`, response)
        dispatch({ type: GET_VALUES_SUCCESS, payload: response.data })
    })
    .catch(error => 
        dispatch({type: GET_VALUES_FAILURE, payload: error.response})
        )
}

// setting selected values into backend

export const setSelectedValues = () => (dispatch) => {
    dispatch({ type: ADD_SELECTED_VALUES_START })
    axiosWithAuth()
    .post('/values')
    .then(response => {
        dispatch({ type: ADD_SELECTED_VALUES_SUCCESS, payload: response.data })
    })
    .catch(error => 
        dispatch({ type: ADD_SELECTED_VALUES_FAILURE, payload: error.response })
        )
}