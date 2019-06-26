import React, { Component } from "react";
import Card from "./Card";

class Lane extends Component {
  state = {
    title: this.props.title,
    color: "border-" + this.props.color
  };

  get_classes() {
    return "m-2 col-sm border " + this.state.color;
  }

  render() {
    return (
      <div className={this.get_classes()}>
        <h1 className="text-center">{this.state.title}</h1>
        <Card />
      </div>
    );
  }
}

export default Lane;
