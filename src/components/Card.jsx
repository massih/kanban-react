import React, { Component } from "react";

class Card extends Component {
  state = {
    title: this.props.title,
    text: this.props.text
  };

  getTitle() {
    return this.state.title ? this.state.title : "NO-TITLE";
  }

  render() {
    return (
      <div className="card m-2 border-primary">
        <div className="card-body">
          <h5 contentEditable="true" className="card-title">
            {this.getTitle()}
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
