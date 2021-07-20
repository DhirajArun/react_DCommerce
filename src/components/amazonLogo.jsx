import React from "react";
import { Link } from "react-router-dom";

function AmazonLogo(props) {
  function getBg() {
    if (props.color === "black") {
      return {
        display: "block",
        width: "103px",
        height: "31px",
        backgroundSize: "400px 750px",
        backgroundImage:
          "url(https://m.media-amazon.com/images/S/sash/BgnVchebDR5Ds4h.png)",
        backgroundPosition: "-5px -130px",
      };
    }
    if (props.color === "white") {
      return {
        display: "block",
        width: "97px",
        height: "30px",
        backgroundSize: "350px",
        backgroundImage:
          "url(https://images-eu.ssl-images-amazon.com/images/G/31/gno/sprites/nav-sprite-global-2x-hm-dsk-reorg._CB405936311_.png)",
        backgroundPosition: "-10px -51px",
      };
    }
  }
  return (
    <Link to="/" style={{ display: "flex" }} className="no-link">
      <span style={getBg()}></span>
      <span
        style={{
          fontSize: "14px",
          fontWeight: "600",
          position: "relative",
          top: "4.3px",
        }}
      >
        .in
      </span>
    </Link>
  );
}

AmazonLogo.defaultProps = {
  color: "white",
};

export default AmazonLogo;
