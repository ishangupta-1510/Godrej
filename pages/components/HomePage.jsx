import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = ["/banner1.png", "/banner2.png", "/banner3.png"];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundIndex(
        (backgroundIndex) => (backgroundIndex + 1) % backgrounds.length
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div
      className="h-[450px] md:h-[600px] bg-cover xl:h-screen xl:w-screen py-10 bg-no-repeat relative banner -z-10"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundColor: "#fff",
        transition: "background 2s ease-in-out",
        background: `url(${backgrounds[backgroundIndex]})`,
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
          <p className="text-white font-karla font-bold text-1xl md:text-xl lg:text-2xl mt-4">
            Starts @ 74.99 LAKHS
          </p>
          <p className="text-white font-work-sans font-light text-sm md:text-lg lg:text-xl mt-4">
            Luxury 1, 2 &amp; 3 BHK apartments by Godrej Group in
          </p>
          <p className="font-bold text-white font-work-sans text-sm py-1 md:text-lg lg:text-xl">
            Whitefield, Bangalore East
          </p>
        </div>
        <div className="mt-6">
          <button className="hidden xl:inline-block w-44 h-14 mr-4 mb-4 text-white font-bold bg-amber-500 rounded-lg">
            CONTACT US
          </button>
          <button className="hidden xl:inline-block w-64 h-14 text-white font-bold border-2 border-white rounded-md">
            DOWNLOAD BROCHURE
          </button>
        </div>
        <div className="absolute left-10 xl:hidden flex flex-col">
          <a href="">
            <img src="/phone.png" alt="Phone" className="h-9 w-9 mr-4" />
          </a>
          <a href="#">
            <img
              src="/downloadicon.png"
              alt="Download"
              className="h-9 w-9 mt-4"
            />
          </a>
        </div>
        <button className="flex items-center justify-center opacity-80 absolute h-10 xl:h-14 w-32 xl:w-40 bg-gray-800 bg-opacity-50 rounded-l-full text-white font-bold right-0">
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
