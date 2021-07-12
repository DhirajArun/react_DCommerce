import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getSlides } from "../services/fakeSliderService";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/sSlider.css";

class SSlider extends Component {
  state = {
    sliderSize: 3,
    slideWidth: 400, // in px
    slideHeight: 0, //in px
    isArrowClicked: "no",
    slides: getSlides(),
    pxValue: 0,
  };

  handleSlideHover(slide, value) {
    const slides = [...this.state.slides];
    const index = slides.findIndex((s) => s === slide);
    const UpdatedSlide = { ...slide };
    UpdatedSlide.hovered = value;
    slides[index] = UpdatedSlide;
    this.setState({ slides });
  }

  handleSlide(value) {
    const { pxValue, slides, sliderSize, slideWidth } = this.state;
    if (value === "left") {
      if (pxValue === 0) return;
      this.setState({
        isArrowClicked: "left",
        pxValue: pxValue - slideWidth,
      });
    } else if (value === "right") {
      if (pxValue === (slides.length - sliderSize) * slideWidth) return;
      this.setState({
        isArrowClicked: "right",
        pxValue: pxValue + slideWidth,
      });
    }
  }

  getSliderStyle() {
    const { isArrowClicked, pxValue } = this.state;

    if (isArrowClicked === "no") {
      return {
        left: "0px",
      };
    }
    if (isArrowClicked === "left") {
      return {
        left: `-${pxValue}px`,
        transition: "0.5s left",
        transitionTimingFunction: "ease",
      };
    }
    if (isArrowClicked === "right") {
      return {
        left: `-${pxValue}px`,
        transition: "0.5s left",
        transitionTimingFunction: "ease",
      };
    }
  }

  render() {
    const { slides } = this.state;
    return (
      <div className="slider-wrapper">
        <button
          className="slider-arrow"
          onClick={() => this.handleSlide("left")}
        >
          <FontAwesomeIcon icon={faChevronLeft} className="slider-arrow-font" />
        </button>
        <div className="slider" style={this.getSliderStyle()}>
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
        <button
          className="slider-arrow right"
          onClick={() => this.handleSlide("right")}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className="slider-arrow-font"
          />
        </button>
      </div>
    );
  }
}

export default SSlider;
