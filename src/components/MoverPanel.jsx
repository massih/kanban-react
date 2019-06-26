import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MoverPanel extends Component {
  state = {};
  render() {
    return (
      <div className="m-1 col-sm-1">
        <FontAwesomeIcon icon="arrow-alt-circle-right" />
      </div>
    );
  }
}

export default MoverPanel;
