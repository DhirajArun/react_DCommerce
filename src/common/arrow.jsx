import React from "react";

function Arrow({ arrowSize, direction, color, position }) {
  let styles = {
    borderWidth: arrowSize,
    width: arrowSize,
    position: "absolute",
    borderStyle: "solid",
    borderColor: calcBorderColor(),
  };
  styles = { ...styles, ...calcPosition() };

  function calcPosition() {
    const positions = {};
    switch (direction) {
      case "top":
        positions.bottom = "100%";
        positions.left = position;
        positions.transform = "translateX(-50%)";
        break;
      case "bottom":
        positions.top = "100%";
        positions.left = position;
        positions.transform = "translateX(-50%)";
        break;
      case "left":
        positions.right = "100%";
        positions.bottom = position;
        positions.transform = "translateY(50%)";
        break;
      case "right":
        positions.left = "100%";
        positions.bottom = position;
        positions.transform = "translateY(50%)";
        break;
      default:
        console.log("wtf");
    }
    return positions;
  }

  function calcBorderColor() {
    if (direction === "top") {
      return `transparent transparent ${color} transparent`;
    } else if (direction === "bottom") {
      return `${color} transparent transparent transparent`;
    } else if (direction === "left") {
      return `transparent ${color} transparent transparent`;
    } else if (direction === "right") {
      return `transparent transparent transparent ${color}`;
    }
  }

  return <div style={styles}></div>;
}

Arrow.defaultProps = {
  arrowSize: "16px",
  direction: "top",
  color: "black",
  position: "50%",
};

export default Arrow;

//this will work only it the parent div positon is set to relative
