export const initialTopThreeValues = {
    topThreeValues: []
};

export const reducer = (state = initialTopThreeValues, action) => {
    switch (action.type) {
        case GET_TOPTHREE: 
        return {
            ...state,
            topThreeValues: action.payload
        };
        default:
            return state;
    }
}

export default reducer;