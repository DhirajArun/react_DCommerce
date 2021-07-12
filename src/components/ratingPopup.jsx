import React from "react";
import Rating from "../common/rating";
import AmazonProgressBar from "./amazonProgressBar";
import "../styles/ratingPopup.css";
import Arrow from "../common/arrow";

function RatingPopup({
  avgRating,
  totalRaters,
  progressWidth,
  progressHeight,
  starPercentage,
}) {
  return (
    <div className="amazon-rating-pop-up">
      <Arrow arrowSize={"12px"} color={"black"} direction={"top"} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div className="star-wrapper" style={{ marginBottom: ".5rem" }}>
          <Rating avgRating={avgRating} className="amazon-rating" />
          <h5 className="amazon-rating ">{`${avgRating} out of 5`}</h5>
        </div>
        <p
          className="amazon-rating"
          style={{ textAlign: "start" }}
        >{`${totalRaters} global ratings`}</p>
        <AmazonProgressBar
          width={progressWidth}
          height={progressHeight}
          progress={starPercentage[0]}
        />
        <AmazonProgressBar
          width={progressWidth}
          height={progressHeight}
          progress={starPercentage[1]}
        />
        <AmazonProgressBar
          width={progressWidth}
          height={progressHeight}
          progress={starPercentage[2]}
        />
        <AmazonProgressBar
          width={progressWidth}
          height={progressHeight}
          progress={starPercentage[3]}
        />
        <AmazonProgressBar
          width={progressWidth}
          height={progressHeight}
          progress={starPercentage[4]}
        />
      </div>
    </div>
  );
}

export default RatingPopup;
