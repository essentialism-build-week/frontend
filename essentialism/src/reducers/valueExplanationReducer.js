const initialValueExplanation = {
    explanation: ''
};

const reducer = (state = initialValueExplanation, action) {
    switch (action.type) {
        case VALUE_EXPLANATION: 
        return {
            ...state,
            explanation: action.payload
        }
        default: 
        return state;
    }
}