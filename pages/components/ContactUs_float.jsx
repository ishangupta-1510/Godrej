import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ContactUsFloat = () => {
  const [show, setShow] = useState(false);

  const handleButtonClick = () => {
    setShow(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 200; // Adjust this value as needed
      const contactUsContainer = document.getElementById("contactUsContainer");
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollPosition > scrollThreshold) {
        setShow(true);
        contactUsContainer.style.opacity = "1";
        contactUsContainer.style.pointerEvents = "auto";
      } else {
        setShow(false);
        contactUsContainer.style.opacity = "0";
        contactUsContainer.style.pointerEvents = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="contactUsContainer">
      <div
        className={
          show
            ? "z-50 max-md:w-auto fixed p-6 w-[50vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 bg-white shadow-xl rounded-xl opacity-100 transition-opacity duration-500 pointer-events-auto"
            : "z-50 max-md:w-auto fixed p-6 w-[50vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 bg-white shadow-xl rounded-xl opacity-0 transition-opacity duration-500 pointer-events-none"
        }
      >
        <div className="text-center text-xl text-orange-400 font-semibold relative">
          Contact us{" "}
          <button onClick={handleButtonClick} className="absolute right-1">
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        </div>
        <div className="flex flex-col">
          <input
            placeholder="Name"
            className="border-[1px] border-solid border-orange-400 outline-none rounded-lg pl-3 py-2"
            id="name"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <input
            placeholder="Email"
            className="border-[1px] border-solid border-orange-400 outline-none rounded-lg pl-3 py-2"
            id="name"
            type="email"
          />
        </div>
        <div className="flex gap-6 border-orange-400 max-md:gap-1">
          <select
            className="bg-[#F0F0F0] border-orange-400 p-3 rounded-lg w-[75px]"
            name=""
            id=""
          >
            <option value="+91">+91</option>
          </select>
          <input
            placeholder="Mobile"
            className="border-[1px] border-solid border-orange-400 outline-none rounded-lg pl-3 py-2 w-[calc(100%-75px)]"
            id="name"
            type="number"
          />
        </div>
        <div className="flex flex-col">
          <input
            placeholder="Message"
            className="border-[1px] border-solid border-orange-400 outline-none rounded-lg pl-3 h-16 py-2 max-w-full"
            id="name"
            type="text"
          />
        </div>
        <div className="flex justify-center items-end h-full">
          <div className="bg-orange-400 p-3 rounded-xl text-white w-fit">
            {" "}
            Submit{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsFloat;
