import React from "react";

const FloorPlan = () => {
  return (
    <div
      className="relative xl:h-[500px] top-40 xl:top-60 flex flex-col"
      style={{
        width: "100vw",
        background: "#FCFCFC",
        boxShadow:
          "10px 4px 25px rgba(0, 0, 0, 0), 0px 4px 25px rgba(0, 0, 0, 0.25)",
        padding: "2rem",
      }}
    >
      <h1 className="text-2xl md:text-4xl text-center md:text-left pl-16 font-bold font-work text-[#3F535E] mb-4">
        Floor Plan
      </h1>
      <div
        id="slider"
        className="relative overflow-x-scroll xl:overflow-hidden scroll whitespace-nowrap scroll-smooth scrollbar-hide flex flex-row items-center xl:justify-around xl:px-40 py-2 xl:py-0 xl:h-full"
      >
        <div className="flex xl:py-3 flex-col text-center xl:text-left items-center xl:w-auto xl:h-auto">
          <div
            className="w-40 h-40 bg-contain bg-center xl:w-56 xl:h-56 xl:mr-6"
            style={{
              backgroundImage: "url(1bhk.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="flex flex-col">
              <div className="flex">
                <p className="text-xs xl:text-lg text-gray-700 xl:mt-2 mr-10">
                  Type
                </p>
                <p className="text-xs xl:text-lg font-bold text-gray-700 xl:mt-2">
                  1 BHK
                </p>
              </div>
              <div className="flex">
                <p className="text-xs xl:text-lg text-gray-700 xl:mt-2 mr-10">
                  Area
                </p>
                <p className="text-xs xl:text-lg font-bold text-gray-700 xl:mt-2">
                  606 Sq. Ft.
                </p>
              </div>
            </div>
          </div>
          <button className="bg-transparent hover:bg-orange-500 hover:text-white text-orange-500 py-2 px-8 rounded-lg mt-6 border-2 border-orange-500">
            Contact Us
          </button>
        </div>
        <div className="flex px-8 xl:py-3 flex-col text-center xl:text-left items-center xl:w-auto xl:h-auto">
          <div
            className="w-40 h-40 bg-contain bg-center xl:w-56 xl:h-56 xl:mr-6"
            style={{
              backgroundImage: "url(2bhk.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="flex flex-col">
              <div className="flex">
                <p className="text-xs xl:text-lg text-gray-700 xl:mt-2 mr-10">
                  Type
                </p>
                <p className="text-xs xl:text-lg font-bold text-gray-700 xl:mt-2">
                  2 BHK
                </p>
              </div>
              <div className="flex">
                <p className="text-xs xl:text-lg text-gray-700 xl:mt-2 mr-10">
                  Area
                </p>
                <p className="text-xs xl:text-lg font-bold text-gray-700 xl:mt-2">
                  1137 Sq. Ft.
                </p>
              </div>
            </div>
          </div>
          <button className="bg-transparent hover:bg-orange-500 hover:text-white text-orange-500 py-2 px-8 rounded-lg mt-6 border-2 border-orange-500">
            Contact Us
          </button>
        </div>
        <div className="flex xl:py-3 flex-col text-center xl:text-left items-center xl:w-auto xl:h-auto">
          <div
            className="w-40 h-40 bg-contain bg-center xl:w-56 xl:h-56 xl:mr-6"
            style={{
              backgroundImage: "url(3bhk.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="flex flex-col">
              <div className="flex">
                <p className="text-xs xl:text-lg text-gray-700 xl:mt-2 mr-10">
                  Type
                </p>
                <p className="text-xs xl:text-lg font-bold text-gray-700 xl:mt-2">
                  3 BHK
                </p>
              </div>
              <div className="flex">
                <p className="text-xs xl:text-lg text-gray-700 xl:mt-2 mr-10">
                  Area
                </p>
                <p className="text-xs xl:text-lg font-bold text-gray-700 xl:mt-2">
                  1529 Sq. Ft.
                </p>
              </div>
            </div>
          </div>
          <button className="bg-transparent hover:bg-orange-500 hover:text-white text-orange-500 py-2 px-8 rounded-lg mt-6 border-2 border-orange-500">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;
