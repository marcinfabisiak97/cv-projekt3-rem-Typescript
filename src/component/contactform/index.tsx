import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SlideContext } from "../../context/Contexts";
import { IconContext } from "react-icons";
import { FcHighPriority } from "react-icons/fc";
enum GenderEnum {
  female = "female",
  male = "male",
}
interface IFormInput {
  firstName: String;
  lastName: String;
  email: String;
  datePicker: Date;
  gender: GenderEnum;
}
const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  const { show, setShow } = useContext(SlideContext);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  return (
    <div className="containerForm">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("firstName", {
            pattern: /^[A-Za-z]+$/i,
            required: true,
            maxLength: 20,
          })}
          placeholder="First Name"
        />
        <>
          {errors.firstName && (
            <p>
              <IconContext.Provider value={{ className: "icon" }}>
                <FcHighPriority />
              </IconContext.Provider>
              &nbsp; First Name is required
            </p>
          )}
        </>
        <input
          {...register("lastName", {
            pattern: /^[A-Za-z]+$/i,
            required: true,
            maxLength: 20,
          })}
          placeholder="Last Name"
        />
        <>
          {errors.lastName && (
            <p>
              <IconContext.Provider value={{ className: "icon" }}>
                <FcHighPriority />
              </IconContext.Provider>
              &nbsp;Last Name is required
            </p>
          )}
        </>
        <input
          {...register("email", {
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            required: true,
            maxLength: 20,
          })}
          placeholder="e-mail"
        />
        <>
          {errors.email && (
            <p>
              <IconContext.Provider value={{ className: "icon" }}>
                <FcHighPriority />
              </IconContext.Provider>
              &nbsp;e-mail is required
            </p>
          )}
        </>
        <div className="form__date">
          <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <>
          {errors.datePicker && (
            <p>
              <IconContext.Provider value={{ className: "icon" }}>
                <FcHighPriority />
              </IconContext.Provider>
              &nbsp;date is required
            </p>
          )}
        </>
        <select {...register("gender", { required: true })}>
          <option value="female">female</option>
          <option value="male">male</option>
        </select>
        <>
          {errors.gender && (
            <p>
              <IconContext.Provider value={{ className: "icon" }}>
                <FcHighPriority />
              </IconContext.Provider>
              &nbsp;gender is required
            </p>
          )}
        </>
        <input className="form__submit" type="submit" value="Send" />
        <button onClick={() => setShow(true)}>close</button>
      </form>
    </div>
  );
};
export default ContactUsForm;
