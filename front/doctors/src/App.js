import React from "react";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { generateReducers } from "./reducers";
import theme from "./theme"
import Router from "./containers/Router";

export const history = createBrowserHistory();

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
];

const store = createStore(generateReducers(history), compose(...middlewares));

export const App = () => (
  <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router history={history} />
      </MuiThemeProvider>
  </Provider>
);

export default App;