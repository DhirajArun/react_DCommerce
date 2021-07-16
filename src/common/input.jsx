import React, { Component } from "react";

class Input extends Component {
  render() {
    const { label, name, ...rest } = this.props;
    return (
      <div className="btm-oo">
        <label htmlFor={name} className="sign">
          {label}
        </label>
        <input name={name} id={name} className="font-std sign" {...rest} />
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
