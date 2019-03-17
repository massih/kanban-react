import React, { Component } from "react";
import Card from "./Card";

class Lane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      color: null
    };
  }
  render() {
    return (
      <div className="col-sm border border-primary">
        <Card />
      </div>
    );
  }
}

export default Lane;
