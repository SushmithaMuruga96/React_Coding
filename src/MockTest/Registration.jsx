import React from "react";
import { useState } from "react";

function Registration() {
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) {
      setError("");
    }
    if (success) {
      setSuccess("");
    }
  };

  const validateForm = () => {
    if (!formData.firstname.trim()) {
      return "Firstname is required";
    }
    if (!formData.email.trim()) {
      return "Email is required";
    }
    if (!emailRegex.test(formData.email.trim())) {
      return "Invalid email address";
    }
    if (!formData.password) {
      return "Password required";
    }
    if (!passwordRegex.test(formData.password)) {
      return "Password must have at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.";
    }
    if (!formData.confirmPassword) {
      return "Please confirm your password";
    }

    if (formData.password !== formData?.confirmPassword) {
      return "Passwords do not match";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateError = validateForm();
    if (validateError) {
      setError(validateError);
      return;
    }

    setError("");
    console.log(formData);
    console.log("Registration- successful");
    setSuccess("Registration - successful");
  };
  return success ? (
    <p>{success}</p>
  ) : (
    <form
      onSubmit={handleSubmit}
      style={{
        textAlign: "center",
        margin: "0 auto",
        width: "500px",
        border: "1px solid black",
      }}
    >
      {" "}
      <h1>Create an Account</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "10px",
        }}
      >
        <label htmlFor="firstname">FirstName:</label>
        <input
          style={{
            padding: "10px",
            width: "300px",
            marginTop: "10px",
            borderRadius: "5px",
            border: " 1px solid blue",
          }}
          id="firstname"
          name="firstname"
          type="text"
          value={formData.firstname}
          onChange={handleInputChange}
          required
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "10px",
        }}
      >
        <label htmlFor="email">Email:</label>
        <input
          style={{
            padding: "10px",
            width: "300px",
            marginTop: "10px",
            borderRadius: "5px",
            border: " 1px solid blue",
          }}
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "10px",
        }}
      >
        <label htmlFor="password">Password:</label>
        <input
          style={{
            padding: "10px",
            width: "300px",
            marginTop: "10px",
            borderRadius: "5px",
            border: " 1px solid blue",
          }}
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "10px",
        }}
      >
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          style={{
            padding: "10px",
            width: "300px",
            marginTop: "10px",
            borderRadius: "5px",
            border: " 1px solid blue",
          }}
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          required
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button
        type="submit"
        style={{
          backgroundColor: "blue",
          padding: "10px",
          width: "150px",
          color: "white",
          borderRadius: "5px",
          margin: "20px",
        }}
      >
        Register
      </button>
    </form>
  );
}

export default Registration;
