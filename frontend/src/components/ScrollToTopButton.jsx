import React from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTopButton = () => {
  
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
