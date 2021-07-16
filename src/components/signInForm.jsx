import React, { Component } from "react";
import AmazonLogo from "./amazonLogo";
import Collapser from "../common/collapser";
import Input from "../common/input";
import "../styles/components.css";
import { Link } from "react-router-dom";
import SubmitButton from "../common/submitButton";
import AnchorBtn from "../common/anchorBtn";
import FormDiv from "./formDiv";

class SignInForm extends Component {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  handleChange = ({ currentTarget: input }) => {
    const { data } = this.state;
    data[input.name] = input.value;
    this.setState({ data });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div className="sign-form">
        <FormDiv>
          <h1 className="type-header btm-oo">Sign-In</h1>
          <form onSubmit={this.handleSubmit} className="btm-ooo">
            <Input
              label="Email or mobile number"
              name="username"
              value={data.username}
              onChange={this.handleChange}
            />
            <SubmitButton>Continue</SubmitButton>
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
