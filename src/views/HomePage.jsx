// import React from "react";
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Header from "../components/ProfileHeader";
import SearchSection from "../components/Showcase";
import Card from "../components/Card";
import ModalOverlay from "../components/ModalOverlay";
import Food from "../components/ApiContainers/food";


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
            <SearchSection />

            <div className="card-section  max-w-5xl mt-20 m-auto">
              <div className="card-wrapper">
                <div className="card-wrapper__contents  max-w-4xl m-auto flex flex-wrap  gap-10 justify-center">
                  <Link to="/profile">
                    <Card
                      imageSrc="/public/assets/illustrations/appleLogo.png"
                      title="Anatomy"
                      description="Explore body parts from head to toe"
                    />
                  </Link>
                  <Link to="/profile">
                    <Card
                      imageSrc="/public/assets/illustrations/appleLogo.png"
                      title="Conditions"
                      description="Learn about different diseases and illness"
                    />
                  </Link>{" "}
                  <Link to="/profile">
                    <Card
                      imageSrc="/public/assets/illustrations/appleLogo.png"
                      title="Heroes"
                      description="Meet the amazing healthcare professionals who made history"
                    />
                  </Link>{" "}
                  <Link to="/profile">
                    <Card
                      imageSrc="/public/assets/illustrations/appleLogo.png"
                      title="Treatments"
                      description="Discover vaccines procedures and therapies"
                    />
                  </Link>
                  <Link to="/profile">
                    <Card
                      imageSrc="/public/assets/illustrations/appleLogo.png"
                      title="Terminology"
                      description="Expand your medical vocalbulary and knowledge"
                    />
                  </Link>
                  <Link to="/profile">
                    <Card
                      imageSrc="/public/assets/illustrations/appleLogo.png"
                      title="Alternatives"
                      description="Discover natural approaches to health and wellness"
                    />
                  </Link>
                  <Link to="/profile">
                    <Card
                      imageSrc="/public/assets/illustrations/appleLogo.png"
                      title="Nutrition"
                      description="Find out how to eat for optimal health"
                    />
                  </Link>
                  <Link to="/profile">
                    <Card
                      imageSrc="/public/assets/illustrations/appleLogo.png"
                      title="Mental Health"
                      description="Informations on mental health conditions and treatments"
                    />
                  </Link>
                  <Link to="/profile">
                    <Card
                      imageSrc="/public/assets/illustrations/appleLogo.png"
                      title="Medical Research"
                      description="Latest medical research findings and breakthroughs"
                    />
                  </Link>

                  <Link to="/profile">
                    <Card
                      imageSrc="/public/assets/illustrations/appleLogo.png"
                      title="Public Health"
                      description="Health issues affecting  entire populations"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
