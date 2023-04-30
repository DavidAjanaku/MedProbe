import "../App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./HomePage";
import SignUpPage from "./SignUpPage";
import OtpPage from "./OtpPage";
import ErrorPage from "../components/Error";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/otpPage" element={<OtpPage />} />
          <Route path="/*" element={<ErrorPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
