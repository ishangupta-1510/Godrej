import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

const backgrounds = ["/banner1.png", "/banner2.png", "/banner3.png"];
const delay = 3000;
const HomePage = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
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
        setBackgroundIndex((prevIndex) =>
          prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [backgroundIndex]);

  const handleContactClick = () => {
    const contactSection = document.getElementById("ContactUs");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div
        className="mm:h-[350px] em:h-[430px] relative top-20 md:h-[600px] xl:h-[calc(100vh-100px)] xl:min-h-[576px] w-screen  bg-cover xl:bg-[100% 100%] z-2"
        style={{
          transition: "background-image ease-in-out 1s",
          backgroundImage: `url(${backgrounds[backgroundIndex]})`,
          animation: "scroll 3s linear infinite",
        }}
      >
        <div
          className="top-1/2 px-16 -translate-y-1/2"
          style={{ position: "relative" }}
        >
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
          <div className="xl:mt-6">
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
          <div className="absolute pt-3 md:pt-10 left-10 xl:hidden flex flex-col">
            <a href="#ContactUs">
              <img
                src="/phone.png"
                alt="Phone"
                className="h-7 w-9 mr-4 image"
              />
            </a>
            <a href="#">
              <img
                src="/downloadicon.png"
                alt="Download"
                className="h-7 w-9 mt-3 image1"
              />
            </a>
          </div>
          <button className="flex items-center justify-center opacity-80 absolute h-6 xl:h-14 w-28 xl:w-40 bg-gray-700 bg-opacity-60 rounded-l-full text-gray-300 hover:text-white font-bold text-xs md:text-sm xl:text-1xl right-0">
            <span className="hidden sm:block">
              <span className="arrow "></span>
            </span>
            Virtual Tour
          </button>
        </div>
      </div>
      <div className="absolute"></div>
    </div>
  );
};

export default HomePage;
// width:100vw;background:url(/banner1.png);background-size:cover !important;transition:background width backgroundSize 2s ease-in-out
