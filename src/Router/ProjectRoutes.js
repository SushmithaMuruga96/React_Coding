// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Login from "../Pages/Login";
// import SearchComponent from "../Components/SearchComponent";
// import { Home } from "../Pages/Home";
// import { Profile } from "../Pages/Profile";
// import { NavBar } from "../Components/navBar";
// import { ThemeProvider } from "../Utils/ThemeContext";

import useUserInactivityHook from "../Hooks/UserInactivityHook";

// import { LayoutOne } from "../Components/LayoutOne";
// import { SimpleLayout } from "../Components/SimpleLayout";

const ProjectRoutes = () => {
  useUserInactivityHook();
  // return (
  //   // <ThemeProvider>
  //   //   <NavBar />
  //   //   <Routes>
  //   //     <Route path="/" element={<Home />} />
  //   //     <Route path="profile" element={<Profile />} />
  //   //     <Route path="/login" element={<Login />} />
  //   //     {/* <Route path="/" element={<SearchComponent />} /> */}
  //   //     <Route path="*" element={<SearchComponent />} />
  //   //   </Routes>
  //   // </ThemeProvider>
  //   // <LayoutOne />
  //   <SimpleLayout />
  // );
};

export default ProjectRoutes;
