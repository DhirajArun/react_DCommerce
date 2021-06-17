import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as faUnStar } from "@fortawesome/free-regular-svg-icons";
import _, { rangeRight } from "lodash";
import "../styles/rating.css";

const Rating = ({ rating, totalStars }) => {
  const { isHalf, filledStars, unfilledStars } = getRatingData(
    rating,
    totalStars
  );
  return (
    <ul className="rating">
      {filledStars.length > 0 &&
        filledStars.map((star) => (
          <li className="rating" key={star}>
            <FontAwesomeIcon icon={faStar} />
          </li>
        ))}

      {isHalf && (
        <li className="rating" key="half">
          <FontAwesomeIcon icon={faStarHalfAlt} />
        </li>
      )}
      {unfilledStars.length > 0 &&
        unfilledStars.map((star) => (
          <li className="rating" key={star}>
            <FontAwesomeIcon icon={faUnStar} />
          </li>
        ))}
    </ul>
  );
};

function getRatingData(number, totalStars) {
  const beforeDecimal = Math.floor(number);
  const afterDecimal = Math.round((number % 1) * 10) / 10;

  if (afterDecimal > 0.7) {
    return {
      isHalf: false,
      filledStars: _.range(beforeDecimal + 1),
      unfilledStars: _.range(totalStars - (beforeDecimal + 1)),
    };
  } else if (afterDecimal > 0.2) {
    return {
      isHalf: true,
      filledStars: _.range(beforeDecimal),
      unfilledStars: _.range(totalStars - beforeDecimal),
    };
  } else if (afterDecimal >= 0) {
    return {
      isHalf: false,
      filledStars: _.range(beforeDecimal),
      unfilledStars: _.range(totalStars - beforeDecimal),
    };
  }
}

Rating.defaultProps = {
  totalStars: 5,
};

export default Rating;
