import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { getRatingData } from "../utils/rating";
import Rating from "../common/rating";
import "../styles/components.css";
import RatingPopup from "./ratingPopup";
import withTooltip from "../HOC/withTooltip";

let OnlyRating = withTooltip((props) => {
  return (
    <div className="only-rating">
      <Rating avgRating={props.avgRating} />
      <FontAwesomeIcon
        icon={faChevronDown}
        className="amazon-rating-down-arrow"
      />
      {props.isTooltip && (
        <RatingPopup
          avgRating={props.avgRating}
          totalRaters={props.totalRaters}
          progressWidth={props.progressWidth}
          progressHeight={props.progressHeight}
          starPercentage={props.starPercentage}
        />
      )}
    </div>
  );
});

class AmazonRating extends Component {
  render() {
    const { rating } = this.props;
    const { totalRaters, avgRating, starPercentage } = getRatingData(rating);
    const progressWidth = "100px";
    const progressHeight = "20px";

    return (
      <React.Fragment>
        <div className="amazon-rating">
          <OnlyRating
            avgRating={avgRating}
            totalRaters={totalRaters}
            progressWidth={progressWidth}
            progressHeight={progressHeight}
            starPercentage={starPercentage}
          />
          <Link to="/">{totalRaters}</Link>
        </div>
      </React.Fragment>
    );
  }
}

AmazonRating.defaultProps = {
  totalStars: 5,
};

export default AmazonRating;
