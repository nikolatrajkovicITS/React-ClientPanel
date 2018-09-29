import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppNavbar from "./components/layout/AppNavbar";
import "./App.css";

class App extends Component {
  addEventListener() {
    let a = 3;
    let b = 2;
    return a + b;
  }
  render() {
    return (
      <Router>
        <div className="App">
          <AppNavbar />
          <div className="container">
            <h1>Hello</h1>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
