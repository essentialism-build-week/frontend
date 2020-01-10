import { axiosWithAuth } from '../utils/axiosWithAuth';

// Destructuring fetch command names
export const FETCH_PROJECTLIST_START = 'FETCH_PROJECTLIST_START';
export const FETCH_PROJECTLIST_SUCCESS = 'FETCH_PROJECTLIST_SUCCESS';
export const FETCH_PROJECTLIST_FAILURE = 'FETCH_PROJECTLIST_FAILURE';

export const getProjectList = () => dispatch => {
  dispatch({ type: FETCH_PROJECTLIST_START });

  // Get user
  const activeUser = localStorage.getItem("ID");

  // Get user ID
  axiosWithAuth()
    .get('/users')
    .then(res => {
      const activeUserID = res.data.find(item => {
        if (item.username == activeUser) {
          return true
        }
      })
      console.log(activeUserID);
      
      axiosWithAuth()
      .get(`/users/${activeUserID.id}/projects`)
      .then(res => {
        console.log(res.data);
        dispatch({ type: FETCH_PROJECTLIST_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FETCH_PROJECTLIST_FAILURE, payload: err.response });
      });
    })
    .catch(err => console.log(err));
};