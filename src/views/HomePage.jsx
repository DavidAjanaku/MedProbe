import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/ProfileHeader";
import Showcase from "../components/Showcase";
import Card from "../components/Card";
import ModalOverlay from "../components/ModalOverlay";
import SearchBar from "../components/SearchBar";
import SideBar from "../components/SideBar";

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowModal(true);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleToggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      {/* {showModal && <ModalOverlay onClose={handleCloseModal} />} */}
      <nav className="justify-between...  bg-indigo-500 ...">
        <Link to="/signup">Sign Up</Link>
        <Link to="/Home">Home</Link>
      </nav>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="home-container bg-gray-100 p-3 mt-4 h-[90vh] flex">
        <div
          className={`w-[20%] md:block ${sidebarVisible ? "block" : "hidden"}`}
        >
          <SideBar />
        </div>
        <div className="h-[90vh] ml-2 w-[100%] md:w-[80%] ">
          <div className="bg-gray-200 rounded-xl mt-4 p-4 overflow-scroll h-[90vh] main-section ">
            <Showcase />
            <SearchBar />
          </div>
        </div>
      </div>
    </>
  );
}
