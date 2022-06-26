import { RefObject } from "react";
const NavItem = (props: {
  linker: RefObject<HTMLDivElement> | RefObject<HTMLSelectElement> | null;
  name: string;
}) => {
  const scrollToRef = (
    ref: RefObject<HTMLDivElement> | RefObject<HTMLSelectElement> | null
  ) => window.scrollTo(0, ref!.current!.offsetTop);
  return (
    <li onClick={() => scrollToRef(props.linker)}>
      <p>{props.name}</p>
    </li>
  );
};
export default NavItem;
