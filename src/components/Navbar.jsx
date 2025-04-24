import React, { useState } from 'react';
import { FiPhoneCall } from "react-icons/fi";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const nav = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/services", name: "Services" },
    { path: "/Contect", name: "Contect" },
  ];

  return (
    <>
      {/* Navbar Container */}
      <div className="navbarMain fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-8 px-6 sm:px-16 h-16 sm:h-24">
        <div className="shadow-md shadow-black/40 bg-white h-full rounded-2xl sm:mr-12 mr-6">
          <nav className="flex justify-between items-center h-full px-4 sm:px-6">
            {/* Logo */}
            <a className="text-black font-sans font-bold tracking-widest text-xl sm:text-2xl">
              DENTOI
            </a>

            {/* Desktop Nav Links */}
            <ul className="hidden sm:flex gap-4 lg:gap-6">
              {nav.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "rounded-3xl px-3 py-1 border-b-2 border-cyan-400 font-semibold"
                        : "hover:bg-slate-300 hover:text-black transition rounded-3xl px-3 py-1"
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Buttons & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button className="hidden md:flex items-center gap-2 text-white px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-400 shadow-lg shadow-black/40 relative overflow-hidden">
                <span className="absolute inset-0 bg-white/10 rounded-xl pointer-events-none"></span>
                <span className="relative z-10 text-sm sm:text-base">Book Consultation</span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button className="sm:hidden text-2xl text-black" onClick={() => setIsActive(!isActive)}>
                {isActive ? <IoMdClose /> : <RiMenu2Fill />}
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isActive && (
        <div className="fixed top-20 left-0 right-0 z-40 bg-white px-6 py-4 shadow-md sm:hidden rounded-b-2xl transition-all duration-300">
          <ul className="flex flex-col items-center gap-4">
            {nav.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "block text-base font-semibold border-b-2 border-cyan-400 pb-1 text-center"
                      : "block text-base hover:text-cyan-500 text-center"
                  }
                  onClick={() => setIsActive(false)} // close menu after click
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li className="w-full flex justify-center">
              <button className="mt-2 text-white px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-400 shadow-md">
                Book Consultation
              </button>
            </li>
          </ul>
        </div>
      )}

    </>
  );
}

export default Navbar;
