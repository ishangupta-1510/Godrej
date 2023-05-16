import { space } from "postcss/lib/list";
import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import Link from "next/link";

const backgrounds = ["/banner1.png", "/banner2.png", "/banner3.png"];
const delay = 3000;

const HomePage = () => {
  const handleLinkClick = (event) => {
    event.preventDefault();
    const targetId = "#ContactUs";
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [index, setIndex] = useState(0);
  const timeoutRef = React.useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  const handleContactClick = () => {
    const contactSection = document.getElementById("ContactUs");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="placeholder:max-w-screen top-20 xl:h-[869px]  relative overflow-hidden text-center">
      <div
        className="slideshowSlider"
        style={{
          transform: `translate3d(${-index * 100}%, 0, 0)`,
          whiteSpace: "nowrap",
        }}
      >
        {backgrounds.map((background, index) => (
          <div
            className="slide h-[350px] md:h-[600px] xl:h-[calc(100vh-100px)] xl:min-h-[819px] w-screen  bg-cover xl:bg-[100% 100%] z-2"
            key={index}
            style={{ backgroundImage: `url(${backgrounds[index]})` }}
          ></div>
        ))}
      </div>
      <div className="absolute em:top-20 mm:top-20 top-8 md:top-52 xl:top-60 px-20 w-screen">
        <div className="flex flex-col justify-center content-center text-center xl:text-left">
          <h1 className="text-white font-montserrat font-bold text-2xl xl:text-4xl md:text-5xl lg:text-6xl leading-relaxed">
            Godrej Splendour
          </h1>
          <h1 className="mt-1 xl:mt-6 text-white font-montserrat font-bold text-2xl xl:text-4xl md:text-5xl lg:text-6xl leading-relaxed">
            #ELEVATE
          </h1>
          <p className="text-white font-karla font-bold text-xs md:text-xl lg:text-2xl xl:mt-4">
            Starts @ 74.99 LAKHS
          </p>
          <div className="flex flex-col xl:flex-row">
            <p className="text-white font-work-sans font-light text-xs md:text-lg lg:text-xl mt-1 xl:mt-4">
              Luxury 1, 2 &amp; 3 BHK apartments
            </p>
            <p className="xl:px-1 text-white font-work-sans font-light text-xs md:text-lg lg:text-xl mt-1 xl:mt-4">
              by Godrej Group in
            </p>
          </div>
          <p className="font-bold text-white font-work-sans text-xs py-1 md:text-lg lg:text-xl">
            Whitefield, Bangalore East
          </p>
        </div>
        <div className="sm:mt-40 left-20 absolute">
          <button
            onClick={handleContactClick}
            className="hidden xl:inline-block w-44 h-14 mr-4 mb-4 text-white font-bold bg-amber-500 rounded-lg"
          >
            CONTACT US
          </button>
          <button className="hidden xl:inline-block w-64 h-14 text-white font-bold border-2 border-white rounded-md">
            DOWNLOAD BROCHURE
          </button>
        </div>
        <div className="absolute pt-3 md:pt-10 left-10 xl:hidden top-52 mm:top-40 md:top-60 flex flex-col">
          <Link href="#ContactUs" onClick={handleLinkClick}>
            <img src="/phone.png" alt="Phone" className="h-7 w-9 mr-4 image" />
          </Link>
          <a href="#">
            <img
              src="/downloadicon.png"
              alt="Download"
              className="h-7 w-9 mt-3 image1"
            />
          </a>
        </div>
        <button className="flex items-center justify-center opacity-80 absolute h-6 lg:h-14 md:h-10 w-28 lg:w-40 bg-gray-700 bg-opacity-60 rounded-l-full text-gray-300 hover:text-white font-bold text-xs md:top-72 xl:top-[400px] top-[250px] tm:top-[190px] mm:top-[210px] md:text-sm xl:text-1xl right-0">
          <span className="hidden sm:block">
            <span className="arrow "></span>
          </span>
          Virtual Tour
        </button>
      </div>
    </div>
  );
};

export default HomePage;
// width:100vw;background:url(/banner1.png);background-size:cover !important;transition:background width backgroundSize 2s ease-in-out
