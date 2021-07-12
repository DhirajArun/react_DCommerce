import React from "react";
import ProgressBar from "../common/progressBar";

const AmazonProgressBar = ({ width, height, progress }) => {
  return (
    <div
      className="grid-container"
      style={{
        width: "200px",
        display: "grid",
        gridTemplateColumns: "25% 60% 12%",
        gridAutoRows: "40px",
        justifyItems: "start",
        alignItems: "start",
      }}
    >
      <p style={{}}>5 Star</p>
      <div
        style={{
          padding: ".3em 0 0 .3em",
        }}
      >
        <ProgressBar width={width} height={height} progress={progress} />
      </div>
      <p style={{ margin: "0" }}>{`${Math.round(progress)}%`}</p>
    </div>
  );
};

export default AmazonProgressBar;
