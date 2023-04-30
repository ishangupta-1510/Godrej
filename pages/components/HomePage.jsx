import React from "react";

const HomePage = () => (
  <div
    className="h-screen py-10 bg-no-repeat"
    style={{
      background:
        "linear-gradient(90.15deg, #3F535E 7.47%, rgba(63, 83, 94, 0) 92.56%), url(/banner.png)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    <div
      className="absolute top-1/2 px-40 -translate-y-1/2"
      style={{ position: "relative" }}
    >
      <h1 className="text-white font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl leading-relaxed">
        Godrej Splendour
      </h1>
      <h1 className="mt-6 text-white font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl leading-relaxed">
        #ELEVATE
      </h1>
      <p className="text-white font-karla font-bold text-lg md:text-xl lg:text-2xl mt-4">
        Starts @ 74.99 LAKHS
      </p>
      <p className="text-white font-work-sans font-light text-base md:text-lg lg:text-xl mt-4">
        Luxury 1, 2 &amp; 3 BHK apartments by Godrej Group in
      </p>
      <p className="font-bold text-white font-work-sans text-base md:text-lg lg:text-xl">
        Whitefield, Bangalore East
      </p>
      <div className="mt-6">
        <button className="inline-block w-44 h-14 mr-4 text-white font-bold bg-amber-500 rounded-lg">
          CONTACT US
        </button>
        <button className="inline-block w-64 h-14 text-white font-bold border-2 border-white rounded-md">
          DOWNLOAD BROCHURE
        </button>
      </div>
      <button className="opacity-80 absolute h-14 w-40 bg-gray-800 bg-opacity-50 rounded-l-full text-white font-bold right-0">
        <span className="arrow"></span>
        Virtual Tour
      </button>
    </div>
  </div>
);

export default HomePage;
