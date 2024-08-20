import React, { useState } from "react";
import "./signup.css";

function UserSignIn() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("successfully updated", userInfo);
    console.log(userInfo, "userInfo");
  };
  return (
    <>
      <h1 className="login"> Signup Form</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="name"
          value={userInfo.name}
          required
          placeholder="User Name"
          onChange={handleInputChange}
        ></input>
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
          type="password"
          name="password"
          value={userInfo.password}
          required
          placeholder="Password"
          onChange={handleInputChange}
        ></input>
        <input
          className="input"
          type="password"
          name="confirmPassword"
          value={userInfo.confirmPassword}
          required
          placeholder="Confirm Password"
          onChange={handleInputChange}
        ></input>
        <div className="checkbox">
          <input type="checkbox" />
          <p>show password</p>
        </div>
        <br />
        {/* <div className="">
          <div className="">fghjkl</div>
          <input className="" type="button" name="create" value="Click Me" />
        </div> */}
        {/* Captcha */}
        {/* <input className="" type="text" name="captcha" value=""></input> */}
        <input className="submit" type="submit" value="Signup" />
        <br />
        {/* <p>Forgot Password?</p> <br />
        <p>Don't have account? Sign up</p> */}
      </form>
    </>
  );
}

export default UserSignIn;
