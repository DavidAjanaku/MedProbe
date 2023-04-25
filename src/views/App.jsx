import "../App.css";
import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";
import Home from "./HomePage"
import SignUpPage from "./SignUpPage";

function App() {
  return (
    <>
      <Router >
      <nav className="justify-between...  bg-indigo-500 ...">
        <Link to ="/">Home</Link>
        <Link to ="/Signup">Sign Up</Link>
      

      </nav>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/Signup" element={<SignUpPage/>}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
