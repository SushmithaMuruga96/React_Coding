import { useState } from "react";
import "./admin.css";
function Login({ handleLogin, handleRegister }) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    const { email, password } = loginData;

    if (!email.trim() || !password.trim()) {
      setError("Email and password reuired");
      return;
    }
    setError("");
    localStorage.setItem("login", JSON.stringify(loginData));
    handleLogin();
  };
  return (
    <div className="mainwrapper">
      <h1>Login to an Account</h1>
      <div className="inputset">
        <label htmlFor="email" className="label">
          Email: *{" "}
        </label>
        <input
          name="email"
          value={loginData?.email}
          type="email"
          onChange={handleUserInput}
          required
        />
      </div>
      <div className="inputset">
        <label htmlFor="password" className="label">
          Password: *{" "}
        </label>
        <input
          name="password"
          value={loginData?.password}
          type="password"
          onChange={handleUserInput}
          required
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        {" "}
        Login
      </button>
      <br />
      {error && <h5 style={{ color: "red" }}>{error}</h5>}

      <button
        style={{
          background: "transparent",
          border: "none",
          textDecoration: "underline",
          color: "blueviolet",
          textAlign: "right !important",
          padding: "10px",
        }}
        onClick={() => handleRegister()}
      >
        Don't have account create one
      </button>
    </div>
  );
}
export default Login;
