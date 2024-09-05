import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Components/Login";
import Home from "../Components/Home";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
