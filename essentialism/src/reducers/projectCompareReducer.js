export const initialProjectCompare = {
    projects: [],
    topThreeList: []
};


export const reducer = (state = initialProjectCompare, action) {
    switch (action.type) {
        case PROJECT_COMPARE:
            return {
                ...state,
                projects: action.payload,
                topThreeList: action.payload
            }
            default: 
            return state;
    }
}