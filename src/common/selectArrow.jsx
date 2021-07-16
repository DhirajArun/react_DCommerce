import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function SelectArrow({ fontSize }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        justifyItems: "left",
        fontSize: "7px",
      }}
    >
      <FontAwesomeIcon
        icon={faCaretUp}
        style={{ position: "relative", top: ".1em" }}
      />
      <FontAwesomeIcon
        icon={faCaretDown}
        style={{ position: "relative", bottom: ".1em" }}
      />
    </div>
  );
}

export default SelectArrow;
