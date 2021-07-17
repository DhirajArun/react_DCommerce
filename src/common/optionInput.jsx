import React, { Component } from "react";
import Input from "./input";
import MiniSelect from "./miniSelect";

class OptionInput extends Component {
  render() {
    const { name, label, error, options, selected, onSelect, ...rest } =
      this.props;

    return (
      <div>
        <label htmlFor={name} className="sign" style={{ display: "block" }}>
          {label}
        </label>
        <div className="option-input-main btm-oo">
          <MiniSelect
            options={options}
            selected={selected}
            onSelect={onSelect}
          />

          <input
            className={
              error ? "sign option-input-in sign-error" : "sign option-input-in"
            }
            name={name}
            id={name}
            {...rest}
          />
          {error && (
            <p className="sign sign-error sign-option-error">
              <span>!</span>
              {error}
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default OptionInput;
