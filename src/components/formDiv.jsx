import React, { Component } from "react";

class FormDiv extends Component {
  style = {
    padding: "1rem",
    textAlign: "left",
    width: "350px",
    border: "1px solid #767676",
    borderRadius: "2%",
    marginBottom: "2rem",
  };
  render() {
    return <div style={this.style}>{this.props.children}</div>;
  }
}

export default FormDiv;
