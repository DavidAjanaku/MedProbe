// import React from "react";
// import well from '/Users/user/Desktop/med-probe/public/assets/illustrations/welcomeToMed.avif'

export default function ({ onClose }) {
  // Function component that receives a prop onClose
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="bg-white rounded-lg shadow-lg p-6 relative">
          <button
            className="absolute top-0 right-0 m-3 text-gray-500 hover:text-gray-700"
            onClick={onClose} // Button with onClick event listener that triggers the onClose function passed as a prop
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M18.3 5.7c-.4-.4-1-.4-1.4 0L12 10.6 7.1 5.7c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4.9 4.9-4.9 4.9c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3L12 13.4l4.9 4.9c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-4.9-4.9 4.9-4.9c.4-.3.4-1 0-1.4z" />
            </svg>
          </button>
          <p className="text-lg font-medium text-gray-800  " style={{ maxWidth: "500px" }}>
            <img src={well}/>
           <p className="mt-4  text-base">
           Welcome to  medProbe, where you can find information
            on a wide range of medical topics. Whether you're looking for
            information on a particular condition, treatment, or procedure, we
            have you covered. Our database is constantly updated with the latest
            medical research and information, so you can be sure that you're
            getting the most up-to-date information available. To get started,
            simply type in a keyword related to your search, and we'll provide
            you with a list of relevant results. Each result includes a brief
            summary of the topic, as well as links to more in-depth articles and
            resources.
           </p>
          </p>
        </div>
      </div>
    </>
  );
}
