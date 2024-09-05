import { useState } from "react";
import SignUp from "./SignUp";
import { updateLoginInfo } from "../Redux/Reducers/LoginSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showSignUp, setShowSignUp] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    userEmail: "",
    userPassword: "",
  });

  const { email, password } = useSelector((state) => state.signup);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email !== "" && password !== "") {
      if (
        email === loginInfo.userEmail &&
        password === loginInfo.userPassword
      ) {
        dispatch(updateLoginInfo(loginInfo));
        alert("Login Success");
        navigate("/home");
      } else if (
        email !== loginInfo.userEmail ||
        password !== loginInfo.userPassword
      ) {
        alert("UserName/Password is incorrect");
      } else {
        alert("Login Failed");
      }
    } else {
      alert("Not an User");
    }
  };

  const afterSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <>
      {!showSignUp && (
        <>
          <form
            onSubmit={handleSubmit}
            style={{
              width: "450px",
              margin: "30px auto",
              border: "1px solid grey",
              padding: "30px",
              borderRadius: "3px",
              background: "#FAEBD7",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "30% 70%",
                marginBottom: "20px",
              }}
            >
              <p>Email</p>
              <input
                type="email"
                name="userEmail"
                placeholder="bob@gmail.com"
                value={loginInfo.userEmail}
                required
                style={{
                  border: "1px solid black",
                  padding: 5,
                  borderRadius: "2px",
                }}
                onChange={handleChange}
              />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "30% 70%",
                marginBottom: "30px",
              }}
            >
              <p>Password</p>
              <input
                type="password"
                name="userPassword"
                placeholder="12@#asd"
                required
                value={loginInfo.userPassword}
                style={{
                  border: "1px solid black",
                  padding: 5,
                  borderRadius: "2px",
                }}
                onChange={handleChange}
              />
            </div>

            <input
              type="submit"
              value="LOGIN"
              style={{
                border: "1px solid grey",
                // background: "grey",
                padding: "10px",
                borderRadius: "3px",
                width: "100px",
                margin: "0 auto",
                display: "block",
                marginTop: "30px",
                cursor: "pointer",
              }}
            />
          </form>
          <p
            onClick={() => setShowSignUp(!showSignUp)}
            style={{
              textDecoration: "underline",
              color: "blue",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            Don't have an account? &nbsp;Create New Account
          </p>
        </>
      )}

      {showSignUp && <SignUp afterSignUp={afterSignUp} />}
    </>
  );
};

export default Login;
