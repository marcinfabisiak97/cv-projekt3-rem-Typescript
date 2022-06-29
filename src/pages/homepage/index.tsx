import { useContext } from "react";
import Menupart from "../../component/menupart";
import Ideaspart from "../../component/ideaspart";
import Phonepart from "../../component/phonepart";
import Controlpart from "../../component/controlpart";
import Projectspart from "../../component/myprojectspart";
import Devtech from "../../component/devtechgnologypart";
import Contact from "../../component/contactpart";
import { SlideContext } from "../../context/Contexts";
import ContactUsForm from "../../component/contactform";
const Homepage = () => {
  const { show, setShow } = useContext(SlideContext);
  return (
    <div className="wrraper">
      {show ? (
        <div>
          <Menupart />
          <Ideaspart />
          <Phonepart />
          <Controlpart />
          <Projectspart />
          <Devtech />
          <Contact />
        </div>
      ) : (
        <ContactUsForm />
      )}
    </div>
  );
};
export default Homepage;
