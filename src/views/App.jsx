import "../App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./HomePage";
import SignUpPage from "./SignUpPage";
import OtpPage from "./OtpPage";
import ErrorPage from "../components/Error";
import SignInPage from "./SignInPage"
import "../index.css"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/otpPage" element={<OtpPage />} />
          <Route path="/login" element={<SignInPage />} />


          {/* If a user navigates to a link that is not defined, the code will still work and display an error message " */}
          <Route path="/*" element={<ErrorPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
