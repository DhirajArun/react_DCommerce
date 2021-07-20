import React from "react";

function InputError({ error }) {
  if (error) {
    return (
      <p className="sign sign-error">
        <span>!</span>
        {error}
      </p>
    );
  }
  return null;
}

export default InputError;
