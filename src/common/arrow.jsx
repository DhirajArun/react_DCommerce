import React from "react";

function Arrow({ arrowSize, direction, color }) {
  const styles = {
    borderWidth: arrowSize,
    width: arrowSize,
    position: "absolute",
    borderStyle: "solid",
    bottom: "100%",
    left: "50%",
    borderColor: calcBorderColor(),
    transform: "translateX(-50%)",
  };

  function calcPosition(){
      const positions = {}
      
  }

  function calcBottomPosition() {
    if (direction === "top") {
      return "100%";
    } else if (direction === "bottom") {
      return "100%";
    } else if (direction === "left") {
      return "100%";
    } else if (direction === "right") {
      return "100%";
    }
  }

  function calcLeftPosition() {
    if (direction === "top") {
      return "100%";
    } else if (direction === "bottom") {
      return "100%";
    } else if (direction === "left") {
      return "100%";
    } else if (direction === "right") {
      return "100%";
    }
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
};

export default Arrow;
