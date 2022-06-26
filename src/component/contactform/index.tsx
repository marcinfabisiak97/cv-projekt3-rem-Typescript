import React, { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SlideContext } from "../../context/Contexts";

enum GenderEnum {
  female = "female",
  male = "male",
}
interface IFormInput {
  firstName: String;
  lastName: String;
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
        <label>First Name</label>
        <input
          {...register("firstName", { required: true, maxLength: 20 })}
          placeholder="First Name"
        />
        <>{errors.firstName && alert("First name is required")}</>

        <label>Last Name</label>
        <input
          {...register("lastName", {
            pattern: /^[A-Za-z]+$/i,
            required: true,
            maxLength: 20,
          })}
          placeholder="Last Name"
        />
        <label>e-mail</label>
        <input
          {...register("lastName", {
            required: true,
            maxLength: 20,
          })}
          placeholder="e-mail"
        />
        <label>Date picker</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="form__date"
        />
        <label>Gender Selection</label>
        <select {...register("gender", { required: true })}>
          <option value="female">female</option>
          <option value="male">male</option>
        </select>
        <input className="form__submit" type="submit" value="Send" />
        <button onClick={() => setShow(true)}>close</button>
      </form>
    </div>
  );
};
export default ContactUsForm;
