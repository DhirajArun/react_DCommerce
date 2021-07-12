import React, { Component } from "react";

class ProgressBar extends Component {
  state = {};
  render() {
    const { width, height, progress } = this.props;
    return (
      <div
        className="progress-bar 100"
        style={{
          width: width,
          height: height,
          backgroundColor: "grey",
        }}
      >
        <div
          className="progress-bar progress"
          style={{
            height: height,
            width: `${progress}%`,
            backgroundColor: "orange",
            borderRadius: "0",
          }}
        ></div>
      </div>
    );
  }
}

export default ProgressBar;
