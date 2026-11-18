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
    if (error) {
      setError("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginData;

    if (!email.trim() || !password.trim()) {
      setError("Email and password required");
      return;
    }
    let registerData;
    try {
      registerData = JSON.parse(localStorage.getItem("register"));
    } catch {
      setError("Unable to read registered account. Please register again.");
      return;
    }
    if (!registerData) {
      setError("No account found, Please register");
      return;
    }

    const isEmailValid =
      registerData?.email.trim().toLowerCase() !== email.trim().toLowerCase();
    const isPasswordValid = registerData?.password !== password;

    if (isEmailValid || isPasswordValid) {
      setError("Incorrect Email/Password");
      return;
    }

    setError("");
    localStorage.setItem("login", JSON.stringify(loginData));
    handleLogin();
  };
  return (
    <form className="mainwrapper" onSubmit={handleSubmit}>
      <h1>Login to an Account</h1>
      <div className="inputset">
        <label htmlFor="email" className="label">
          Email: *{" "}
        </label>
        <input
          id="email"
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
          id="email"
          name="password"
          value={loginData?.password}
          type="password"
          onChange={handleUserInput}
          required
        />
      </div>
      <button type="submit"> Login</button>
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
    </form>
  );
}
export default Login;
