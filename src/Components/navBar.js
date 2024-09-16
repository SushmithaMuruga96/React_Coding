import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../Utils/ThemeContext";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const projectTheme = useTheme();
  const { userName } = useSelector((state) => state.user);
  const handleTheme = () => {
    projectTheme?.changeTheme(
      projectTheme?.theme === "dark" ? "light" : "dark"
    );
  };
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/login">Login</NavLink>
        <button onClick={handleTheme}>Change Mode</button>
        <div style={{ float: "right" }}>{userName}</div>
      </nav>
    </div>
  );
};
