import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import AdminPage from "./AdminPage";

const Adminapp = () => {
  //   const [isLogin, SetIsLogin] = useState(false);
  //   const [isregistered, SetIsregister] = useState(true);

  const [currentView, setCurrentView] = useState("login");
  //   const handleLogin = (checked) => {
  //     SetIsLogin(checked);
  //   };
  //   const handleRegister = (checked) => {
  //     SetIsregister(checked);
  //   };
  return (
    <>
      {currentView === "login" && (
        <Login
          handleLogin={() => setCurrentView("admin")}
          handleRegister={() => setCurrentView("signup")}
        />
      )}
      {currentView === "admin" && <AdminPage />}
      {currentView === "signup" && (
        <Signup handleLogin={() => setCurrentView("login")} />
      )}
    </>
  );
};

export default Adminapp;
