import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { createStore } from "redux";
import uiReducer, { defaultState } from "./reducers/uiReducer";
import { Map } from "immutable";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Modifying to support Redux Dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const theStore = createStore(
  uiReducer,
  Map(defaultState),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={theStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
