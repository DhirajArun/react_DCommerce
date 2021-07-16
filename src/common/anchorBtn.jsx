import React from "react";
import { Link } from "react-router-dom";

function AnchorBtn({ to }) {
  return (
    <button className="btn-anchor">
      <Link to={to}>Create your Amazon account</Link>
    </button>
  );
}

export default AnchorBtn;
