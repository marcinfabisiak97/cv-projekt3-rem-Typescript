import React, { createContext, RefObject } from "react";
type SlideContextTypes = {
  slideProject: number;
  expander: string;
  show: boolean;
  menu: boolean;

  setOpenMenu: (menu: boolean) => void;
  setSlideproject: (slideProject: number) => void;
  setExpander: (expander: string) => void;
  setShow: (show: boolean) => void;
  myPortfolio: RefObject<HTMLDivElement> | null;
  myService: RefObject<HTMLDivElement> | null;
  myAwards: RefObject<HTMLDivElement> | null;
  myProjecty: RefObject<HTMLDivElement> | null;
  myContacty: RefObject<HTMLDivElement> | null;
};
export const SlideContext = createContext<SlideContextTypes>({
  slideProject: 1,
  expander: "",
  show: false,
  menu: false,
  setOpenMenu: () => {},
  setSlideproject: () => {},
  setExpander: () => {},
  setShow: () => {},
  myPortfolio: React.createRef(),
  myService: React.createRef(),
  myAwards: React.createRef(),
  myProjecty: React.createRef(),
  myContacty: React.createRef(),
});
