import { combineReducers } from 'redux';

// Reducers
// import projectCompareReducer from './projectCompareReducer';
import projectListReducer from './projectListReducer';
import addNewProjectReducer from './addNewProjectReducer';
// import selectTopThreeReducer from './selectTopThreeReducer';
// import topThreeSelectionReducer from './topThreeSelectionReducer';
// import valueExplanationReducer from './valueExplanationReducer';
import reducer from './valueSelectionReducer';

const rootReducer = combineReducers ({
  // projectCompareReducer,
  projectListReducer,
  addNewProjectReducer,
  // selectTopThreeReducer,
  // topThreeSelectionReducer,
  // valueExplanationReducer,
  reducer
});

export default rootReducer;