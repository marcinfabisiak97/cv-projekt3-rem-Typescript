import { RefObject } from "react";
export interface TypeProps {
  myPortfolio: RefObject<HTMLDivElement> | null;
  myService: RefObject<HTMLDivElement> | null;
  myAwards: RefObject<HTMLDivElement> | null;
  myProjecty: RefObject<HTMLDivElement> | null;
  myContacty: RefObject<HTMLDivElement> | null;
}
