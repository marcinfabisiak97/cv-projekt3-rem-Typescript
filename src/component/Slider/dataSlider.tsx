const { v4: uuidv4 } = require("uuid");
const portfolio_case_01 = require("../../assets/proj2/page1.png");
const portfolio_case_02 = require("../../assets/proj2/page2.png");
const portfolio_case_03 = require("../../assets/proj2/page3.png");
const portfolio_case_04 = require("../../assets/proj2/page4.png");
const portfolio_case_05 = require("../../assets/proj2/page5.png");
const img1 = require("../../assets/proj1/img1.png");
const img2 = require("../../assets/proj1/img2.png");
const img3 = require("../../assets/proj1/img3.png");
const img4 = require("../../assets/proj1/img4.png");
const img5 = require("../../assets/proj1/img5.png");
export const dataSlider: {
  id: string;
  title: string;
  subTitle: string;
  adres: string;
  adres1: string;
}[] = [
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    adres: img1,
    adres1: portfolio_case_01,
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    adres: img2,
    adres1: portfolio_case_02,
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    adres: img3,
    adres1: portfolio_case_03,
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    adres: img4,
    adres1: portfolio_case_04,
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    adres: img5,
    adres1: portfolio_case_05,
  },
];
