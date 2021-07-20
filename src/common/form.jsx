import React, { Component } from "react";
import Input from "./input";
import InputWithSelect from "./inputWithSelect";
import SubmitButton from "./submitButton";
import dJoi from "../utils/dJoi";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate() {
    const errorMsgs = dJoi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });
    const errors = {};

    if (errorMsgs) {
      errorMsgs.forEach((e) => {
        errors[e.path] = e.message;
      });
    }
    this.setState({ errors });
  }

  validateProperty(input) {
    const data = { [input.name]: input.value };
    const schema = { [input.name]: this.schema[input.name] };

    const errorMsgs = dJoi.validate(data, schema);
    if (errorMsgs) {
      return errorMsgs[0].message;
    } else return null;
  }

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const data = { ...this.state.data };
    data[input.name] = input.value;
    const errorMessage = this.validateProperty(input);
    errors[input.name] = errorMessage;
    this.setState({ data, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.validate();
    console.log("Submitted");
  };

  handleCustomSelect = ({ name, value }) => {
    const data = { ...this.state.data };
    data[name] = value;
    this.setState({ data });
  };

  renderTitle(title) {
    return <h1 className="type-header btm-oo">{title}</h1>;
  }

  renderInput(name, label, type) {
    const { data, errors } = this.state;
    return (
      <Input
        error={errors[name]}
        label={label}
        name={name}
        value={data[name]}
        onChange={this.handleChange}
        type={type}
      />
    );
  }

  renderInputWS(name, selectName, label, options) {
    const { data, errors } = this.state;
    return (
      <InputWithSelect
        name={name}
        selectName={selectName}
        label={label}
        value={data[name]}
        options={options}
        selectedValue={data[selectName]}
        value={data[name]}
        onChange={this.handleChange}
        onSelect={this.handleCustomSelect}
        error={errors[name]}
      />
    );
  }

  renderSubmitButton(label) {
    return <SubmitButton>{label}</SubmitButton>;
  }
}

export default Form;
