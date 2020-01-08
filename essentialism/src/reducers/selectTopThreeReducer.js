export const initialSelectTopTHree = {
    topThreeSelected: []
};

export const reducer = (state = initialSelectTopTHree, action) => {
    switch (action.type) {
        case SELECTED_VALUES:
            return {
                ...state,
                topThreeSelected: action.payload
            };
            default: 
            return state;
    }
}