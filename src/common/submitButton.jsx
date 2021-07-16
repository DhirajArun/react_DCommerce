import React from "react";

function SubmitButton(props) {
  return (
    <button className="btn-submit" type="submit">
      {props.children}
    </button>
  );
}

export default SubmitButton;
