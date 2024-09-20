import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/sgg.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-b from-blue-900 to-blue-800 shadow-lg">
      {/* Upper Part */}
      <div className="bg-blue-900 py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Left: Logo and Text */}
          <div className="flex items-center space-x-4">
            <img src={Logo} alt="Royaume du Maroc" className="h-14 w-52 transition-transform transform hover:scale-105 duration-300" />
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-white text-2xl focus:outline-none transition-transform transform hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>

          {/* Right: Utility Links */}
          <ul className="hidden md:flex space-x-6 text-sm text-white">
            {["Contact", "Plan du site", "Liens utiles", "Galerie", "العربية"].map((item, index) => (
              <li key={index}>
                <Link to={`/${item.toLowerCase().replace(/\s+/g, '')}`} className="hover:underline hover:text-gray-300 transition-colors duration-300">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Lower Part */}
      <nav className="bg-blue-800 py-3 shadow-lg">
        <div className="container mx-auto">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex justify-center space-x-8 text-white font-semibold text-xs">
            {[
              { label: "LE SGG", icon: "fa-home", link: "/" },
              { label: "ECONOMIE ET FINANCE", link: "/economie" },
              { label: "SANTE", link: "/santé" },
              { label: "JUSTICE ET DROIT", link: "/justice" },
              { label: "TRAVAIL ET EMPLOI", link: "/travail" },
              { label: "HABITAT ET URBANISME", link: "/habitat" },
              { label: "AGRICULTURE", link: "/agriculture" },
              { label: "ENVIRONNEMENT ET DEVELOPPEMENT", link: "/environnement" },
            ].map((item, index) => (
              <li key={index} className="transition-transform transform hover:scale-105 duration-300">
                <Link to={item.link} className="flex items-center space-x-2 hover:text-gray-300">
                  {item.icon && <i className={`fas ${item.icon}`}></i>}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation - Show when isOpen is true */}
          {isOpen && (
            <div className="flex flex-col items-center space-y-4 md:hidden text-white text-sm">
              {[
                { label: "LE SGG", link: "/" },
                { label: "CONSEIL DES MINISTRES", link: "/conseil" },
                { label: "TRAVAIL GOUVERNEMENTAL", link: "/travail" },
                { label: "LÉGISLATION", link: "/legislation" },
                { label: "BULLETINS OFFICIELS", link: "/bulletins" },
                { label: "PROFESSIONS RÉGLEMENTÉES", link: "/professions" },
                { label: "ASSOCIATIONS", link: "/associations" },
              ].map((item, index) => (
                <Link key={index} to={item.link} className="hover:text-gray-300 transition-colors duration-300">
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
