import React, { useState } from "react";
import "../styles.css";

function SurveyForm({ setProgress, onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    satisfaction: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errs = {};
    if (!form.name) errs.name = "Name is required";
    if (!form.email.includes("@")) errs.email = "Valid email required";
    if (!form.age || isNaN(form.age)) errs.age = "Valid age is required";
    if (!form.satisfaction)
      errs.satisfaction = "Please select a satisfaction level";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    let value = e.target.value;
    if (e.target.name === "age" && value < 0) {
      value = 0;
    }
    setForm({ ...form, [e.target.name]: value });
    setProgress((Object.values(form).filter((val) => val).length / 3) * 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <span>{errors.name}</span>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <span>{errors.email}</span>
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={form.age}
        onChange={handleChange}
      />
      <span>{errors.age}</span>

      <div className="radio-group">
        <label className="radio-label">
          <input
            type="radio"
            name="satisfaction"
            value="Very Satisfied"
            onChange={handleChange}
          />{" "}
          VerySatisfied
        </label>
        <label className="radio-label">
          <input
            type="radio"
            name="satisfaction"
            value="Satisfied"
            onChange={handleChange}
          />{" "}
          Satisfied
        </label>
        <label className="radio-label">
          <input
            type="radio"
            name="satisfaction"
            value="Neutral"
            onChange={handleChange}
          />{" "}
          Neutral
        </label>
        <label className="radio-label">
          <input
            type="radio"
            name="satisfaction"
            value="Dissatisfied"
            onChange={handleChange}
          />{" "}
          Dissatisfied
        </label>
      </div>
      <span>{errors.satisfaction}</span>

      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
}

export default SurveyForm;
