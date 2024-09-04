import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "../Components/Login";
import Home from "../Components/Home";
const ProjectRoutes = () => {
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </Router>;
};

export default ProjectRoutes;
