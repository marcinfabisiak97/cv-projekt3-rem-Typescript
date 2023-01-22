import { Dispatch, SetStateAction } from "react";
const pr2 = require("../../../assets/pr2.png");
const Modal1 = ({
  setOpenModal1,
}: {
  setOpenModal1: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <a href="https://projekt2reactquiz.netlify.app" target="_blank">
          <img src={pr2} />
        </a>
        <div className="modalContainer__CloseBtn">
          <button
            onClick={() => {
              setOpenModal1(1);
            }}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal1;
