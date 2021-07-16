import React, { Component } from "react";
import Input from "./input";
import MiniSelect from "./miniSelect";

class OptionInput extends Component {
  state = { selected: 0 };
  countryCodes = [
    { fLabel: "Albania +355", sLabel: "AL +355" },
    { fLabel: "Afghanistan +93", sLabel: "AF +93" },
    { fLabel: "Algeria +213", sLabel: "DZ +213" },
    { fLabel: "India +91", sLabel: "IN +91" },
  ];

  handleSelect = (index) => {
    this.setState({ selected: index });
  };

  render() {
    const { name, label, ...rest } = this.props;

    return (
      <div>
        <label htmlFor={name} className="sign" style={{ display: "block" }}>
          {label}
        </label>
        <div
          className="option-input-main btm-oo"
          style={{
            display: "grid",
            gridTemplateColumns: "auto 72%",
          }}
        >
          <MiniSelect
            options={this.countryCodes}
            selected={this.state.selected}
            onSelect={this.handleSelect}
          />
          <input
            className="option-input-in sign"
            name={name}
            id={name}
            {...rest}
          />
        </div>
      </div>
    );
  }
}

export default OptionInput;
