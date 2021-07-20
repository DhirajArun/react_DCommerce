import React from "react";
import { Link } from "react-router-dom";

function AnchorBtn({ to }) {
  return (
    <Link to={to} className="anchor-btn no-link">
      Create your Amazon account
    </Link>
  );
}

export default AnchorBtn;
