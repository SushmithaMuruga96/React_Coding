import React, { useState } from "react";
import "../Styles/signup.css";
import { useDispatch } from "react-redux";
import { updateSignUp } from "../Redux/Slice/SignupSlice";

function SignUp({ afterSignUp }) {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();

  const [showPwd, setShowPwd] = useState(false);

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userInfo.confirmPassword !== userInfo.password) {
      alert("Password Mismatch");
    } else {
      dispatch(updateSignUp(userInfo));
      alert("successfully Submitted", userInfo);
      afterSignUp();
    }
  };
  return (
    <>
      <h1 className="login"> Create New Account</h1>
      <form className="form" onSubmit={handleSubmit}>
        {/* <input
          className="input"
          type="text"
          name="name"
          value={userInfo.name}
          required
          placeholder="User Name"
          onChange={handleInputChange}
        ></input> */}
        <input
          className="input"
          type="email"
          name="email"
          value={userInfo.email}
          required
          placeholder="Email"
          onChange={handleInputChange}
        ></input>
        <input
          className="input"
          type={showPwd ? "text" : "password"}
          name="password"
          value={userInfo.password}
          required
          placeholder="Password"
          onChange={handleInputChange}
        ></input>
        <input
          className="input"
          type={showPwd ? "text" : "password"}
          name="confirmPassword"
          value={userInfo.confirmPassword}
          required
          placeholder="Confirm Password"
          onChange={handleInputChange}
        ></input>
        <div className="checkbox">
          <input type="checkbox" onClick={() => setShowPwd(!showPwd)} />
          <p>show password</p>
        </div>
        <br />
        {/* <div className="">
          <div className="">fghjkl</div>
          <input className="" type="button" name="create" value="Click Me" />
        </div> */}
        {/* Captcha */}
        {/* <input className="" type="text" name="captcha" value=""></input> */}
        <input className="submit" type="submit" value="SIGN UP" />
        <br />
        {/* <p>Forgot Password?</p> <br />
        <p>Don't have account? Sign up</p> */}
      </form>
    </>
  );
}

export default SignUp;
