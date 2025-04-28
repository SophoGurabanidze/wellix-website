import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
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
        <Link to="/" className="text-2xl font-bold text-gray-100">
          <img
            src={wellixLogo}
            alt="Wellix Logo"
            className="w-[15rem] md:w-[17rem] h-[6.5rem]"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="mt-[1rem] w-8 h-8 text-green-800 bg-white p-1 rounded" />
          ) : (
            <Menu className="mt-[1rem] w-8 h-8 text-green-800 bg-white p-1 rounded" />
          )}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 h-[6.5rem] mt-[1rem]">
          {/* About */}
          <li
            className="relative group"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/about/company-today"
              className="hover:underline decoration-sky-700 decoration-2 underline-offset-4"
              onClick={handleClick}
            >
              ჩვენ შესახებ
            </Link>
            {activeDropdown === "about" && (
              <ul className="absolute z-10 left-0 mt-2 bg-white text-gray-800 shadow-md w-72 border border-gray-200 rounded">
                <li className="border-b border-gray-200">
                  <Link to="/about/company-today" className="block px-4 py-2 hover:bg-gray-200">ჩვენ შესახებ</Link>
                </li>
                <li className="border-b border-gray-200">
                  <Link to="/about/short-history" className="block px-4 py-2 hover:bg-gray-200">მნიშვნელოვანი მოვლენები</Link>
                </li>
                <li className="border-b border-gray-200">
                  <Link to="/about/our-advantages" className="block px-4 py-2 hover:bg-gray-200">ჩვენი უპირატესობები</Link>
                </li>
                <li className="last:border-b-0">
                  <Link to="/about/reference-clients" className="block px-4 py-2 hover:bg-gray-200">პარტნიორები</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Services */}
          <li
            className="relative group"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/services"
              className="hover:underline decoration-sky-700 decoration-2 underline-offset-4"
              onClick={handleClick}
            >
              მომსახურებები
            </Link>
            {activeDropdown === "services" && (
              <ul className="absolute z-10 left-0 mt-2 bg-white text-gray-800 shadow-md w-72 border border-gray-200 rounded">
                <li className="border-b border-gray-200">
                  <Link to="building-new-wells" className="block px-4 py-2 hover:bg-gray-200">ჭაბურღილის მშენებლობა</Link>
                </li>
                <li className="border-b border-gray-200">
                  <Link to="maintenance" className="block px-4 py-2 hover:bg-gray-200">ჭაბურღილის რეაბილიტაცია</Link>
                </li>
                <li className="last:border-b-0">
                  <Link to="conservation" className="block px-4 py-2 hover:bg-gray-200">ჭაბურღილის კონსერვაცია</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Projects */}
          <li
            className="relative group"
            onMouseEnter={() => handleMouseEnter("projects")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/projects"
              className="hover:underline decoration-sky-700 decoration-2 underline-offset-4"
              onClick={handleClick}
            >
              პროექტები
            </Link>
            {activeDropdown === "projects" && (
              <ul className="absolute z-10 left-0 mt-2 bg-white text-gray-800 shadow-md w-72 border border-gray-200 rounded">
                <li className="last:border-b-0">
                  <Link to="/projects/completed" className="block px-4 py-2 hover:bg-gray-200">გამორჩეული პროექტები</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/faq" className="hover:underline decoration-sky-700 decoration-2 underline-offset-4">FAQ</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline decoration-sky-700 decoration-2 underline-offset-4">კონტაქტი</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="md:hidden flex flex-col bg-primary text-gray-300 p-4">
          <li className="flex justify-between items-center px-4 py-2 hover:bg-sky-800" onClick={() => toggleMobileDropdown("about")}>
            <Link to="/about/company-today">ჩვენ შესახებ</Link> <ChevronDown />
          </li>
          {mobileDropdown === "about" && (
            <ul className="pl-6">
              <li><Link to="/about/company-today" className="block py-2 hover:bg-sky-600">ჩვენ შესახებ</Link></li>
              <li><Link to="/about/short-history" className="block py-2 hover:bg-sky-600">მნიშვნელოვანი მოვლენები</Link></li>
              <li><Link to="/about/our-advantages" className="block py-2 hover:bg-sky-600">ჩვენი უპირატესობები</Link></li>
              <li><Link to="/about/reference-clients" className="block py-2 hover:bg-sky-600">პარტნიორები</Link></li>
            </ul>
          )}
          <li className="flex justify-between items-center px-4 py-2 hover:bg-sky-800" onClick={() => toggleMobileDropdown("services")}>
            <Link to="/services">მომსახურებები</Link> <ChevronDown />
          </li>
          {mobileDropdown === "services" && (
            <ul className="pl-6">
              <li><Link to="/services/building-new-wells" className="block py-2 hover:bg-sky-600">ჭაბურღილის მშენებლობა</Link></li>
              <li><Link to="/services/rehabilitation-wells" className="block py-2 hover:bg-sky-600">ჭაბურღილის რეაბილიტაცია</Link></li>
              <li><Link to="/services/conservation-wells" className="block py-2 hover:bg-sky-600">ჭაბურღილის კონსერვაცია</Link></li>
            </ul>
          )}
          <li className="flex justify-between items-center px-4 py-2 hover:bg-sky-800" onClick={() => toggleMobileDropdown("projects")}>
            <Link to="/projects">პროექტები</Link> <ChevronDown />
          </li>
          {mobileDropdown === "projects" && (
            <ul className="pl-6">
              <li><Link to="/projects/completed" className="block px-4 py-2 hover:bg-sky-600">გამორჩეული პროექტები</Link></li>
            </ul>
          )}
          <li><Link to="/faq" className="block px-4 py-2 hover:bg-sky-800">FAQ</Link></li>
          <li><Link to="/contact" className="block px-4 py-2 hover:bg-sky-800">კონტაქტი</Link></li>
        </ul>
      )}

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#003d73] via-[#005c8d] to-[#00a9e0] animate-waterFlow"></div>
    </nav>
  );
};

export default Navbar;
