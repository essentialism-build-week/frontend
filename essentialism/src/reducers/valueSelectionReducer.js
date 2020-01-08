import {
  GET_VALUES_START,
  GET_VALUES_SUCCESS,
  GET_VALUES_FAILURE,
  ADD_SELECTED_VALUES_START,
  ADD_SELECTED_VALUES_SUCCESS,
  ADD_SELECTED_VALUES_FAILURE,
  REMOVE_SELECTED_VALUES_START,
  REMOVE_SELECTED_VALUES_SUCCESS,
  REMOVE_SELECTED_VALUES_FAILURE
} from "../actions/valueSelectionAction";

export const initialValueSelection = {
  values: [],
  isFetching: false,
  error: '',
  selected: []
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
        error: '',
      };

    case GET_VALUES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error
      };

      case ADD_SELECTED_VALUES_START:
        return {
          ...state,
          isFetching: true,
       
        };

        case ADD_SELECTED_VALUES_SUCCESS:
          return {
            ...state,
            isFetching: false,
            error: ''
          };

          case ADD_SELECTED_VALUES_FAILURE:
            return {
              ...state,
              isFetching: false,
              error: action.payload.error
            }

            case REMOVE_SELECTED_VALUES_START:
              return {
                ...state,
                isFetching: true,
              };
      
              case REMOVE_SELECTED_VALUES_SUCCESS:
                return {
                  ...state,
                  isFetching: false,
                  selected: action.payload,
                  error: ''
                };
      
                case REMOVE_SELECTED_VALUES_FAILURE:
                  return {
                    ...state,
                    isFetching: false,
                    error: action.payload.error
                  }

    default:
      return state;
  }
};

export default reducer;
