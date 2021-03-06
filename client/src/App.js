import Main from "./main/Main";
import Login from "./login/Login";
import SignUp from "./signUp/SignUp";
import Dashboard from "./dashboard/Dashboard";
import PostFeed from "./postFeed/PostFeed";
import Header from "./Shared/header/Header";
import Footer from "./Shared/footer/Footer";
import CreateExperience from "./createExperience/CreateExperience";
import CreateEducation from "./createEducation/CreateEducation";
import Profiles from "./profiles/profilesCard/Profiles";
import UserProfile from "./profiles/profileUser/UserProfile";
import CreateProfile from "./createProfile/CreateProfile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./protectedRoutes/ProtectedRoutes";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<SignUp />} />

        <Route element={<ProtectedRoutes />}>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/feed" element={<PostFeed />} />
          <Route exact path="/edit-profile" element={<CreateProfile />} />
          <Route exact path="/add-experience" element={<CreateExperience />} />
          <Route exact path="/add-education" element={<CreateEducation />} />
          <Route exact path="/create-profile" element={<CreateProfile />} />
        </Route>

        <Route exact path="/profiles" element={<Profiles />} />
        <Route exact path="/profiles/:name" element={<UserProfile />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
