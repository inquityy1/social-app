import Main from "./Main/Main";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import Header from "./Reusable/Header/Header";
import Footer from "./Reusable/Footer/Footer";
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
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
