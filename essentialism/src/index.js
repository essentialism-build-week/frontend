import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import valueSelectionReducer from "./reducers/valueSelectionReducer";
import topThreeSelectionReducer from "./reducers/topThreeSelectionReducer";
import selectTopThreeReducer from "./reducers/selectTopThreeReducer";
import valueExplanationReducer from "./reducers/valueExplanationReducer";
import projectListReducer from "./reducers/projectListReducer";
import projectCompareReducer from "./reducers/projectCompareReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  valueSelectionReducer,
  topThreeSelectionReducer,
  selectTopThreeReducer,
  valueExplanationReducer,
  projectListReducer,
  projectCompareReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
