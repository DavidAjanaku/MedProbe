import "../App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./HomePage";
import SignUpPage from "./SignUpPage";
// import OtpPage from "./OtpPage";
import ErrorPage from "../components/Error";
import SignInPage from "./SignInPage";
import "../index.css";
import { AuthContextProvider } from "../context/AuthContext";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/Home" element={<Home />} />
          {/* <Route path="/otpPage" element={<OtpPage />} /> */}
          <Route path="/login" element={<SignInPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
