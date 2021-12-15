import Main from "./main/Main";
import Login from "./login/Login";
import SignUp from "./signUp/SignUp";
import Dashboard from "./dashboard/Dashboard";
import Header from "./Shared/header/Header";
import Footer from "./Shared/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
