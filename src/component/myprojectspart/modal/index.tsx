import { Dispatch, SetStateAction } from "react";
const pr1 = require("../../../assets/pr1.png");
const Modal = ({
  setOpenModal,
}: {
  setOpenModal: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <a href="https://project1onepagecv.netlify.app" target="_blank">
          <img src={pr1} alt="project 1" />
        </a>
        <div className="modalContainer__CloseBtn">
          <button
            onClick={() => {
              setOpenModal(0);
            }}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
