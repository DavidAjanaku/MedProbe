import "../App.css";
import SignUpPage from "./SignUpPage";

function App() {
  return (
    <>
      <div>
        <h1 className="text-blue-700">Hello World</h1>
        <div className="font-acumin-pro font-regular">Regular</div>
        <div className="font-acumin-pro-italic font-regular">Italic</div>
        <div className="font-acumin-pro font-bold">Bold</div>
        <div className="font-acumin-pro-bold-italic font-bold">Bold Italic</div>
      </div>
      <SignUpPage />
    </>
  );
}

export default App;
