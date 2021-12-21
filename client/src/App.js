import Main from "./main/Main";
import Login from "./login/Login";
import SignUp from "./signUp/SignUp";
import Dashboard from "./dashboard/Dashboard";
import Header from "./Shared/header/Header";
import Footer from "./Shared/footer/Footer";
import AddExperience from "./addExperience/AddExperience";
import AddEducation from "./addEducation/AddEducation";
import Profiles from "./profiles/profilesCard/Profiles";
import UserProfile from "./profiles/profileUser/UserProfile";
import CreateProfile from "./createProfile/CreateProfile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<SignUp />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/add-experience" element={<AddExperience />} />
        <Route exact path="/add-education" element={<AddEducation />} />
        <Route exact path="/profiles" element={<Profiles />} />
        <Route exact path="/profiles/:name" element={<UserProfile />} />
        <Route exact path="/create-profile" element={<CreateProfile />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
