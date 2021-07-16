import React, { Component } from "react";

class SimpleFooter extends Component {
  render() {
    return (
      <div className="form-footer">
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
    );
  }
}

export default SimpleFooter;
