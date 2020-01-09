import {
    FETCH_PROJECTLIST_START,
    FETCH_PROJECTLIST_SUCCESS,
    FETCH_PROJECTLIST_FAILURE
} from '../actions/projectListAction';

const initialState = {
    projectList: [],
    error: '',
    isFetching: false
};

function projectListReducer(state=initialState, action) {
    console.log(state);
    switch (action.type) {
        case FETCH_PROJECTLIST_START:
            return {
                ...state,
                error: '',
                isFetching: true
            };
        case FETCH_PROJECTLIST_SUCCESS:
            return {
                ...state,
                error: '',
                isFetching: false,
                projectList: action.payload
            };
        case FETCH_PROJECTLIST_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            };
            default: 
            return state;
    }
}

export default projectListReducer;