import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import wellixLogo from "../assets/wellix-logo.jpeg";


const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  let dropdownTimeout;

  const handleMouseEnter = (menu) => {
    clearTimeout(dropdownTimeout);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 500); 
  };

  const handleClick = () => {
    setActiveDropdown(null); 
  };

  const toggleMobileDropdown = (menu) => {
    setMobileDropdown(mobileDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-primary text-gray-300 p-4 shadow-md relative">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-100"><img src={wellixLogo} alt="Wellix Logo" className="h-20" />
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
        <li className="relative group" onMouseEnter={() => handleMouseEnter("about")} onMouseLeave={handleMouseLeave}> 
          <Link to="/about" className="hover:text-black" onClick={handleClick}>About</Link>
          {activeDropdown === "about" && (
            <ul className="absolute z-10  left-0 mt-2 bg-white text-gray-800 shadow-md w-48">
              <li><Link to="/about/short-history" className="block px-4 py-2 hover:bg-gray-200">Short History</Link></li>
              <li><Link to="/about/company-today" className="block px-4 py-2 hover:bg-gray-200">Company Today</Link></li>
              <li><Link to="/about/our-advantages" className="block px-4 py-2 hover:bg-gray-200">Our Advantages</Link></li>
              <li><Link to="/about/vendors" className="block px-4 py-2 hover:bg-gray-200">Vendors</Link></li>
              <li><Link to="/about/reference-clients" className="block px-4 py-2 hover:bg-gray-200">Reference Clients</Link></li>
            </ul>
          )}
        </li>

        <li className="relative group" onMouseEnter={() => handleMouseEnter("services")} onMouseLeave={handleMouseLeave}> 
          <Link to="/services" className="hover:text-black" onClick={handleClick}>Services</Link>
          {activeDropdown === "services" && (
            <ul className="absolute z-10 left-0 mt-2 bg-white text-gray-800 shadow-md w-48">
              <li><Link to="/services/building-new-wells" className="block px-4 py-2 hover:bg-gray-200">Building New Wells</Link></li>
              <li><Link to="/services/maintenance" className="block px-4 py-2 hover:bg-gray-200">Rehabilitation</Link></li>
              <li><Link to="/services/conservation" className="block px-4 py-2 hover:bg-gray-200">Conservation</Link></li>
            </ul>
          )}
        </li>

        <li className="relative group" onMouseEnter={() => handleMouseEnter("projects")} onMouseLeave={handleMouseLeave}> 
          <Link to="/projects" className="hover:text-black" onClick={handleClick}>Projects</Link>
          {activeDropdown === "projects" && (
            <ul className=" z-10 absolute left-0 mt-2 bg-white text-gray-800 shadow-md w-48">
              <li><Link to="/projects/completed" className="block px-4 py-2 hover:bg-gray-200">Completed</Link></li>
              <li><Link to="/projects/ongoing" className="block px-4 py-2 hover:bg-gray-200">Ongoing</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/faq" className="hover:text-black">FAQ</Link></li>
        <li><Link to="/contact" className="hover:text-black">Contact</Link></li>
      </ul>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="md:hidden flex flex-col bg-primary text-gray-300 p-4">
          <li className="flex justify-between items-center px-4 py-2 hover:bg-gray-700" onClick={() => toggleMobileDropdown("about")}> <Link to="/about">About</Link> <ChevronDown /></li>
          {mobileDropdown === "about" && (
            <ul className="pl-6">
              <li><Link to="/about/short-history" className="block py-2">Short History</Link></li>
              <li><Link to="/about/company-today" className="block py-2">Company Today</Link></li>
              <li><Link to="/about/our-advantages" className="block py-2">Our Advantages</Link></li>
              <li><Link to="/about/vendors" className="block py-2">Vendors</Link></li>
              <li><Link to="/about/reference-clients" className="block py-2">Reference Clients</Link></li>
            </ul>
          )}
          <li className="flex justify-between items-center px-4 py-2 hover:bg-gray-700" onClick={() => toggleMobileDropdown("services")}> <Link to="/services">Services</Link> <ChevronDown /></li>
          {mobileDropdown === "services" && (
            <ul className="pl-6">
              <li><Link to="/services/building-new-wells" className="block px-4 py-2 hover:bg-gray-200">Building New Wells</Link></li>
              <li><Link to="/services/rehabilitation-wells" className="block px-4 py-2 hover:bg-gray-200">Rehabilitation</Link></li>
              <li><Link to="/services/conservation-wells" className="block px-4 py-2 hover:bg-gray-200">Conservation</Link></li>
            </ul>
          )}
          <li className="flex justify-between items-center px-4 py-2 hover:bg-gray-700" onClick={() => toggleMobileDropdown("projects")}> <Link to="/projects">Projects</Link> <ChevronDown /></li>
          {mobileDropdown === "projects" && (
            <ul className="pl-6">
              <li><Link to="/projects/completed" className="block px-4 py-2 hover:bg-gray-200">Completed</Link></li>
              <li><Link to="/projects/ongoing" className="block px-4 py-2 hover:bg-gray-200">Ongoing</Link></li>
            </ul>
          )}
          <li><Link to="/faq" className="block px-4 py-2 hover:bg-gray-700">FAQ</Link></li>
          <li><Link to="/contact" className="block px-4 py-2 hover:bg-gray-700">Contact</Link></li>
        </ul>
      )}
       <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#003d73] via-[#005c8d] to-[#00a9e0] animate-waterFlow"></div>
    </nav>
  );
};

export default Navbar;