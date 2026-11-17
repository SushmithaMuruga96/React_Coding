import { useState } from "react";
import "./admin.css";

function Signup({ handleLogin }) {
  const [signupData, setSignupData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleUserInput = (e) => {
    const { name, value } = e.target;

    setSignupData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear the previous error when the user edits the form.
    if (error) {
      setError("");
    }
  };

  const validateForm = () => {
    if (!signupData.firstname.trim()) {
      return "First Name is required";
    }

    if (!signupData.lastname.trim()) {
      return "Last Name is required";
    }

    if (!signupData.email.trim()) {
      return "Email is required";
    }

    if (!signupData.phone.trim()) {
      return "Telephone is required";
    }

    if (!signupData.password.trim()) {
      return "Password is required";
    }

    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");

    // For practice only. Do not store real passwords in localStorage.
    localStorage.setItem("register", JSON.stringify(signupData));

    handleLogin();
  };

  return (
    <div className="mainwrapper">
      <h1>Create an Account</h1>

      <form onSubmit={handleSubmit}>
        <div className="inputset">
          <label htmlFor="firstname" className="label">
            First Name:
          </label>
          <input
            id="firstname"
            name="firstname"
            value={signupData.firstname}
            type="text"
            onChange={handleUserInput}
            required
          />
        </div>

        <div className="inputset">
          <label htmlFor="lastname" className="label">
            Last Name:
          </label>
          <input
            id="lastname"
            name="lastname"
            value={signupData.lastname}
            type="text"
            onChange={handleUserInput}
            required
          />
        </div>

        <div className="inputset">
          <label htmlFor="email" className="label">
            Email:
          </label>
          <input
            id="email"
            name="email"
            value={signupData.email}
            type="email"
            onChange={handleUserInput}
            required
          />
        </div>

        <div className="inputset">
          <label htmlFor="phone" className="label">
            Phone:
          </label>
          <input
            id="phone"
            name="phone"
            value={signupData.phone}
            type="tel"
            onChange={handleUserInput}
            required
          />
        </div>

        <div className="inputset">
          <label htmlFor="password" className="label">
            Password:
          </label>
          <input
            id="password"
            name="password"
            value={signupData.password}
            type="password"
            onChange={handleUserInput}
            required
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Signup;
