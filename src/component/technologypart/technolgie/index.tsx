import React, { useState, useContext } from "react";
import { myTechnolgieExpand } from "../../../context/technologyPartBackEnd/technologiesExpand";
import {
  MyTechnolgie,
  myTechnolgie,
} from "../../../context/technologyPartBackEnd/technologies";
import { SlideContext } from "../../../context/Contexts";
const rightPointer = require("../../../assets/icons/rightPointer.png");
const Technolgie = (props: MyTechnolgie) => {
  const { expander, setExpander } = useContext(SlideContext);
  return (
    <React.Fragment>
      {expander ? (
        <div
          className="technologiesBricks technologiesBricks--expand"
          onClick={() => setExpander("")}
        >
          <img src={props.photo} alt="ui" />
          <div className="technologiesBricks__midleText">
            <p>{props.number}</p>
            <h3>{props.kind}</h3>
            <p>{props.text} </p>
          </div>
          <img
            className="technologiesBricks__cliker technologiesBricks__cliker--rotate"
            src={rightPointer}
            alt="pointer"
          />
        </div>
      ) : (
        <div
          className="technologiesBricks"
          onClick={() => setExpander(props.number)}
        >
          <img src={props.photo} alt="ui" />
          <div className="technologiesBricks__midleText">
            <p>{props.number}</p>
            <h3>{props.kind}</h3>
            <p>{props.text} </p>
          </div>
          <img
            className="technologiesBricks__cliker"
            src={rightPointer}
            alt="pointer"
          />
        </div>
      )}
    </React.Fragment>
  );
};
export default Technolgie;
