import React from "react";
import Input from "../common/input";
import OptionInput from "../common/optionInput";
import SubmitButton from "../common/submitButton";
import FormDiv from "./formDiv";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

function RegisterForm(props) {
  return (
    <div className="sign-form">
      <FormDiv>
        <h1>Create Account</h1>
        <form className="btm-ooo">
          <Input label="Your Name" name="name" />
          <OptionInput name="mobileNumber" label="Mobile Number" />
          <Input label="Email (Optional)" name="email" />
          <Input label="Password" name="password" type="password" />
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

export default RegisterForm;
