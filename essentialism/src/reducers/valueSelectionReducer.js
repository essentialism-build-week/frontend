import {
  GET_VALUES_START,
  GET_VALUES_SUCCESS,
  GET_VALUES_FAILURE
} from "../actions/valueSelectionAction";

export const initialValueSelection = {
  values: [],
  isFetching: false,
  error: ""
};

export const reducer = (state = initialValueSelection, action) => {
  switch (action.type) {
    case GET_VALUES_START:
      return {
        ...state,
        isFetching: true
      };

    case GET_VALUES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        values: action.payload,
        error: ""
      };

    case GET_VALUES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error
      };

    default:
      return state;
  }
};

export default reducer;
