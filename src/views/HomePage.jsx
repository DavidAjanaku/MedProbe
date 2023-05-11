// import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/ProfileHeader";
import SearchSection from "../components/Showcase";
import Card from "../components/Card";
import Food from "../components/ApiContainers/food";

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

            <div className="card-section  max-w-5xl mt-20 m-auto">
              <div className="card-wrapper">
                <div className="card-wrapper__contents max-w-4xl m-auto flex flex-wrap  gap-10 justify-center">
                  <Link to="/profile">
                    <Card
                      imageSrc="/public/assets/illustrations/appleLogo.png"
                      title="Anatomy"
                      description="ur adipisicing elit. Dicta eum"
                    />
                  </Link>
                  <Link to="/profile">
                    <Card
                      imageSrc="/public/assets/illustrations/appleLogo.png"
                      title="Conditions"
                      description="ur adipisicing elit. Dicta eum"
                    />
                  </Link>{" "}
                  <Link to="/profile">
                    <Card
                      imageSrc="/public/assets/illustrations/appleLogo.png"
                      title="Heroes"
                      description="ur adipisicing elit. Dicta eum"
                    />
                  </Link>{" "}
                  <Link to="/profile">
                    <Card
                      imageSrc="/public/assets/illustrations/appleLogo.png"
                      title="Terminology"
                      description="ur adipisicing elit. Dicta eum"
                    />
                  </Link>
                  <Link to="/profile">
                    <Card
                      imageSrc="/public/assets/illustrations/appleLogo.png"
                      title="Terminology"
                      description="ur adipisicing elit. Dicta eum"
                    />
                  </Link>
                  <Link to="/profile">
                    <Card
                      imageSrc="/public/assets/illustrations/appleLogo.png"
                      title="Alternatives"
                      description="ur adipisicing elit. Dicta eum"
                    />
                  </Link>
                  <Link to="/profile">
                    <Card
                      imageSrc="/public/assets/illustrations/appleLogo.png"
                      title="Nutrition"
                      description="ur adipisicing elit. Dicta eum"
                    />
                  </Link>
                  <Link to="/profile">
                    <Card
                      imageSrc="/public/assets/illustrations/appleLogo.png"
                      title="Mental Health"
                      description="ur adipisicing elit. Dicta eum"
                    />
                  </Link>
                  <Link to="/profile">
                    <Card
                      imageSrc="/public/assets/illustrations/appleLogo.png"
                      title="Medical Research"
                      description="ur adipisicing elit. Dicta eum"
                    />
                  </Link>

                  <Link to="/profile">
                    <Card
                      imageSrc="/public/assets/illustrations/appleLogo.png"
                      title="Public Health"
                      description="ur adipisicing elit. Dicta eum"
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
