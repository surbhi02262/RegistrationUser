import React from "react";
import ReactDOM from "react-dom";
import "./Styles/bootstrap.css";
import "./Styles/index.css";
import App from "./Components/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Store/index";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={Store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
