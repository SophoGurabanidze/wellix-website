// src/components/Loader.jsx
import React, { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    const handleLoad = () => {
      const loader = document.getElementById("preloader");
      if (loader) {
        loader.classList.add("opacity-0");
        setTimeout(() => loader.remove(), 500); // Delay for fade-out
      }
    };

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div
      id="preloader"
      className="fixed inset-0 z-50 bg-white flex items-center justify-center transition-opacity duration-500"
    >
      <div className="relative w-24 h-24">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full animate-drop" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 border-2 border-blue-600 rounded-full animate-ripple" />
      </div>
    </div>
  );
};

export default Loader;
