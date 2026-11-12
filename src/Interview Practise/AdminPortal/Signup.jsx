import { useState } from "react";
import "./admin.css";
function Signup() {
  const [signupData, setSignupData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  });
  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    if (Object.keys(signupData).length === 0) {
      localStorage.setItem("register", "");
    } else {
      localStorage.setItem("register", JSON.stringify(signupData));
    }
  };
  return (
    <div className="mainwrapper">
      <h1>Create an Account</h1>
      <div className="inputset">
        <label htmlFor="firstname" className="label">
          First Name:{" "}
        </label>
        <input
          name="firstname"
          value={signupData?.firstname}
          type="text"
          onChange={handleUserInput}
        />
      </div>
      <div className="inputset">
        <label htmlFor="lastname" className="label">
          Last Name:{" "}
        </label>
        <input
          name="lastname"
          value={signupData?.lastname}
          type="text"
          onChange={handleUserInput}
        />
      </div>
      <div className="inputset">
        <label htmlFor="email" className="label">
          Email:{" "}
        </label>
        <input
          name="email"
          value={signupData?.email}
          type="email"
          onChange={handleUserInput}
        />
      </div>
      <div className="inputset">
        <label htmlFor="phone" className="label">
          Phone:{" "}
        </label>
        <input
          name="phone"
          value={signupData?.phone}
          type="tel"
          onChange={handleUserInput}
        />
      </div>
      <div className="inputset">
        <label htmlFor="password" className="label">
          Password:{" "}
        </label>
        <input
          name="password"
          value={signupData?.password}
          type="password"
          onChange={handleUserInput}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Register
      </button>
    </div>
  );
}
export default Signup;
