import React, { Component } from "react";
import Input from "./input";
import CSelect from "./cSelect";
import withSignBottomMargin from "../HOC/withSignBottomMargin";

class InputWithSelect extends Component {
  render() {
    const {
      name,
      selectName,
      label,
      options,
      selectedValue,
      onSelect,

      ...rest
    } = this.props;

    return (
      <div className="input-with-select-wrapper">
        <label htmlFor={name} className="sign">
          {label}
        </label>
        <div className="input-with-select">
          <CSelect
            name={selectName}
            options={options}
            value={selectedValue}
            onSelect={onSelect}
            itemLabelName="fLabel"
            displayLabelName="sLabel"
          />

          <Input name={name} btm={false} {...rest} />
        </div>
      </div>
    );
  }
}

export default withSignBottomMargin(InputWithSelect);
