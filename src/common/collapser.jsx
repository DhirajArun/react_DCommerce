import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";

function Collapser(props) {
  const [isOpened, setOpen] = useState(false);
  const handleClick = function (e) {
    e.preventDefault();
    if (isOpened) return setOpen(false);
    setOpen(true);
  };
  return (
    <div style={{ display: "flex", fontSize: "13px" }}>
      <FontAwesomeIcon
        icon={isOpened ? faCaretDown : faCaretRight}
        style={{
          display: "inline-block",

          width: "20px",
        }}
      />
      <ul
        style={{ textDecoration: "none", display: "inline-block" }}
        className="collapser"
      >
        <li style={{ display: "block" }}>
          <a href="" onClick={handleClick}>
            {props.title}
          </a>
        </li>
        {isOpened && props.children}
      </ul>
    </div>
  );
}

export default Collapser;
