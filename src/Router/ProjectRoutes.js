import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import SearchComponent from "../Components/SearchComponent";
import { Home } from "../Pages/Home";
import { Profile } from "../Pages/Profile";
import { NavBar } from "../Components/navBar";
import { ThemeProvider } from "../Utils/ThemeContext";

const ProjectRoutes = () => {
  return (
    <ThemeProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={<SearchComponent />} /> */}
        <Route path="*" element={<SearchComponent />} />
      </Routes>
    </ThemeProvider>
  );
};

export default ProjectRoutes;
