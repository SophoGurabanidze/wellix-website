import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import wellixLogo from "../assets/wellix-logo.jpeg";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const { t, i18n } = useTranslation();

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

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ka" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <nav className="bg-primary text-gray-500  text-md font-bold shadow-md relative">
      {/* Language Switcher Bar */}
      <div className="w-full h-12 bg-gradient-to-r from-[#003d73] via-[#005c8d] to-[#00a9e0] flex justify-end items-center px-4 text-[14px]">

  <div>
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-[6px] bg-white/20 hover:bg-white/30 rounded-full text-white font-medium transition px-[10px] h-[28px] text-[13px] leading-none"
    >
      <div className="w-[14px] h-[14px] bg-white rounded-full border border-gray-300" />
      {i18n.language === "en" ? "ქარ" : "Eng"}
    </button>
  </div>
</div>



      <div className="text-gray-700 container mx-auto flex justify-between items-center p-4">
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
        <ul className="text-gray-500  text-lg hidden md:flex items-center space-x-6 h-[6.5rem] mt-[1rem]">
          {/* About */}
          <li
            className="relative group"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/about/about-us"
              className=" text-gray-500! hover:underline decoration-sky-700 decoration-2 underline-offset-4"
              onClick={handleClick}
            >
              {t("nav.about")}
            </Link>
            {activeDropdown === "about" && (
              <ul className="absolute z-10 left-0 mt-2 bg-white text-gray-400 shadow-md w-72 border border-gray-200 rounded">
                <li className="border-b border-gray-200">
                  <Link to="/about/about-us" className="block px-4 py-2 hover:bg-gray-200">{t("nav.about")}</Link>
                </li>
                <li className="border-b border-gray-200">
                  <Link to="/about/short-history" className="block px-4 py-2 hover:bg-gray-200">{t("nav.short_history")}</Link>
                </li>
                <li className="border-b border-gray-200">
                  <Link to="/about/our-advantages" className="block px-4 py-2 hover:bg-gray-200">{t("nav.advantages")}</Link>
                </li>
                <li className="last:border-b-0">
                  <Link to="/about/reference-clients" className="block px-4 py-2 hover:bg-gray-200">{t("nav.partners")}</Link>
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
              {t("nav.services")}
            </Link>
            {activeDropdown === "services" && (
              <ul className="absolute z-10 left-0 mt-2 bg-white text-gray-400 shadow-md w-72 border border-gray-200 rounded">
                <li className="border-b border-gray-200">
                  <Link to="building-new-wells" className="block px-4 py-2 hover:bg-gray-200">{t("nav.new_wells")}</Link>
                </li>
                <li className="border-b border-gray-200">
                  <Link to="maintenance" className="block px-4 py-2 hover:bg-gray-200">{t("nav.rehabilitation")}</Link>
                </li>
                <li className="last:border-b-0">
                  <Link to="conservation" className="block px-4 py-2 hover:bg-gray-200">{t("nav.conservation")}</Link>
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
              to="/projects/completed"
              className="hover:underline decoration-sky-700 decoration-2 underline-offset-4"
              onClick={handleClick}
            >
              {t("nav.projects")}
            </Link>
            {activeDropdown === "projects" && (
              <ul className="absolute z-10 left-0 mt-2 bg-white text-gray-400 shadow-md w-72 border border-gray-200 rounded">
                <li className="last:border-b-0">
                  <Link to="/projects/completed" className="block px-4 py-2 hover:bg-gray-200">{t("nav.featured")}</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/faq" className="hover:underline decoration-sky-700 decoration-2 underline-offset-4">{t("nav.faq")}</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline decoration-sky-700 decoration-2 underline-offset-4">{t("nav.contact")}</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="md:hidden flex flex-col bg-primary text-gray-500 p-4">
          <li className="flex justify-between items-center px-4 py-2 hover:bg-sky-800" onClick={() => toggleMobileDropdown("about")}>
            <Link to="/about/about-us">{t("nav.about")}</Link> <ChevronDown />
          </li>
          {mobileDropdown === "about" && (
            <ul className="pl-6">
              <li><Link to="/about/about-us" className="block py-2 hover:bg-sky-600">{t("nav.about")}</Link></li>
              <li><Link to="/about/short-history" className="block py-2 hover:bg-sky-600">{t("nav.short_history")}</Link></li>
              <li><Link to="/about/our-advantages" className="block py-2 hover:bg-sky-600">{t("nav.advantages")}</Link></li>
              <li><Link to="/about/reference-clients" className="block py-2 hover:bg-sky-600">{t("nav.partners")}</Link></li>
            </ul>
          )}

          <li className="flex justify-between items-center px-4 py-2 hover:bg-sky-800" onClick={() => toggleMobileDropdown("services")}>
            <Link to="/services">{t("nav.services")}</Link> <ChevronDown />
          </li>
          {mobileDropdown === "services" && (
            <ul className="pl-6">
              <li><Link to="building-new-wells" className="block py-2 hover:bg-sky-600">{t("nav.new_wells")}</Link></li>
              <li><Link to="maintenance" className="block py-2 hover:bg-sky-600">{t("nav.rehabilitation")}</Link></li>
              <li><Link to="conservation" className="block py-2 hover:bg-sky-600">{t("nav.conservation")}</Link></li>
            </ul>
          )}

          <li className="flex justify-between items-center px-4 py-2 hover:bg-sky-800" onClick={() => toggleMobileDropdown("projects")}>
            <Link to="/projects/completed">{t("nav.projects")}</Link> <ChevronDown />
          </li>
          {mobileDropdown === "projects" && (
            <ul className="pl-6">
              <li><Link to="/projects/completed" className="block px-4 py-2 hover:bg-sky-600">{t("nav.featured")}</Link></li>
            </ul>
          )}

          <li><Link to="/faq" className="block px-4 py-2 hover:bg-sky-800">{t("nav.faq")}</Link></li>
          <li><Link to="/contact" className="block px-4 py-2 hover:bg-sky-800">{t("nav.contact")}</Link></li>
        </ul>
      )}

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#003d73] via-[#005c8d] to-[#00a9e0] animate-waterFlow"></div>
    </nav>
  );
};

export default Navbar;
