// import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/ProfileHeader";
import SearchSection from "../components/SearchSection";

export default function HomePage() {
  return (
    <>
      <nav className="justify-between...  bg-indigo-500 ...">
        <Link to="/signup">Sign Up</Link>
        <Link to="/Home">Home</Link>
      </nav>
      <Header />
      <div className="home-container bg-gray-100 p-3  mt-4  h-screen">
        <div className="grid grid-cols-5 gap-2 h-screen">
          <div className=" bg-blue-500 rounded-xl  sidebar  hidden md:block"></div>
          <div className="bg-gray-200 rounded-xl col-span-2   col-span-5 main-section  md:col-span-4">
            <SearchSection />
          </div>
        </div>
      </div>
    </>
  );
}
