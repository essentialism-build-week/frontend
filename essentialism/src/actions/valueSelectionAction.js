import { axiosWithAuth } from '../utils/axiosWithAuth';

export const GET_VALUES_START = 'GET_VALUES_START';
export const GET_VALUES_SUCCESS = 'GET_VALUES_SUCCESS';
export const GET_VALUES_FAILURE = 'GET_VALUES_FAILURE'; 

export const ADD_SELECTED_VALUES = 'ADD_SELECTED_VALUES';
export const REMOVE_SELECTED_VALUES = 'REMOVE_SELECTED_VALUES';



// getting values

export const getValues = () => (dispatch) => {

     // displaying user values 

     dispatch({ type: GET_VALUES_START })
     axiosWithAuth()
     .get(`values`)
     .then(response => {
         console.log( `VALUE SELECTION ACTION`, response)
         dispatch({ type: GET_VALUES_SUCCESS, payload: response.data })
     })
     .catch(error => 
         dispatch({type: GET_VALUES_FAILURE, payload: error.response})
         )
}




export const setAddSelectedValues = () => (dispatch) => { 

    const currentUser = localStorage.getItem('ID');
    console.log(currentUser);

    // go through the users and reference the username to get the ID

    axiosWithAuth()
    .get('/users')
    .then(response => {
        // getting the ID
        const currentUserID = response.data.find(item => {
            if (item.username == currentUser) {
                return true
            }
        })

        console.log(`CURRENT USER ID`, currentUserID.id)

        axiosWithAuth()
        .get(`users/${currentUserID.id}/values`)
        .then(response => {
            // see if user_ID matches with currentUserID

            
            const currentUserValues = response.data.find(item => {
                if (item.user_id == currentUserID.id) {
                    return true
                }
            })

            console.log(`CURRENT USER VALUES`, currentUserValues)
            console.log(`CURRENT USER SELECTED`, currentUserValues.selected)

            const getObject = response.data.find(item => {
                console.log('ITEM', item.id)
                return item.id == 8
              })

            console.log('OBJECT', getObject.id)
          

            axiosWithAuth()
            .put(`users/${getObject.id}/uservalues`)
            .then(response => {

                console.log('PUT RESPONSE', response.selected)
                
            //    const change = response.selected = false
            //     console.log('user object', change)
            })

            console.log('CURRENT VALUES X2',currentUserValues)



            // axiosWithAuth()
            // .get(`/users/1/values`)
            // .then(response => {

            //     console.log('EDITING VALUES', response)
            //     // edit users values
            //     dispatch({ type: ADD_SELECTED_VALUES, payload: response.data })
            // })
            // .catch(error => console.log(error))
           
        })
       

    })

   

    

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