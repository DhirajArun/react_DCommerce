import React, { Component } from "react";
import SProducts from "./sProducts";
import "../styles/components.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <SProducts />;
      </React.Fragment>
    );
  }
}

export default Home;
