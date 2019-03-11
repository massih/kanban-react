import React, { Component } from "react";

class Issue extends Component {
  state = {
    title: null,
    text: null
  };

  style = { width: "18rem" };
  render() {
    return (
      <div className="card  m-2 border-primary" style={this.style}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    );
  }
}

export default Issue;
