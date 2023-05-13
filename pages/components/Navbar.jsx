import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = (event) => {
    event.preventDefault();
    setShowMenu(false);
    const targetId = event.target.getAttribute("href").substr(1);
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("ContactUs");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="absolute z-10 flex w-screen py-4 px-8 bg-white ">
      <nav className="flex mx-auto">
        <div className="absolute top-6 left-8">
          <img src="/godrej-logo.png" alt="Godrej" className="w-32" />
        </div>
        <div className="xl:py-1.5">
          <ul
            className={`${
              showMenu
                ? "pt-16 flex pl-10 flex-col justify-center xl:hidden  "
                : "hidden"
            } xl:flex  xl:space-x-20 2xl:space-x-36 xl:py-1 font-work-sans text-gray-700`}
          >
            <li>
              <Link
                className="w-84 h-19 flex items-center justify-center"
                href="#Overview"
                onClick={handleLinkClick}
              >
                OVERVIEW
              </Link>
            </li>
            <li>
              <Link
                className="w-84 h-19 flex items-center justify-center"
                href="#Location"
                onClick={handleLinkClick}
              >
                LOCATION
              </Link>
            </li>
            <li>
              <Link
                href="#FloorPlan"
                onClick={handleLinkClick}
                className="w-50 h-19 flex items-center justify-center"
              >
                FLOOR PLAN
              </Link>
            </li>
            <li>
              <Link
                href="#Amenities"
                onClick={handleLinkClick}
                className="w-84 h-19 flex items-center justify-center"
              >
                AMENITIES
              </Link>
            </li>
            <li>
              <Link
                href="#Gallery"
                onClick={handleLinkClick}
                className="w-84 h-19 flex items-center justify-center"
              >
                GALLERY
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <button
        className="xl:hidden inline-block w-12 h-12 mr-[-10px] text-white font-bold bg-amber-500 rounded-lg"
        onClick={toggleMenu}
      >
        {showMenu ? "X" : "☰"}
      </button>
      <button
        onClick={handleContactClick}
        className="hidden xl:block w-40 h-12 mr-4 text-white font-bold bg-amber-500 rounded-lg"
      >
        CONTACT US
      </button>
    </div>
  );
};

export default Navbar;
