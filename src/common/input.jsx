import React, { Component } from "react";
import InputError from "./inputError";
import withSignBottomMargin from "../HOC/withSignBottomMargin";

class Input extends Component {
  render() {
    const { label, name, error, btm, ...rest } = this.props;
    return (
      <React.Fragment>
        {label && (
          <label htmlFor={name} className="sign">
            {label}
          </label>
        )}
        <input
          name={name}
          id={name}
          className={error ? "font-std sign sign-error" : "font-std sign"}
          {...rest}
        />
        <InputError error={error} />
      </React.Fragment>
    );
  }
}

Input.defaultProps = {
  type: "text",
  btm: true,
};

export default withSignBottomMargin(Input);

//props needed:
// label -- optional
// name
// error
// value
// onChange
// type -- optional
// btm -- optional
