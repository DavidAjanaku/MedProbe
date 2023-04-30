import React from "react";
import { Link } from "react-router-dom";
import Header from "./profileHeader";


export default function HomePage() {



  return (
    <>
      <nav className="justify-between...  bg-indigo-500 ...">
        <Link to="/">Sign Up</Link>
        <Link to="/Home">Home</Link>
      </nav>
       <Header/>
      <div className="home-container bg-gray-100 p-3  mt-4  h-screen" >
     
        
        <div className="grid grid-cols-5 gap-4 h-screen">
          <div className=" bg-green-500  ">01</div>
          <div className=" bg-blue-500 col-span-2   col-span-4">1</div>
        </div>
      </div>
    </>
  );
}


