import React, { Component } from "react";
import "./App.css";
import Lane from "./components/Lane";
import Card from "./components/Card";

class App extends Component {
  render() {
    return (
      <div className="row">
        <Lane />
        <Lane />
        <Lane />
      </div>
    );
  }
}

export default App;
