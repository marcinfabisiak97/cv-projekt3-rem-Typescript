const uiPhoto = require("../../../assets/icons/uiPhoto.png");
const webPhoto = require("../../../assets/icons/webPhoto.png");
const appPhoto = require("../../../assets/icons/appPhoto.png");
const softPhoto = require("../../../assets/icons/softPhoto.png");
export interface MyTechnolgie {
  photo: string;
  number: string;
  kind: string;
  text: string;
}
export const myTechnolgie: MyTechnolgie[] = [
  {
    photo: uiPhoto,
    number: "01",
    kind: "Ux/Ui",
    text: "Thorough research to prepare the best solutions",
  },
  {
    photo: webPhoto,
    number: "02",
    kind: "Web design",
    text: "Full responsive and equipped with modern technology",
  },
  {
    photo: appPhoto,
    number: "03",
    kind: "Applications",
    text: "Individually planned solutions to provide best answers to your problems and needs.",
  },
  {
    photo: softPhoto,
    number: "04",
    kind: "Software",
    text: "We examine structures of your company to find the best way to improve its operations.",
  },
];
