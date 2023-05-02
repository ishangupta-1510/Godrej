import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      className="z-15 fixed flex z-12 py-5 px-24 bg-white z-15"
      style={{ width: "100%" }}
    >
      <div className="absolute py-2">
        <img
          src="/godrej-logo.png"
          alt="Godrej"
          className="w-50 h-50 object-contain"
        />
      </div>
      <nav className="flex mx-auto">
        <div className="px-20 xl:py-1.5">
          <ul
            className={`${
              showMenu ? "py-16 flex flex-col items-center" : "hidden"
            } xl:flex xl:space-x-6 py-2 font-work-sans text-gray-700`}
          >
            <li>
              <Link href="/">OVERVIEW</Link>
            </li>
            <li>
              <Link
                className="w-84 h-19 flex items-center justify-center"
                href="/about"
              >
                LOCATION
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="w-50 h-19 flex items-center justify-center"
              >
                FLOOR PLAN
              </Link>
            </li>
            <li>
              <Link
                className="w-84 h-19 flex items-center justify-center"
                href="/blog"
              >
                AMENITIES
              </Link>
            </li>
            <li>
              <Link
                className="w-84 h-19 flex items-center justify-center"
                href="/contact"
              >
                GALLERY
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <button
        className="xl:hidden inline-block w-12 h-12 mr-[-60px] text-white font-bold bg-amber-500 rounded-lg"
        onClick={toggleMenu}
      >
        {showMenu ? "X" : "☰"}
      </button>
      <button className="hidden xl:block inline-block w-40 h-12 mr-4 text-white font-bold bg-amber-500 rounded-lg">
        CONTACT US
      </button>
    </div>
  );
};

export default Navbar;
