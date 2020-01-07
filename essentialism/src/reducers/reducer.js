
// VALUE SELECTION

const initialValueSelection = {
    values: []
};

const reducer = (state = initialValueSelection, action) => {
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

// TOP THREE SELECTION

const initialTopThreeValues = {
    topThreeValues: []
};

const reducer = (state = initialTopThreeValues, action) => {
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

// SELECT TOP THREE

const initialSelectTopTHree = {
    topThreeSelected: []
};

const reducer = (state = initialSelectTopTHree, action) => {
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

// VALUE EXPLANATION

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

// PROJECT LIST

const initialProjectList = {
    projectList: []
};

const reducer = (state = initialProjectList, action) {
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

// PROJECT COMPARE

const initialProjectCompare = {
    projects: [],
    topThreeList: []
};


const reducer = (state = initialProjectCompare, action) {
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
