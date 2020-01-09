import { axiosWithAuth } from '../utils/axiosWithAuth';

// Destructuring fetch command names
export const POST_ADDNEWPROJECT_START = 'POST_ADDNEWPROJECT_START';
export const POST_ADDNEWPROJECT_SUCCESS = 'POST_ADDNEWPROJECT_SUCCESS';
export const POST_ADDNEWPROJECT_FAILURE = 'POST_ADDNEWPROJECT_FAILURE';

export const postAddNewProject = () => dispatch => {
  dispatch({ POST_ADDNEWPROJECT_START });
  axiosWithAuth()
    .post('/projects', {/* newProject */})
    .then(res => {
      console.log(res);
      dispatch({ type: POST_ADDNEWPROJECT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: POST_ADDNEWPROJECT_FAILURE, payload: err.response });
    });
};