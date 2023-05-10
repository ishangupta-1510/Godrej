import React from "react";

const Test2 = () => {
  const handleScrollToSection = () => {
    document.getElementById("my-section").scrollIntoView();
  };
  return (
    <div className=" ml-auto mr-auto top-20 p-10 md:flex-row max-h-screen xl:h-[749px]">
      <div
        id="slider"
        className="min-h-[300px] overflow-x-scroll md:overflow-x-hidden scroll whitespace-nowrap scroll-smooth scrollbar-hide flex flex-row md:flex-col md:items-center mx-6 xl:px-40 md:w-1/2 py-10 md:py-0 md:h-full"
      >
        <div className="flex md:py-3 flex-col md:flex-row text-center md:text-left items-center md:w-auto md:h-auto">
          <div
            className="w-10 h-10 min-h-[50px] bg-contain bg-center md:w-32 md:h-20 md:mr-6"
            style={{
              backgroundImage: "url(circle1.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="md:text-left md:w-96">
              <h1 className="md:text-2xl font-bold text-amber-500">
                Grand entry
              </h1>
            </div>
            <div className="flex flex-col md:flex-row">
              <p className="text-xs md:text-lg text-gray-700 md:mt-2">
                3 level of Podium
              </p>
              <p className="text-xs md:text-lg text-gray-700 md:ml-1 md:mt-2">
                Parking + 27 floors
              </p>
            </div>
            <p className="text-xs md:text-lg text-gray-700 md:mt-2">
              Entry gate with security
            </p>
            <div className="flex flex-col md:flex-row">
              <p className="text-xs md:text-lg text-gray-700 md:mt-2">
                Total Land: 17.76 Acres
              </p>
              <p className="text-xs md:text-lg text-gray-700 md:mt-2">
                (Phase 1 & 2)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test2;
