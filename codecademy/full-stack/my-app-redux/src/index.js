import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { App } from "./app/App.js";
// Import 'store' here.
import { store } from "./app/store.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <h1>dd</h1>
//   </React.StrictMode>
// );
// ReactDOM.render(
//   <App state={store.getState()} dispatch={store.dispatch} />,
//   document.getElementById("root")
// );
const torender = () => {
  // Pass `state` and `dispatch` props to <App />
  ReactDOM.render(
    <App state={store.getState()} dispatch={store.dispatch} />,
    document.getElementById("root")
  );
};
torender();
// Subscribe render to changes to the `store`
store.subscribe(torender);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
