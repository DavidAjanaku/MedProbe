import React, { useState, useEffect, useRef } from "react";
import user from "../assets/illustrations/profile pic boy.svg";

import settingsIcon from "../assets/illustrations/settings.png";

import logoutIcon from "../assets/illustrations/log-out.png";
import questionIcon from "../assets/illustrations/question.png";

export default function ProfileHeader() {
  const [open, setOpen] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

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

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      
        <img className="" src={props.img}></img>
        <a href={props.path}> {props.text}{" "}
      </a>
    </li>
  );
}
