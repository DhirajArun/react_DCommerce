import React, { Component } from "react";
import AmazonLogo from "./amazonLogo";
import Collapser from "../common/collapser";
import Input from "../common/input";
import "../styles/components.css";
import Form from "../common/form";
import AnchorBtn from "../common/anchorBtn";
import FormDiv from "./formDiv";
import Joi from "joi";
import { userRegex } from "../utils/regexs";
import auth from "../services/authService";

class SignInForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
    displayPwd: false,
  };

  schema = {
    username: Joi.string()
      .max(40)
      .regex(userRegex)
      .required()
      .label("Username"),
    password: Joi.string().min(6).max(15).required().label("Password"),
  };

  async doSubmit() {
    try {
      const response = await auth.login(this.state.data);
      console.log(response);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  doPartialSubmit = () => {
    if (!this.state.displayPwd) this.setState({ displayPwd: true });
  };

  render() {
    const { displayPwd } = this.state;
    const submit = displayPwd
      ? this.handleSubmit
      : (e) => {
          this.handlePartialSubmit(e, ["username"]);
        };

    return (
      <div className="sign-form">
        <FormDiv>
          {this.renderTitle("Sign-In")}
          <form onSubmit={submit} className="btm-oo">
            {displayPwd
              ? this.renderInput("password", "Password")
              : this.renderInput("username", "Email or mobile Number")}
            {this.renderButton(displayPwd ? "sign-In" : "Continue")}
          </form>
          <p className="font-sm">
            By continuing, you agree to Amazon's{" "}
            <a href="#">Condition Of Use</a> and <a href="#">Privacy Notice</a>.
          </p>

          <Collapser title="Need help?">
            <li>
              <a href="">Forgot Password</a>
            </li>
            <li>
              <a href="">Other issues with Sign-In</a>
            </li>
          </Collapser>
        </FormDiv>

        <div className="secondary-form btm-ooo">
          <div className="separator-bar"></div>
          <p className="font-sm new-t-a">New to Amazon?</p>
          <AnchorBtn to="/register" />
        </div>
      </div>
    );
  }
}

export default SignInForm;
