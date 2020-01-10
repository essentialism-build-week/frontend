import { axiosWithAuth } from '../utils/axiosWithAuth';

export const GET_VALUES_START = 'GET_VALUES_START';
export const GET_VALUES_SUCCESS = 'GET_VALUES_SUCCESS';
export const GET_VALUES_FAILURE = 'GET_VALUES_FAILURE'; 

export const ADD_SELECTED_VALUES = 'ADD_SELECTED_VALUES';
export const REMOVE_SELECTED_VALUES = 'REMOVE_SELECTED_VALUES';



// getting values

export const getValues = () => (dispatch) => {

 const currentUser = localStorage.getItem('ID');
 console.log(currentUser);


 // go through the users and reference the username to get the ID
    axiosWithAuth()
    .get('/users')
    .then(response => {
        // getting the ID
       const currentUserID = response.data.find(item =>  {
            if (item.username == currentUser) {
                return true
            } 
        })



        console.log(currentUserID.id)


        // displaying user values 

        dispatch({ type: GET_VALUES_START })
        axiosWithAuth()
        .get(`users/${currentUserID.id}/values`)
        .then(response => {
            console.log( `VALUE SELECTION ACTION`, response)
            dispatch({ type: GET_VALUES_SUCCESS, payload: response.data })
        })
        .catch(error => 
            dispatch({type: GET_VALUES_FAILURE, payload: error.response})
            )

    })


   
}

// setting selected values into backend

export const setAddSelectedValues = () => (dispatch) => {
    axiosWithAuth()
    .put('/users/:VALUE_ID/values')
    .then(response => {
        dispatch({ type: ADD_SELECTED_VALUES, payload: response.data.id })
    })
    .catch(error => 
        console.log(error)
        )
}

export const setRemoveSelectedValues = () => (dispatch) => {
    axiosWithAuth()
    .put('/values')
    .then(response => {
        dispatch({ type: REMOVE_SELECTED_VALUES, payload: response.data })
    })
    .catch(error => 
        console.log(error)
        )
}