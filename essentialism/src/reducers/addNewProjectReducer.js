import {
  POST_ADDNEWPROJECT_START,
  POST_ADDNEWPROJECT_SUCCESS,
  POST_ADDNEWPROJECT_FAILURE
} from '../actions/addNewProjectAction';

const initialState = {
  newProject: '',
  error: '',
  isFetching: false
};

function addNewProjectReducer(state=initialState, action) {
  switch (action.type) {
    case POST_ADDNEWPROJECT_START:
      return {
        ...state,
        error: '',
        isFetching: true
      };
    case POST_ADDNEWPROJECT_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        error: '',
        isFetching: false,
        newProject: [...state.newProject, action.payload]
      };
    case POST_ADDNEWPROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
}

export default addNewProjectReducer;