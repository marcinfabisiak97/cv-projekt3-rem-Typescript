import React, { useState, useContext } from "react";
import BtnSlider from "./BtnSlider";
import { dataSlider } from "./dataSlider";
import { SlideContext } from "../../context/Contexts";
const Slider = () => {
  const { slideProject, setSlideproject } = useContext(SlideContext);
  const [slideIndex, setSlideIndex] = useState(1);
  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };
  const moveDot = (index: number) => {
    setSlideproject(index);
  };
  return (
    <div className="dotsAndSlider">
      <div className="dotsAndSlider__Dots">
        {Array.from({ length: 2 }).map((obj, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={
              slideProject === index + 1
                ? "dotsAndSlider__dot dotsAndSlider__dot--active"
                : "dotsAndSlider__dot"
            }
          ></div>
        ))}
      </div>
      <div className="dotsAndSlider__slides">
        {dataSlider.map((obj, index) => (
          <div
            key={index}
            className={
              slideIndex === index + 1
                ? "dotsAndSlider__slide dotsAndSlider__slide--active"
                : "dotsAndSlider__slide"
            }
          >
            {(() => {
              switch (slideProject) {
                case 1:
                  return <img src={obj.adres} alt="adres" />;
                case 2:
                  return <img src={obj.adres1} alt="adres" />;
                default:
                  return <img src={obj.adres} alt="adres" />;
              }
            })()}
          </div>
        ))}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <div className="dotsAndSlider__slideNumber">{slideIndex}/5</div>
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      </div>
    </div>
  );
};
export default Slider;
