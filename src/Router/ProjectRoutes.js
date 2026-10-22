import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import SearchComponent from "../Components/SearchComponent";
import { Home } from "../Pages/Home";
import { Profile } from "../Pages/Profile";
import { NavBar } from "../Components/navBar";
import { ThemeProvider } from "../Utils/ThemeContext";

import useUserInactivityHook from "../Hooks/UserInactivityHook";
import TodoListWithCheckbox from "../Interview Practise/TodoListWithCheckbox";

// import { LayoutOne } from "../Components/LayoutOne";
// import { SimpleLayout } from "../Components/SimpleLayout";

// import CountOperator from "../Interview Practise/CountOperator";
import SearchComponent2 from "../Interview Practise/SearchComponent2.jsx";

const ProjectRoutes = () => {
  // useUserInactivityHook();
  return (
    <ThemeProvider>
      <NavBar />
      <SearchComponent2 />
      {/* <CountOperator /> */}
      {/* <TodoListWithCheckbox /> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<SearchComponent />} />
      </Routes> */}
    </ThemeProvider>
    // <LayoutOne />
    // <SimpleLayout />
    /* <Route path="/" element={<SearchComponent />} /> */
  );
};

export default ProjectRoutes;
