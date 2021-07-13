import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faSortDown } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import Search from "./search";
import "../styles/navbar.css";
import { getCatlogs } from "../services/fakeCatlogService";
import AmazonLogo from "./amazonLogo";

class Navbar extends Component {
  state = {
    catlogs: [],
  };

  componentDidMount() {
    this.setState({ catlogs: getCatlogs() });
  }

  render() {
    return (
      <div className="nav-bar">
        <AmazonLogo />

        <div className="location">
          <div className="location-icon">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
          <div className=" ln-text">
            <span className=" little">Hello</span>
            <span className=" non-little">Select your address</span>
          </div>
        </div>
        <Search catlogs={this.state.catlogs} />
        <div className="lang">
          <span className="lang-flag"></span>
          <FontAwesomeIcon icon={faSortDown} style={{ fontSize: "13px" }} />
        </div>
        <div className="sign ln-text">
          <span className="sign-hello little">Hello, sign in</span>
          <h5 className="non-little">
            Account & Lists <FontAwesomeIcon icon={faSortDown} />
          </h5>
        </div>
        <div className="order ln-text">
          <span className="little">Return</span>
          <span className="non-little">& Orders</span>
        </div>
        <div className="cart">
          <span className="cart-number">0</span>
          <span className="cart-bg"></span>
        </div>
      </div>
    );
  }
}

export default Navbar;
