import React, { Component } from "react";
import AmazonLogo from "./amazonLogo";
import Collapser from "../common/collapser";
import "../styles/components.css";

class SignInForm extends Component {
  state = {};
  render() {
    return (
      <div className="signin-form">
        <div class="form-nav pad-oo">
          <AmazonLogo color="black" />
        </div>

        <div className="main-form">
          <h1 className="type-header btm-oo">Sign-In</h1>
          <form>
            <label htmlFor="user-name" className="font-std-bd">
              Email or mobile phone number
            </label>
            <input type="text" id="user-name" className="btm-oo pad-" />
            <button className="btn-continue btm-ooo pad-o">Continue</button>
          </form>
          <p className="font-sm">
            By continuing, you agree to Amazon's{" "}
            <a href="#">Condition Of Use</a> and <a href="#">Privacy Notice</a>.
          </p>
          <ul className="font-std">
            <li>
              <Collapser>
                <li>
                  <a href="">Forgot Password</a>
                </li>
                <li>
                  <a href="">Other issues with Sign-In</a>
                </li>
              </Collapser>
            </li>
            {}
          </ul>
        </div>

        <div className="secondary-form btm-ooo">
          <div className="separator-bar"></div>
          <p className="font-sm new-t-a">New to Amazon?</p>
          <button className="font-std btn-signup pad-o">
            Create your Amazon account
          </button>
        </div>

        <div className="form-footer font-xsm">
          <ul className="footer-links col">
            <li className="footer-link">
              <a href="">Condition of Use</a>
            </li>
            <li className="footer-link">
              <a href="">Privacy Notice</a>
            </li>
            <li className="footer-link">
              <a href="">Help</a>
            </li>
          </ul>
          <p>© 1996-2021, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    );
  }
}

export default SignInForm;
