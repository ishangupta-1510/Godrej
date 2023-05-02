import React from "react";

const HomePage = () => (
  <div
    className="h-[600px] xl:h-screen py-10 bg-no-repeat"
    style={{
      background:
        "linear-gradient(90.15deg, #3F535E 7.47%, rgba(63, 83, 94, 0) 92.56%), url(/banner.png)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    <div
      className="absolute top-1/2 px-16 -translate-y-1/2"
      style={{ position: "relative" }}
    >
      <h1 className="text-white font-montserrat font-bold text-2xl xl:text-4xl md:text-5xl lg:text-6xl leading-relaxed">
        Godrej Splendour
      </h1>
      <h1 className="mt-1 xl:mt-6 text-white font-montserrat font-bold text-2xl xl:text-4xl md:text-5xl lg:text-6xl leading-relaxed">
        #ELEVATE
      </h1>
      <p className="text-white font-karla font-bold text-1xl md:text-xl lg:text-2xl mt-4">
        Starts @ 74.99 LAKHS
      </p>
      <p className="text-white font-work-sans font-light text-1xl md:text-lg lg:text-xl mt-4">
        Luxury 1, 2 &amp; 3 BHK apartments by Godrej Group in
      </p>
      <p className="font-bold text-white font-work-sans text-base md:text-lg lg:text-xl">
        Whitefield, Bangalore East
      </p>
      <div className="mt-6">
        <button className="hidden xl:inline-block w-44 h-14 mr-4 mb-4 text-white font-bold bg-amber-500 rounded-lg">
          CONTACT US
        </button>
        <button className="hidden xl:inline-block w-64 h-14 text-white font-bold border-2 border-white rounded-md">
          DOWNLOAD BROCHURE
        </button>
      </div>
      <div className="absolute left-10 xl:hidden mt-6 flex flex-col">
        <a href="">
          <img src="/phone.png" alt="Phone" className="h-10 w-10 mr-4" />
        </a>
        <a href="#">
          <img
            src="/downloadicon.png"
            alt="Download"
            className="h-10 w-10 mt-4"
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

export default HomePage;
