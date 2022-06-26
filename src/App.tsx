import React, { useState, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import { SlideContext } from "./context/Contexts";
import "./App.scss";

function App() {
  const [expander, setExpander] = useState("");
  const [slideProject, setSlideproject] = useState(1);
  const [show, setShow] = useState(true);
  const [menu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const myPortfolio = useRef<HTMLDivElement>(null);
  const myService = useRef<HTMLDivElement>(null);
  const myAwards = useRef<HTMLDivElement>(null);
  const myProjecty = useRef<HTMLDivElement>(null);
  const myContacty = useRef<HTMLDivElement>(null);
  return (
    <SlideContext.Provider
      value={{
        scrolled,
        setScrolled,
        slideProject,
        setSlideproject,
        expander,
        setExpander,
        show,
        setShow,
        myPortfolio,
        myService,
        myAwards,
        myProjecty,
        myContacty,
        menu,
        setOpenMenu,
      }}
    >
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Facebook" element={<Homepage />} />
        <Route path="/Linkedin" element={<Homepage />} />
      </Routes>
    </SlideContext.Provider>
  );
}

export default App;
