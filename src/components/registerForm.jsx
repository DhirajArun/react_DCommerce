import React, { Component } from "react";
import Input from "../common/input";
import OptionInput from "../common/optionInput";
import SubmitButton from "../common/submitButton";
import FormDiv from "./formDiv";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import MiniSelect from "../common/miniSelect";

class RegisterForm extends Component {
  state = {
    data: { name: "", mobileNumber: "", email: "", password: "" },
    errors: {},
    currentCoutryCodeIndex: 3,
  };
  countryCodes = [
    { fLabel: "Albania +355", sLabel: "AL +355" },
    { fLabel: "Afghanistan +93", sLabel: "AF +93" },
    { fLabel: "Algeria +213", sLabel: "DZ +213" },
    { fLabel: "India +91", sLabel: "IN +91" },
  ];

  handleCodeSelect = (index) => {
    this.setState({ currentCoutryCodeIndex: index });
  };

  render() {
    const { currentCoutryCodeIndex, errors } = this.state;
    const { name, mobileNumber, email, password } = this.state.data;

    return (
      <div className="sign-form">
        <FormDiv>
          <h1>Create Account</h1>
          <form className="btm-ooo">
            <Input label="Your Name" name="name" value={name} />
            <OptionInput
              name="mobileNumber"
              label="Mobile Number"
              value={mobileNumber}
              options={this.countryCodes}
              selected={currentCoutryCodeIndex}
              onSelect={this.handleCodeSelect}
            />
            <div className="form-phone-div btm-oo">
              <MiniSelect
                options={this.countryCodes}
                selected={currentCoutryCodeIndex}
                onSelect={this.handleCodeSelect}
              />
              <Input name="phone" btm={false} />
            </div>
            <Input label="Email (Optional)" name="email" value={email} />
            <Input
              label="Password"
              name="password"
              type="password"
              value={password}
            />
            <div className="btm-ooo">
              <p className="sign">
                We will send you a text to verify your phone.
              </p>
              <p className="sign">Message and Data rates may apply.</p>
            </div>
            <SubmitButton>Continue</SubmitButton>
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
