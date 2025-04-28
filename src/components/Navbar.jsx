import React, { useState, useEffect } from 'react';
import { FiPhoneCall } from "react-icons/fi";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const nav = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/services", name: "Services" },
    { path: "/contect", name: "Contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = isActive ? "hidden" : "auto";
  }, [isActive]);

  return (
    <>
      {/* Navbar Container */}
      <div className="navbarMain w-full fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-6 px-4 sm:px-16 h-16 sm:h-24 transition-all duration-300">
        <div className="shadow-md shadow-black/40 bg-white h-full rounded-2xl">
          <nav className="flex justify-between items-center h-full px-4 sm:px-6">
            {/* Logo */}
            <a href="#" className="text-black font-sans font-bold tracking-widest text-xl sm:text-2xl">
              DENTOI
            </a>

            {/* Desktop Nav Links */}
            <ul className="hidden sm:flex gap-4 lg:gap-6 items-center">
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
              {/* Desktop Book Consultation Button */}
              <li>
                <NavLink
                  to="/contect"
                  className="flex items-center gap-2 text-white px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-400 shadow-lg relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-white/10 rounded-xl pointer-events-none"></span>
                  <span className="relative z-10 text-sm sm:text-base">Book Consultation</span>
                </NavLink>
              </li>
            </ul>

            {/* Mobile Menu Toggle */}
            <button className="sm:hidden text-2xl text-black" onClick={() => setIsActive(!isActive)}>
              {isActive ? <IoMdClose /> : <RiMenu2Fill />}
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-screen z-40 bg-white transition-transform duration-300 sm:hidden ${isActive ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="px-6 pt-24 pb-6">
          <ul className="flex flex-col items-center gap-6">
            {nav.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-lg font-semibold border-b-2 border-cyan-400 pb-1"
                      : "text-lg hover:text-cyan-500"
                  }
                  onClick={() => setIsActive(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            {/* Mobile Book Consultation Button */}
            <li>
              <NavLink
                to="/contect"
                onClick={() => setIsActive(false)}
                className="mt-2 text-white px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-400 shadow-md flex justify-center"
              >
                Book Consultation
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
