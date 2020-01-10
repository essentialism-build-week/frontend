import {
  GET_VALUES_START,
  GET_VALUES_SUCCESS,
  GET_VALUES_FAILURE,
  ADD_SELECTED_VALUES,
  REMOVE_SELECTED_VALUES,
} from "../actions/valueSelectionAction";

export const initialValueSelection = {
  values: [],
  isFetching: false,
  error: "",
  selected: []
};

export const valueSelectionReducer = (state = initialValueSelection, action) => {

  switch (action.type) {
    case GET_VALUES_START:
      return {
        ...state,
        isFetching: true,
       
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

    case ADD_SELECTED_VALUES:

    // goes through the STATE VALUES, checks to see if value.selected endpoint is true and pushes that into the selected array. 

    const isSelected = state.values.filter(value => value.selected == true)

    state.selected.push(isSelected)

    console.log(isSelected)

      return {
        ...state,
        selected: isSelected
      }


    case REMOVE_SELECTED_VALUES:

    // goes through the selected array and removes any false then pushes back into it.

    const valueToRemove = false;

    const isNotSelected = selected.filter(value => value !== valueToRemove);

    state.selected.push(isNotSelected);

      return {
        ...state,
        selected: isNotSelected
      };

    default:
      return state;
  }
};

export default valueSelectionReducer;
