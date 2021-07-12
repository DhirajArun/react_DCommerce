import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/sSlider.css";

class SSlider extends Component {
  state = {
    currentFirstSlide: 1,
    currentLastSlide: 3,
    slides: [
      {
        img: "https://i1.wp.com/5ocial.com/wp-content/uploads/2020/12/2315DCF7-E77D-4A91-9217-9B00192BA01E.jpeg?fit=536%2C302&ssl=1",
        cat: ["Bollywood"],
        title: "16 Movies and Webseries Coming in December",
        date: "December 4, 2020",
      },
      {
        img: "https://i1.wp.com/5ocial.com/wp-content/uploads/2020/12/2315DCF7-E77D-4A91-9217-9B00192BA01E.jpeg?fit=536%2C302&ssl=1",
        cat: ["Bollywood"],
        title: "16 Movies and Webseries Coming in Decembe",
        date: "December 4, 2020",
      },
      {
        img: "https://i1.wp.com/5ocial.com/wp-content/uploads/2020/12/2315DCF7-E77D-4A91-9217-9B00192BA01E.jpeg?fit=536%2C302&ssl=1",
        cat: ["Bollywood"],
        title: "16 Movies and Webseries Coming in Deceber",
        date: "December 4, 2020",
      },
      {
        img: "https://i1.wp.com/5ocial.com/wp-content/uploads/2020/12/2315DCF7-E77D-4A91-9217-9B00192BA01E.jpeg?fit=536%2C302&ssl=1",
        cat: ["Bollywood"],
        title: "16 Movies and Webseries Coming n December",
        date: "December 4, 2020",
      },
      {
        img: "https://i1.wp.com/5ocial.com/wp-content/uploads/2020/12/2315DCF7-E77D-4A91-9217-9B00192BA01E.jpeg?fit=536%2C302&ssl=1",
        cat: ["Bollywood", "webseries"],
        title: "16 Movies and Webseries Coing in December",
        date: "December 4, 2020",
      },
      {
        img: "https://i1.wp.com/5ocial.com/wp-content/uploads/2020/12/2315DCF7-E77D-4A91-9217-9B00192BA01E.jpeg?fit=536%2C302&ssl=1",
        cat: ["Bollywood", "Hollywood"],
        title: "16 Movies and Webseies Coming in December",
        date: "December 4, 2020",
      },
      {
        img: "https://i1.wp.com/5ocial.com/wp-content/uploads/2020/12/2315DCF7-E77D-4A91-9217-9B00192BA01E.jpeg?fit=536%2C302&ssl=1",
        cat: ["Bollywood", "Hollywood"],
        title: "16 Movies and Weseries Coming in December",
        date: "December 4, 2020",
      },
      {
        img: "https://i1.wp.com/5ocial.com/wp-content/uploads/2020/12/2315DCF7-E77D-4A91-9217-9B00192BA01E.jpeg?fit=536%2C302&ssl=1",
        cat: ["Bollywood", "Hollywood"],
        title: "16 Moes and Webseries Coming in December",
        date: "December 4, 2020",
      },
      {
        img: "https://i1.wp.com/5ocial.com/wp-content/uploads/2020/12/2315DCF7-E77D-4A91-9217-9B00192BA01E.jpeg?fit=536%2C302&ssl=1",
        cat: ["Bollywood", "Hollywood"],
        title: "16 Movies and bseries Coming in December",
        date: "December 4, 2020",
      },
    ],
  };

  slideStyles = {};

  handleSlideHover(slide, value) {
    const slides = [...this.state.slides];
    const index = slides.findIndex((s) => s === slide);
    const UpdatedSlide = { ...slide };
    UpdatedSlide.hovered = value;
    slides[index] = UpdatedSlide;
    this.setState({ slides });
  }

  handleSlide(arrowType) {
    const { currentFirstSlide, currentLastSlide } = this.state;

    if (arrowType === "left") {
      if (currentFirstSlide === 1) return;
      this.setState({
        currentFirstSlide: currentFirstSlide - 1,
        currentLastSlide: currentLastSlide - 1,
      });
      return;
    }
    if (arrowType === "right") {
      if (currentLastSlide === this.state.slides.length) return;
      this.setState({
        currentFirstSlide: currentFirstSlide + 1,
        currentLastSlide: currentLastSlide + 1,
      });
      return;
    }
  }

  render() {
    const { slides, currentFirstSlide, currentLastSlide } = this.state;
    return (
      <div className="slider-wrapper">
        <a
          className="slider-arrow left"
          onClick={() => this.handleSlide("left")}
          href={`#slide${currentFirstSlide - 1}`}
        >
          <FontAwesomeIcon icon={faChevronLeft} className="slider-arrow-font" />
        </a>
        <div className="slider">
          {slides.map((slide) => (
            <div
              key={slide.title}
              className="slide"
              id={`slide${slides.indexOf(slide) + 1}`}
              onMouseOver={() => this.handleSlideHover(slide, true)}
              onMouseOut={() => this.handleSlideHover(slide, false)}
            >
              <div
                className={
                  slide.hovered ? "slide-img slide-img-scaled" : "slide-img"
                }
              ></div>

              <div className="slide-info">
                <div className="slide-cat">
                  <a href="">Bollywood</a>
                </div>
                <a href="" className="slide-title">
                  {slide.title}
                </a>
                <a href="" className="slide-date">
                  {slide.date}
                </a>
              </div>
            </div>
          ))}
        </div>
        <a
          className="slider-arrow right"
          href={`#slide${currentLastSlide + 1}`}
          onClick={() => this.handleSlide("right")}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className="slider-arrow-font"
          />
        </a>
      </div>
    );
  }
}

export default SSlider;
