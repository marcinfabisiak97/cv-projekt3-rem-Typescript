import React from "react";
const leftArrow = require("../../assets/icons/left-arrow.png");
const rightArrow = require("../../assets/icons/right-arrow.png");

const BtnSlider = ({
  direction,
  moveSlide,
}: {
  direction: string;
  moveSlide: () => void;
}) => {
  return (
    <div
      onClick={moveSlide}
      className={
        direction === "next"
          ? "slider__button slider__button--next"
          : "slider__button slider__button--prev"
      }
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </div>
  );
};
export default BtnSlider;
