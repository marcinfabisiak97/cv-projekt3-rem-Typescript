import { FC, useState, useContext } from "react";
import Modal from "../myprojectspart/modal";
import Modal1 from "../myprojectspart/modal1";
import { SlideContext } from "../../context/Contexts";
const pr1 = require("../../assets/pr1.png");
const pr2 = require("../../assets/pr2.png");
const rightPointer = require("../../assets/icons/rightPointer.png");
const myProjects = [
  {
    source: pr1,
    btndescr: "See more",
    setOpen: 1,
    titledescr: "One Page Portfolio site",
    descr:
      "This project is made in react, for styling I used SCSS. If You wolud like to know more I am open to tell You more",
  },
  {
    source: pr2,
    btndescr: "See more",
    setOpen: 2,
    titledescr: "Multipage Quiz site",
    descr:
      "This project has multi pages, which can be navigate through using router. For managing state I use useContext Hook.",
  },
];
const Project = (props: {
  source: string;
  btndescr: string;
  setOpen: number;
  titledescr: string;
  descr: string;
}) => {
  const [modalOpen, setModalOpen] = useState<number>(0);
  const [modalOpen1, setModalOpen1] = useState<number>(1);
  return (
    <div>
      <div className="firstproject">
        <div className="firstproject__image">
          <img src={props.source} />
        </div>
      </div>
      <div className="projects__descr">
        <h3>{props.titledescr}</h3>
        <p>{props.descr}</p>
      </div>
      <div
        className="projects__btnSee"
        onClick={() => {
          setModalOpen(props.setOpen);
          setModalOpen1(props.setOpen);
        }}
      >
        <h3 className="projects__btndescription">{props.btndescr}</h3>
        <img
          src={rightPointer}
          className="projects__image"
          alt="rightPointer"
        />
      </div>
      {modalOpen == 1 && <Modal setOpenModal={setModalOpen} />}
      {modalOpen1 == 2 && <Modal1 setOpenModal1={setModalOpen1} />}
    </div>
  );
};
const Projectspart: FC = () => {
  const { myPortfolio, myService, myAwards, myProjecty, myContacty } =
    useContext(SlideContext);
  const [allModalOpen, setAllModalOpen] = useState(false);
  return (
    <div className="projects" ref={myProjecty}>
      <div className="projects__title">My projects</div>
      {allModalOpen ? (
        <div
          className="projects__btnSee"
          onClick={() => {
            setAllModalOpen(false);
          }}
        >
          <h3 className="projects__btndescription">Close all projects</h3>
          <img
            src={rightPointer}
            className="projects__image"
            alt="rightPointer"
          />
        </div>
      ) : (
        <div
          className="projects__btnSee"
          onClick={() => {
            setAllModalOpen(true);
          }}
        >
          <h3 className="projects__btndescription">See all projects</h3>
          <img
            src={rightPointer}
            className="projects__image"
            alt="rightPointer"
          />
        </div>
      )}

      {allModalOpen &&
        myProjects.map((el, index) => {
          return (
            <Project
              key={index}
              source={el.source}
              btndescr={el.btndescr}
              titledescr={el.titledescr}
              descr={el.descr}
              setOpen={el.setOpen}
            />
          );
        })}
    </div>
  );
};
export default Projectspart;
