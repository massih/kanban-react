import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Lane from "./components/Lane";
import MoverPanel from "./components/MoverPanel";

library.add(fab, fas);

class App extends Component {
  state = {
    lanes: [
      { id: 1, title: "to-do", color: "warning" },
      { id: 2, title: "doing", color: "primary" },
      { id: 3, title: "done", color: "success" }
    ]
  };
  render() {
    return (
      <div className="row">
        {this.state.lanes.map(lane => (
          <Lane key={lane.id} title={lane.title} color={lane.color} />
        ))}
        <MoverPanel />
      </div>
    );
  }
}

export default App;
