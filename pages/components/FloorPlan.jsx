import React from "react";

const FloorPlan = () => {
  return (
    <div
      id="FloorPlan"
      className="relative xl:h-[490px] top-0 xl:top-44 flex flex-col"
      style={{
        width: "100vw",
        background: "#FCFCFC",
        boxShadow:
          "10px 4px 25px rgba(0, 0, 0, 0), 0px 4px 25px rgba(0, 0, 0, 0.25)",
        padding: "2rem",
      }}
    >
      <h1 className="text-xl xl:text-4xl text-center md:text-left pl-16 font-bold font-work text-[#3F535E] mb-4">
        Floor Plan
      </h1>
      <div
        id="slider"
        className="relative overflow-x-scroll sm:overflow-hidden scroll whitespace-nowrap scroll-smooth scrollbar-hide flex flex-row items-center sm:justify-around sm:px-40 py-2 sm:py-0 sm:h-full"
      >
        <div className="flex sm:py-3 flex-col text-center sm:text-left items-center sm:w-auto sm:h-auto">
          <div
            className="w-32 h-32 bg-contain bg-center lg:w-56 lg:h-56 lg:mr-6"
            style={{
              backgroundImage: "url(1bhk.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="flex flex-col">
              <div className="flex">
                <p className="text-xs sm:text-lg text-gray-700 sm:mt-2 mr-10">
                  Type
                </p>
                <p className="text-xs sm:text-lg font-bold text-gray-700 sm:mt-2">
                  1 BHK
                </p>
              </div>
              <div className="flex">
                <p className="text-xs sm:text-lg text-gray-700 sm:mt-2 mr-10">
                  Area
                </p>
                <p className="text-xs sm:text-lg font-bold text-gray-700 sm:mt-2">
                  606 Sq. Ft.
                </p>
              </div>
            </div>
          </div>
          <button className="bg-transparent hover:bg-orange-500 hover:text-white text-orange-500 py-1 px-4 md:py-2 md:px-8 rounded-lg mt-6 border-2 border-orange-500">
            Contact Us
          </button>
        </div>
        <div className="flex px-8 sm:py-3 flex-col text-center sm:text-left items-center sm:w-auto sm:h-auto">
          <div
            className="w-32 h-32 bg-contain bg-center lg:w-56 lg:h-56 lg:mr-6"
            style={{
              backgroundImage: "url(2bhk.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="flex flex-col">
              <div className="flex">
                <p className="text-xs sm:text-lg text-gray-700 sm:mt-2 mr-10">
                  Type
                </p>
                <p className="text-xs sm:text-lg font-bold text-gray-700 sm:mt-2">
                  2 BHK
                </p>
              </div>
              <div className="flex">
                <p className="text-xs sm:text-lg text-gray-700 sm:mt-2 mr-10">
                  Area
                </p>
                <p className="text-xs sm:text-lg font-bold text-gray-700 sm:mt-2">
                  1137 Sq. Ft.
                </p>
              </div>
            </div>
          </div>
          <button className="bg-transparent hover:bg-orange-500 hover:text-white text-orange-500 py-1 px-4 md:py-2 md:px-8 rounded-lg mt-6 border-2 border-orange-500">
            Contact Us
          </button>
        </div>
        <div className="flex sm:py-3 flex-col text-center sm:text-left items-center sm:w-auto sm:h-auto">
          <div
            className="w-32 h-32 bg-contain bg-center lg:w-56 lg:h-56 lg:mr-6"
            style={{
              backgroundImage: "url(3bhk.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="flex flex-col">
              <div className="flex">
                <p className="text-xs sm:text-lg text-gray-700 sm:mt-2 mr-10">
                  Type
                </p>
                <p className="text-xs sm:text-lg font-bold text-gray-700 sm:mt-2">
                  3 BHK
                </p>
              </div>
              <div className="flex">
                <p className="text-xs sm:text-lg text-gray-700 sm:mt-2 mr-10">
                  Area
                </p>
                <p className="text-xs sm:text-lg font-bold text-gray-700 sm:mt-2">
                  1529 Sq. Ft.
                </p>
              </div>
            </div>
          </div>
          <button className="bg-transparent hover:bg-orange-500 hover:text-white text-orange-500 py-1 px-4 md:py-2 md:px-8 rounded-lg mt-6 border-2 border-orange-500">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;
