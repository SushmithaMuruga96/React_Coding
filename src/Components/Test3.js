import submitForm from "./submitForm";
import { useState } from "react";

export default function Test3() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      [name]: value,
    });
  };

  const submitForm = async () => {
    const response = await fetch(
      "https://www.greatfrontend.com/api/questions/contact-form",
      {
        method: "POST",
        body: formData,
      }
    );
    const res = response;
    alert(res);
  };
  return (
    <form
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.
      onSubmit={submitForm}
    >
      <label>
        {" "}
        Name:
        <br />{" "}
        <input
          type="text"
          value={formData.name}
          onChange={onChangeHandler}
          name="name"
        />{" "}
      </label>
      <br />
      <label>
        Email:
        <br />{" "}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChangeHandler}
        />
      </label>
      <br />
      <label>
        Message:
        <br />{" "}
        <input
          name="message"
          type="textarea"
          value={formData.message}
          onChange={onChangeHandler}
        />
      </label>
      <br />
      <br />
      <input type="submit" value="send" />
    </form>
  );
}
