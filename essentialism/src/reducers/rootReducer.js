import { combineReducers } from 'redux';

// Reducers
// import projectCompareReducer from './projectCompareReducer';
import projectListReducer from './projectListReducer';
// import selectTopThreeReducer from './selectTopThreeReducer';
// import topThreeSelectionReducer from './topThreeSelectionReducer';
// import valueExplanationReducer from './valueExplanationReducer';
import valueSelectionReducer from './valueSelectionReducer';

export default combineReducers ({
  // projectCompareReducer,
  projectListReducer,
  // selectTopThreeReducer,
  // topThreeSelectionReducer,
  // valueExplanationReducer,
  valueSelectionReducer
});