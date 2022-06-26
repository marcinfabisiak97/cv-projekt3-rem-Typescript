import React, { FC, useState, useEffect, useContext } from "react";
import { TypeProps } from "../../types";
import NavItem from "../../component/navitem";
import Ini from "../../component/initialsMF";
import { SlideContext } from "../../context/Contexts";
const imgTextRight = require("../../assets/text_left.png");
const dropDown = require("../../assets/dropdown.png");

const Menupart: FC = () => {
  const {
    myPortfolio,
    myService,
    myAwards,
    myProjecty,
    myContacty,
    menu,
    setOpenMenu,
    scrolled,
    setScrolled,
  } = useContext(SlideContext);
  const navMenu = [
    { name: "My Portfolio", linker: myPortfolio },
    { name: "Service", linker: myService },
    { name: "Awards", linker: myAwards },
    { name: "Technology", linker: myProjecty },
    { name: "Contact me", linker: myContacty },
  ];
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 350) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <React.Fragment>
      <div className="imagePart" ref={myPortfolio}>
        <div className="namenMenu">
          <div className="namenMenu__name">
            <Ini />
            <p>Marcin Fabisiak Portfolio</p>
            <p>Front End Developer</p>
          </div>
          <div
            className={
              scrolled
                ? "namenMenu__menu--scrolled namenMenu__menu"
                : "namenMenu__menu"
            }
          >
            <button onClick={() => setOpenMenu(!menu)}>
              Menu
              <span className="namenMenu__menu--buttonImgWrapper">
                <img src={dropDown} alt="dropdown arrow" />
              </span>
            </button>
            {menu && (
              <ul>
                {navMenu.map((el, index) => {
                  return (
                    <NavItem key={index} name={el.name} linker={el.linker} />
                  );
                })}
              </ul>
            )}
          </div>
        </div>
        <div className="imagePart__imgRight">
          <img src={imgTextRight} alt="engage design evolve" />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Menupart;
