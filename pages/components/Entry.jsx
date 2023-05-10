import React from "react";

const Overview = () => {
  const handleScrollToSection = () => {
    document.getElementById("my-section").scrollIntoView();
  };
  return (
    <div className="min-h-[100px] max-h-[600px] z-10 xl:h-[749px] ml-auto mr-auto top-20 lg:top-32 relative flex lg:pt-0 justify-center content-center lg:flex-row flex-col-reverse lg:h-screen">
      <div className="transition max-h-[600px] lg:px-4 max-w-3xl pr-5 pl-5 duration-1000 ease-in-out transform justify-center items-center lg:items-start hover:brightness-50 content-center w-sm lg:w-1/2 flex lg:right-0">
        <img
          className=" max-h-[470px] mt-10 lg:max-h-screen min-h-[300px] lg:min-h-[500px] lg:min-w-[500px]"
          src="garden.png"
          alt=""
          onClick={handleScrollToSection}
        />
        <div className="absolute inset-0 mb-32 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-500 ease-in-out">
          <h1 className="text-white text-sm lg:text-3xl font-bold">
            Explore More...
          </h1>
        </div>
      </div>
      <div
        id="slider"
        className="max-h-[600px] z-20  relative overflow-x-scroll lg:overflow-x-hidden scroll whitespace-nowrap scroll-smooth scrollbar-hide flex flex-row lg:flex-col lg:items-center mx-6 xl:px-40 lg:w-1/2 lg:py-0"
      >
        <div className="flex z-20 lg:py-3 flex-col lg:flex-row text-center lg:text-left lg:items-center lg:w-auto lg:h-auto">
          <div
            className="w-32 h-32 sm:min-h-[50px] max-h-[80px] z-20  lg:max-h-[100px] bg-contain bg-center 2xl:w-32 2xl:h-20 2xl:mr-6 lg:w-32 lg:h-16 lg:mr-6"
            style={{
              backgroundImage: "url(circle1.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="lg:text-left lg:w-96">
              <h1 className="lg:text-xl xl:text-2xl font-bold text-amber-500">
                Grand entry
              </h1>
            </div>
            <div className="flex flex-col lg:flex-row">
              <p className="text-xs lg:text-base xl:text-lg text-gray-700 lg:mt-2">
                3 level of Podium
              </p>
              <p className="text-xs lg:text-base xl:text-lg text-gray-700 lg:ml-1 lg:mt-2">
                Parking + 27 floors
              </p>
            </div>
            <p className="text-xs lg:text-base xl:text-lg text-gray-700 lg:mt-2">
              Entry gate with security
            </p>
            <div className="flex flex-col lg:flex-row">
              <p className="text-xs lg:text-base xl:text-lg text-gray-700 lg:mt-2">
                Total Land: 17.76 Acres
              </p>
              <p className="text-xs lg:text-base xl:text-lg text-gray-700 lg:mt-2">
                (Phase 1 & 2)
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div
            className="w-[1px] lg:hidden mr-4 ml-4 h-24 lg:w-24 lg:h-24 lg:mr-6"
            style={{
              backgroundImage: "url(line.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="flex lg:py-3 flex-col lg:flex-row text-center lg:text-left lg:items-center w-36 h-28 lg:w-auto lg:h-auto">
          <div
            className="w-32 h-32 min-h-[50px] sm:min-h-[50px] max-h-[40px] lg:max-h-[100px] bg-contain bg-center 2xl:w-32 2xl:h-20 2xl:mr-6 lg:w-32 lg:h-16 lg:mr-6"
            style={{
              backgroundImage: "url(circle2.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="lg:text-left lg:w-96">
              <h1 className="lg:text-xl xl:text-2xl font-bold text-amber-500">
                Agile Greens
              </h1>
            </div>
            <div className="flex flex-col lg:flex-row">
              <p className="text-xs lg:text-base xl:text-lg text-gray-700 lg:mt-2">
                1.65 Acres – Eco Park
              </p>
              <p className="text-xs lg:text-base xl:text-lg text-gray-700 lg:ml-1 lg:mt-2">
                4.27 Acres Green Area
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div
            className="w-[1px] lg:hidden mr-4 ml-4 h-24 lg:w-24 lg:h-24 lg:mr-6"
            style={{
              backgroundImage: "url(line.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="flex lg:py-3 flex-col lg:flex-row text-center lg:text-left lg:items-center w-36 h-24 lg:w-auto lg:h-auto">
          <div
            className="w-32 h-32 min-h-[50px] sm:min-h-[50px] max-h-[40px] lg:max-h-[100px] bg-contain bg-center 2xl:w-32 2xl:h-20 2xl:mr-6 lg:w-32 lg:h-16 lg:mr-6"
            style={{
              backgroundImage: "url(circle3.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="lg:text-left lg:w-96">
              <h1 className="lg:text-xl xl:text-2xl font-bold text-amber-500">
                The Ace Arena
              </h1>
            </div>
            <div className="flex flex-col lg:flex-row">
              <p className="text-xs lg:text-base xl:text-lg text-gray-700 lg:mt-2">
                3.5 Acres – Recreational Zone
              </p>
              <p className="text-xs lg:text-lg text-gray-700 lg:ml-1 lg:mt-2"></p>
            </div>
            <p className="text-xs lg:text-lg text-gray-700 lg:mt-2"></p>
            <div className="flex flex-col lg:flex-row">
              <p className="text-xs lg:text-lg text-gray-700 lg:mt-2"></p>
              <p className="text-xs lg:text-lg text-gray-700 lg:mt-2"> </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div
            className="w-[1px] lg:hidden mr-4 ml-4 h-24 lg:w-24 lg:h-24 lg:mr-6"
            style={{
              backgroundImage: "url(line.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="flex lg:py-3 flex-col lg:flex-row text-center lg:text-left lg:items-center w-36 h-24 lg:w-auto lg:h-auto">
          <div
            className="w-32 h-32 min-h-[50px] sm:min-h-[50px] max-h-[40px] lg:max-h-[100px] bg-contain bg-center 2xl:w-32 2xl:h-20 2xl:mr-6 lg:w-32 lg:h-16 lg:mr-6"
            style={{
              backgroundImage: "url(circle4.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="lg:text-left lg:w-96">
              <h1 className="lg:text-xl xl:text-2xl font-bold text-amber-500">
                Social Square
              </h1>
            </div>
            <div className="flex flex-col lg:flex-row">
              <p className="text-xs lg:text-base xl:text-lg text-gray-700 lg:mt-2">
                85% Open Area
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div
            className="w-[1px] lg:hidden mr-4 ml-4 h-24 lg:w-24 lg:h-24 lg:mr-6"
            style={{
              backgroundImage: "url(line.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="flex lg:py-3 flex-col lg:flex-row text-center lg:text-left lg:items-center w-36 h-24 lg:w-auto lg:h-auto">
          <div
            className="w-32 h-32 min-h-[50px] sm:min-h-[50px] max-h-[40px] lg:max-h-[100px] bg-contain bg-center 2xl:w-32 2xl:h-20 2xl:mr-6 lg:w-32 lg:h-16 lg:mr-6"
            style={{
              backgroundImage: "url(circle5.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="lg:text-left lg:w-96">
              <h1 className="lg:text-xl xl:text-2xl font-bold text-amber-500">
                Club Euphoria
              </h1>
            </div>
            <div className="flex flex-col lg:flex-row">
              <p className="text-xs lg:text-base xl:text-lg text-gray-700 lg:mt-2">
                Club 1 – 27300sft,
              </p>
              <p className="text-xs lg:text-base xl:text-lg text-gray-700 xl:mt-2">
                Club 2 – 11900sft.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
