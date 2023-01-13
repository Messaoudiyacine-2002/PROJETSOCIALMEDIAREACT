import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
//import { PersistGate } from "redux-persist/integration/react";
import store from "./store/ReduxStore";
import App from "./App";

// stack overflow


ReactDOM.createRoot(document.getElementById("root")).render(
<Provider store={store}>
  <Router>
      <App />
  </Router>
    </Provider>
)

