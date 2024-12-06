import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { createStore } from "redux";
import uiReducer, { defaultState } from "./reducers/uiReducer";
import { Map } from "immutable";
import { Provider } from "react-redux";

const theStore = createStore(uiReducer, Map(defaultState));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={theStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
