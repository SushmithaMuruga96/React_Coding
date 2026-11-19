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
  const [success, setSuccess] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

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
    setSuccess(false);
  };

  const validateForm = () => {
    if (!signupData.firstname.trim()) {
      return "FirstName is required";
    }

    if (!signupData.lastname.trim()) {
      return "LastName is required";
    }

    if (!signupData.email.trim()) {
      return "Email is required";
    }
    if (!emailRegex.test(signupData.email)) {
      return "Invalid Email";
    }

    if (!signupData.phone.trim()) {
      return "Telephone is required";
    }

    if (!signupData.password.trim()) {
      return "Password is required";
    }
    if (!passwordRegex.test(signupData.password)) {
      return "Password should contain at least 8 characters includes one uppercase , one lowercase, one number and one special character";
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
    callingLoginScreen();
  };

  const callingLoginScreen = () => {
    setSuccess(true);
    setTimeout(() => {
      handleLogin();
    }, 1000);
  };

  return success ? (
    <p>
      Registration Successful: {signupData.firstname}{" "}
      {signupData?.lastname}{" "}
    </p>
  ) : (
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
