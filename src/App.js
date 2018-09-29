import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import AppNavbar from "./components/layout/AppNavbar";
import Dashboard from "./components/layout/Dashboard";

import "./App.css";

class App extends Component {
  addEventListener() {
    let a = 3;
    let b = 2;
    return a + b;
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Dashboard} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
