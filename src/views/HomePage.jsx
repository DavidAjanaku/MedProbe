// import React from "react";
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Header from "../components/ProfileHeader";
import Showcase from "../components/Showcase";
import Card from "../components/Card";
import ModalOverlay from "../components/ModalOverlay";
import SearchBar from "../components/SearchBar";

export default function HomePage() {

  const [showModal, setShowModal] = useState(false);

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

   
  return (
    <>
      {showModal && <ModalOverlay onClose={handleCloseModal} />}
      <nav className="justify-between...  bg-indigo-500 ...">
        <Link to="/signup">Sign Up</Link>
        <Link to="/Home">Home</Link>
      </nav>
      <Header />
      <div className="home-container bg-gray-100 p-3  mt-4  h-screen">
        <div className="grid grid-cols-5 gap-2 h-screen">
          <div className=" bg-blue-500 rounded-xl  sidebar  hidden md:block"></div>
          <div className="bg-gray-200 rounded-xl col-span-2   col-span-5 main-section  md:col-span-4">
            <Showcase />
<SearchBar/>
           
          </div>
        </div>
      </div>
    </>
  );
}
