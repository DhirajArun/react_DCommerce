import React, { Component } from "react";
import FormDiv from "./formDiv";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Joi, { allow } from "joi";
import Form from "../common/form";

class RegisterForm extends Form {
  state = {
    data: {
      name: "",
      mobileNumber: "",
      email: "",
      password: "",
      countryCode: 3,
    },
    errors: {},
    currentCoutryCodeIndex: 3,
  };
  countryCodes = [
    { fLabel: "Albania +355", sLabel: "AL +355" },
    { fLabel: "Afghanistan +93", sLabel: "AF +93" },
    { fLabel: "Algeria +213", sLabel: "DZ +213" },
    { fLabel: "India +91", sLabel: "IN +91" },
  ];

  schema = {
    name: Joi.string().max(20).required().label("Name"),
    mobileNumber: Joi.string()
      .pattern(/^[0-9]{10}$/)
      .required()
      .label("Mobile Number"),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .label("Email"),
    password: Joi.string().min(6).max(15).required().label("Password"),
    countryCode: Joi.number()
      .integer()
      .min(0)
      .max(this.countryCodes.length - 1)
      .required(),
  };

  // schema = Joi.object({
  //   name: Joi.string().min(1).max(20).required().label("Name"),
  //   mobileNumber: Joi.string()
  //     .length(10)
  //     .pattern(/^[0-9]{10}$/)
  //     .require()
  //     .label("Mobile Number"),
  //   email: Joi.string().email(),
  //   password: Joi.string().min(6).max(15).required().label("Password"),
  //   countryCodes: Joi.number()
  //     .integer()
  //     .min(0)
  //     .max(this.countryCodes.length - 1)
  //     .require(),
  // });

  render() {
    return (
      <div className="sign-form">
        <FormDiv>
          {this.renderTitle("Create Account")}
          <form className="btm-ooo" onSubmit={this.handleSubmit}>
            {this.renderInput("name", "Your Name")}
            {this.renderInputWS(
              "mobileNumber",
              "countryCode",
              "Mobile Number",
              this.countryCodes
            )}
            {this.renderInput("email", "Email")}
            {this.renderInput("password", "Password", "password")}

            <div className="btm-ooo">
              <p className="sign">
                We will send you a text to verify your phone.
              </p>
              <p className="sign">Message and Data rates may apply.</p>
            </div>
            {this.renderSubmitButton("Continue")}
          </form>
          <div>
            <p className="sign">
              Already have an account?{" "}
              <a href="/signin">
                Sign in <FontAwesomeIcon icon={faCaretRight} />
              </a>
            </p>
            <p className="sign">
              Buying for work?{" "}
              <a href="">
                Create a free business account{" "}
                <FontAwesomeIcon icon={faCaretRight} />{" "}
              </a>
            </p>
          </div>
        </FormDiv>
      </div>
    );
  }
}

export default RegisterForm;
