import { axiosWithAuth } from '../utils/axiosWithAuth';

// Destructuring fetch command names
export const FETCH_PROJECTLIST_START = 'FETCH_PROJECTLIST_START';
export const FETCH_PROJECTLIST_SUCCESS = 'FETCH_PROJECTLIST_SUCCESS';
export const FETCH_PROJECTLIST_FAILURE = 'FETCH_PROJECTLIST_FAILURE';

export const getProjectList = () => dispatch => {
  dispatch({ type: FETCH_PROJECTLIST_START });
  axiosWithAuth()
    .get(`/projects`)
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_PROJECTLIST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_PROJECTLIST_FAILURE, payload: err.response });
    });
};