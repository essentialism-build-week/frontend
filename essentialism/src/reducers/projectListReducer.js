export const initialProjectList = {
    projectList: [],
    isFetching: false
};

export const reducer = (state = initialProjectList, action) {
    switch (action.type) {
        case PROJECT_LIST:
            return {
                ...state,
                projectList: action.payload
            }
            default: 
            return state;
    }
}

export default reducer;