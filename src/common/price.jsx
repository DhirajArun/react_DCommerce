import React, { Component } from "react";
import "../styles/price.css";

class Price extends Component {
  state = {};
  render() {
    const { mrp, off } = this.props;
    return (
      <div className="price-div">
        <h5 className="price price-discounted">
          <span>₹</span>
          {`${getDiscounted(mrp, off)}`}
        </h5>
        <p className="price price-mrp">{`₹${mrp.toLocaleString("en-US")}`}</p>
        <p className="price price-off">{`save ₹${getSaved(
          mrp,
          off
        )} (${off}%)`}</p>
      </div>
    );
  }
}

function getDiscounted(number, percentage) {
  const discounted = Math.round(number - (percentage / 100) * number);
  return discounted.toLocaleString("en-US");
}

function getSaved(number, percentage) {
  const saved = Math.round((percentage / 100) * number);
  return saved.toLocaleString("en-US");
}

Price.defaultProps = {
  currency: "inr",
};

export default Price;
