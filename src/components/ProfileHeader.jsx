import React, { useState, useEffect, useRef } from "react";


// Import the images for the dropdown menu icons

import user from "../assets/illustrations/profile pic boy.svg";

import settingsIcon from "../assets/illustrations/settings.png";

import logoutIcon from "../assets/illustrations/log-out.png";
import questionIcon from "../assets/illustrations/question.png";


// End of the import

import DropdownItem from "./Dropdown";



export default function ProfileHeader() {

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
      className="menu-container h-14 p-3  fixed left-0 right-0 top-0  bg-white	"
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
          src={user}
        ></img>
      </div>
      <div className={`dropdown-menu  ${open ? "active" : "inactive"}`}>
        <h3>
          Welcome <span>Username</span>
        </h3>
        <ul>
          <DropdownItem img={user} text={"My Profile"} path="/profile"/>
          <DropdownItem img={settingsIcon} text={"Settings"}  path="/settings"/>
          <DropdownItem img={questionIcon} text={"Help Center"} path="/helpcenter"/>
          <DropdownItem img={logoutIcon} text={"Logout"} path="/"/>
        </ul>
      </div>
    </div>
  );
      }



