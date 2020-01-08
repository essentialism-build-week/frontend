export const initialValueSelection = {
    values: []
};

export const reducer = (state = initialValueSelection, action) => {
    switch (action.type) {
        case GET_VALUES:
        return {
            ...state,
            values: action.payload
        };
        default: 
        return state;
    }
   
}

export default reducer;