import axios from 'axios';

// Destructuring fetch command names
export const FETCH_PROJECTLIST_START = 'FETCH_PROJECTLIST_START';
export const FETCH_PROJECTLIST_SUCCESS = 'FETCH_PROJECTLIST_SUCCESS';
export const FETCH_PROJECTLIST_FAILURE = 'FETCH_PROJECTLIST_FAILURE';

export const getProjectList = () => dispatch => {
  dispatch({ type: FETCH_PROJECTLIST_START });
  axios.get("https://todai-backend.herokuapp.com/api/projects/id")
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_PROJECTLIST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_PROJECTLIST_FAILURE, payload: `${err}` });
    });
};