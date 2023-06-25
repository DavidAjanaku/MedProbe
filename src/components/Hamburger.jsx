import React, { useState } from "react";

export default function Hamburger({ onClick }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    onClick(); // Invoke the onClick function passed from the parent component
  };

  return (
    <div>
      <button
        className=" -ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-indigo-500 text-3xl text-indigo-500"
        onClick={handleClick}
      >
        {clicked ? "x" : String.fromCharCode(9776)}
      </button>
    </div>
  );
}
