import React, { useState } from "react";
import "./form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    gender: "",
    nationality: "United Arab Emirates",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData: formData }),
    };
    console.log(settings, "settings");
    try {
      const response = await fetch(
        "http://localhost:3001/userDetails",
        settings
      );
      const responseData = await response.json();
      console.log(responseData, "responseData");

      if (responseData.status === 200) {
        alert(responseData.statusMessage);
      }
    } catch (e) {
      return e;
    }
  };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}> Simple Form </h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="inputblock">
          <label>
            Full Name :
            <input
              className="input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />{" "}
          </label>
        </div>
        <div className="inputblock">
          <label>
            Designation :
            <input
              className="input"
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
            />{" "}
          </label>
        </div>
        <label>
          <div className="inputblock" onChange={handleChange}>
            Gender: <br />
            <label>
              <input
                className="input"
                type="radio"
                name="gender"
                value="Female"
              />{" "}
              Female
            </label>
            <label>
              <input
                className="input"
                type="radio"
                name="gender"
                value="Male"
              />{" "}
              Male
            </label>
          </div>
        </label>
        <div className="inputblock">
          <label>
            Nationality :
            <select
              className="input"
              name="nationality"
              onChange={handleChange}
              value={formData.nationality}
            >
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="other">other</option>
            </select>
          </label>{" "}
        </div>

        <br />
        <input className="submit" type="submit" />
      </form>
      {formData.name}
      {""}
      {formData.designation} {""}
      {formData.gender} {""}
      {formData.nationality} {""}
    </div>
  );
};

export default Form;
