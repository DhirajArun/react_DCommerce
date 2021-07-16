import React, { Component } from "react";

class Input extends Component {
  render() {
    const { label, name, error, ...rest } = this.props;
    return (
      <div className="btm-oo">
        <label htmlFor={name} className="sign">
          {label}
        </label>
        <input
          name={name}
          id={name}
          className={error ? "font-std sign sign-error" : "font-std sign"}
          {...rest}
        />
        {error && (
          <p className="sign sign-error">
            <span>!</span>
            {error}
          </p>
        )}
      </div>
    );
  }
}

Input.defaultProps = {
  type: "text",
};

export default Input;

//props needed:
// label
// name
// value
// onChange
// type -- optional
