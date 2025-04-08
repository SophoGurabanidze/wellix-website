// src/components/Footer.jsx
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#003d73] text-gray-200 pt-10 pb-6 mt-auto relative">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Wellix</h2>
          <p className="text-sm leading-relaxed">
          Time-Tested Quality
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-3">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about/short-history" className="hover:text-white">Short History</Link></li>
            <li><Link to="/about/company-today" className="hover:text-white">Company Today</Link></li>
            <li><Link to="/about/our-advantages" className="hover:text-white">Our Advantages</Link></li>
            <li><Link to="/about/reference-clients" className="hover:text-white">Reference Clients</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-white mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services/building-new-wells" className="hover:text-white">New Wells</Link></li>
            <li><Link to="/services/maintenance" className="hover:text-white">Rehabilitation</Link></li>
            <li><Link to="/services/conservation" className="hover:text-white">Conservation</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Form</Link></li>
          </ul>
          <p className="text-xs mt-4 text-gray-400">Email: info@wellix.com</p>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Wellix. All rights reserved.
      </div>

      {/* Animated gradient bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#003d73] via-[#005c8d] to-[#00a9e0] animate-waterFlow" />
    </footer>
  );
};

export default Footer;
