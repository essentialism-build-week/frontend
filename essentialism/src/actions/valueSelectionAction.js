import axios from 'axios';

export const getValues = () => (dispatch) => {
    dispatch({ type: GET_VALUES_START })
}