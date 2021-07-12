import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../styles/socialNavbar.css";

class SocialNavbar extends Component {
  render() {
    return (
      <div className="s-navbar">
        <a href="" className="s-navbar-logo">
          5ocial
        </a>
        <ul className="s-navbar-main-links">
          <li className="main-link">
            <a href="">Bollywood</a>
          </li>
          <li className="main-link">
            <a href="">Movie Lists</a>
          </li>
          <li className="main-link">
            <a href="">Web Series</a>
          </li>
          <li className="main-link">
            <a href="">TRENDING</a>
          </li>
          <li className="main-link">
            <a href="">FACTS</a>
          </li>
          <li className="main-link">
            <a href="">TV</a>
          </li>
          <li className="main-link">
            <a href="">REVIEWS</a>
          </li>
          <li className="main-link">
            <a href="">Netflix</a>
          </li>
          <li className="main-link">
            <a href="">Hollywood</a>
          </li>
          <li className="main-link">
            <a href="">Box Office</a>
          </li>
          <li className="main-link">
            <a href="">Work For Social</a>
          </li>
        </ul>
        <ul className="s-navbar-social-links">
          <li className="social-link">
            <a href="">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li className="social-link">
            <a href="">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
          <li className="social-link">
            <a href="">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li className="social-link">
            <a href="">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SocialNavbar;
