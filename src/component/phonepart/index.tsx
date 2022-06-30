import React, { FC, useState, useContext } from "react";
import { TypeProps } from "../../types";
import Slider from "../../component/Slider/Slider";
import { SlideContext } from "../../context/Contexts";
const Phonepart: FC = () => {
  const { slideProject, setSlideproject } = useContext(SlideContext);
  return (
    <React.Fragment>
      <div className="phonePart">
        <div className="phonePart__phone">
          <Slider />
        </div>
        <div className="phonePart__description">
          <h2>Between Projects</h2>
          <h3>Slider</h3>
          <h4>
            In the picture you can see the projects that was created by using
            react framework. In the second project I used hooks like useContex
            to mange the state.
          </h4>
          <p>
            There tree ways to change kind of project. On the right there is a
            two way Slider. You can change the project by using left dots and
            also by picking the upper text.
          </p>
          <p>
            When You are in one of the project You can pic it by click on the
            arrows, which are one the bottom of phone image.
          </p>
        </div>
        <div className="phonePart__vertContainer">
          <div
            className="phonePart__vertiSlider phonePart__vertiSlider--btnUp"
            onClick={() => setSlideproject(1)}
          >
            <div className="phonePart__arrow phonePart__arrow--up"></div>
          </div>
          <div
            className="phonePart__vertiSlider phonePart__vertiSlider--btnDown"
            onClick={() => setSlideproject(2)}
          >
            <div className="phonePart__arrow phonePart__arrow--down"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Phonepart;
