import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faSortDown } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import Search from "./search";
import "../styles/navbar.css";
import { getCatlogs } from "../services/fakeCatlogService";
import AmazonLogo from "./amazonLogo";
import { Link } from "react-router-dom";
import withHoverFeature from "../HOC/withHoverFeature";
import Arrow from "../common/arrow";

class Navbar extends Component {
  state = {
    catlogs: [],
  };

  componentDidMount() {
    this.setState({ catlogs: getCatlogs() });
  }

  // handleLangHover(hovered) {
  //   console.log("hello world", hovered);
  // }

  render() {
    // const langElement = (
    //   <Link className="no-link">
    //     <span className="lang-flag"></span>
    //     <span className="font-std ltp---">
    //       <FontAwesomeIcon icon={faSortDown} />
    //     </span>
    //   </Link>
    // );
    // const Lang = withHoverFeature(langElement, this.handleLangHover);

    return (
      <div className="bg-black white flex-row flex-jcsa flex-alc pad-o">
        <AmazonLogo />

        <button className="non-btn flex-row flex-ale">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="rtm-" />
          <div>
            <p className="font-sm nav">Hello</p>
            <p className="font-std-bd nav">Select your address</p>
          </div>
        </button>

        <Search catlogs={this.state.catlogs} />

        <Lang />

        <Link className="no-link" to="/signin">
          <p className="font-sm nav">Hello, Sign in</p>
          <p className="font-std-bd nav">
            Account & Lists
            <span className="ltp-">
              <FontAwesomeIcon icon={faSortDown} />
            </span>
          </p>
        </Link>
        <Link className="no-link" to="/">
          <p className="font-sm nav">Returns</p>
          <p className="font-std-bd nav">& Orders</p>
        </Link>
        <div className="cart">
          <span className="cart-number">0</span>
          <span className="cart-bg"></span>
        </div>
      </div>
    );
  }
}

const Lang = withHoverFeature((props) => {
  return (
    <div className="relative">
      <Link className="no-link">
        <span className="lang-flag"></span>
        <span className="font-std ltp---">
          <FontAwesomeIcon icon={faSortDown} />
        </span>
      </Link>
      {props.isHover && (
        <div
          className="absolute bg-white black pad-oo flex-col flex-als"
          style={{
            width: "max-content",
            top: "130%",
            transform: "translateX(-30%)",
          }}
        >
          <Arrow color="white" arrowSize="10px" position="51.6%" />
          <div>
            <input type="radio" className="rtm-"></input>
            <label>English - EN</label>
          </div>
        </div>
      )}
    </div>
  );
});

export default Navbar;
