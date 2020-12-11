import React, { useState } from "react";
import "./index.css";

const SearchWidget = () => {
  const setFocusToTextBox = () => {
    document.getElementById("search").focus();
  };

  const [isActive, setIsActive] = useState(false);
  return (
    <div className="flex justify-center items-center min-h-screen relative bg-gray-400">
      <input
        id="search"
        type="text"
        className={` h-8 border-none  focus:outline-none pl-4 transition-width duration-500 ease
                 ${isActive ? "w-52" : "w-8"}
        `}
        placeholder={isActive && "Search..."}
        autoFocus
      />
      <button
        className={`h-8 w-8 absolute bg-white border-none focus:outline-none transform transition duration-500 ease ${
          isActive ? "translate-x-20  delay-200 " : " translate-x-0"
        }`}
        onClick={() => {
          const tempIsActive = !isActive;
          setIsActive(tempIsActive);
          tempIsActive && setTimeout(() => {
            setFocusToTextBox();
          },500)
        }}
      >
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default SearchWidget;
