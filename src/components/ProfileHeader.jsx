import { useState, useEffect, useRef } from "react";
import settingsIcon from "/assets/illustrations/settings.png";
import logoutIcon from "/assets/illustrations/log-out.png";
import questionIcon from "/assets/illustrations/question.png";
import { UserAuth } from "../context/AuthContext";
import userPic from "/assets/illustrations/user.png";
import { useNavigate } from "react-router-dom";

import DropdownItem from "./Dropdown";

export default function ProfileHeader() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  // Declare the state variable 'open' and the function to update it using the useState hook

  const [open, setOpen] = useState(false);

  // Declare a reference to the dropdown menu element using the useRef hook

  let menuRef = useRef();

  // Declare an effect that adds an event listener to the document to handle mouse clicks

  useEffect(() => {
    // Define the event handler function that will close the dropdown menu if the user clicks outside of it

    let handler = (e) => {
      // Check if the target of the click event is NOT inside the dropdown menu

      if (!menuRef.current.contains(e.target)) {
        // Update the 'open' state to false to close the dropdown menu

        setOpen(false);
        console.log(menuRef.current);
      }
    };
    // Add the event listener to the document

    document.addEventListener("mousedown", handler);

    // Remove the event listener when the component is unmounted

    return () => {
      document.addEventListener("mousedown", handler);
    };
  });
  return (
    <div
      className="menu-container z-40 h-14 p-3  fixed left-0 right-0 top-0  bg-white	"
      ref={menuRef}
    >
      <div
        className="menu-trigger "
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img
          className="absolute  top-4 right-4 rounded-xl  h-12 w-12  cursor-pointer"
          src="/assets/illustrations/profile pic boy.svg"
        />
      </div>
      <div className={`dropdown-menu  ${open ? "active" : "inactive"}`}>
        <h3>
          Welcome <span>{user && user.email}</span>
        </h3>
        <ul>
          <DropdownItem img={userPic} text={"My Profile"} path="/profile" />
          <>
            <DropdownItem
              img={settingsIcon}
              text={"Settings"}
              path="/settings"
            />
            <DropdownItem
              img={questionIcon}
              text={"Help Center"}
              path="/helpcenter"
            />
            <button onClick={handleLogout}>
              <DropdownItem img={logoutIcon} text={"Logout"} />
            </button>
          </>

          {/* <DropdownItem img={settingsIcon} text={"Settings"}  path="/settings" />
          <DropdownItem img={questionIcon} text={"Help Center"} path="/helpcenter" />
          <DropdownItem img={logoutIcon} text={"Logout"} path="/"/> */}
        </ul>
      </div>
    </div>
  );
}
