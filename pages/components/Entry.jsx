import React from "react";

const Overview = () => {
  const handleScrollToSection = () => {
    document.getElementById("my-section").scrollIntoView();
  };
  return (
    <div className="min-h-[100px] max-h-[900px] z-10 :h-[749px] ml-auto mr-auto top-20 relative flex dm:pt-0 justify-center content-center cm:items-center dm:flex-row flex-col-reverse">
      <div className="transition max-h-[600px] dm:px-4 max-w-3xl pr-5 pl-5 duration-1000 ease-in-out transform justify-center items-center dm:items-start hover:brightness-50 content-center w-sm dm:w-1/2 flex dm:right-0">
        <img
          className=" max-h-[470px] mt-10 dm:max-h-screen min-h-[300px] pr-9  pl-5 cm:pl-0 cm:pr-7 md:pr-0 md:pl-0 dm:min-h-[500px] dm:min-w-[500px]"
          src="garden.png"
          alt=""
          onClick={handleScrollToSection}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-500 ease-in-out">
          <h1 className="text-white text-sm dm:text-3xl font-bold">
            Explore More...
          </h1>
        </div>
      </div>
      <div
        id="slider"
        className="max-h-[600px] z-20  relative overflow-x-scroll scroll scroll-smooth scrollbar-hide flex flex-row dm:flex-col dm:items-center mx-6 xl:px-40 dm:w-1/2 dm:py-0"
      >
        <div className="flex dm:py-3 flex-col dm:flex-row text-center dm:text-left dm:items-center dm:w-auto dm:h-auto">
          <div
            className="w-32 h-32 min-h-[50px] sm:min-h-[50px] max-h-[40px] dm:max-h-[100px] bg-contain bg-center 2xl:w-32 2xl:h-20 2xl:mr-6 dm:w-32 dm:h-16 dm:mr-6"
            style={{
              backgroundImage: "url(circle1.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="dm:text-left dm:w-96">
              <h1 className="dm:text-xl xl:text-2xl font-bold text-amber-500">
                Grand entry
              </h1>
            </div>
            <div className="flex flex-col dm:flex-row">
              <p className="text-xs dm:text-base xl:text-dm text-gray-700 dm:mt-2">
                3 level of Podium
              </p>
              <p className="text-xs dm:text-base xl:text-dm text-gray-700 dm:ml-1 dm:mt-2">
                Parking + 27 floors
              </p>
            </div>
            <p className="text-xs dm:text-base xl:text-dm text-gray-700 dm:mt-2">
              Entry gate with security
            </p>
            <div className="flex flex-col dm:flex-row">
              <p className="text-xs dm:text-base xl:text-dm text-gray-700 dm:mt-2">
                Total Land: 17.76 Acres
              </p>
              <p className="text-xs dm:text-base xl:text-dm text-gray-700 dm:mt-2">
                (Phase 1 & 2)
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div
            className="w-[1px] dm:hidden mr-4 ml-4 h-24 dm:w-24 dm:h-24 dm:mr-6"
            style={{
              backgroundImage: "url(line.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="flex dm:py-3 flex-col dm:flex-row text-center dm:text-left dm:items-center w-36 h-28 dm:w-auto dm:h-auto">
          <div
            className="w-32 h-32 min-h-[50px] sm:min-h-[50px] max-h-[40px] dm:max-h-[100px] bg-contain bg-center 2xl:w-32 2xl:h-20 2xl:mr-6 dm:w-32 dm:h-16 dm:mr-6"
            style={{
              backgroundImage: "url(circle2.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="dm:text-left dm:w-96">
              <h1 className="dm:text-xl xl:text-2xl font-bold text-amber-500">
                Agile Greens
              </h1>
            </div>
            <div className="flex flex-col dm:flex-row">
              <p className="text-xs dm:text-base xl:text-dm text-gray-700 dm:mt-2">
                1.65 Acres – Eco Park
              </p>
              <p className="text-xs dm:text-base xl:text-dm text-gray-700 dm:ml-1 dm:mt-2">
                4.27 Acres Green Area
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div
            className="w-[1px] dm:hidden mr-4 ml-4 h-24 dm:w-24 dm:h-24 dm:mr-6"
            style={{
              backgroundImage: "url(line.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="flex dm:py-3 flex-col dm:flex-row text-center dm:text-left dm:items-center w-36 h-24 dm:w-auto dm:h-auto">
          <div
            className="w-32 h-32 min-h-[50px] sm:min-h-[50px] max-h-[40px] dm:max-h-[100px] bg-contain bg-center 2xl:w-32 2xl:h-20 2xl:mr-6 dm:w-32 dm:h-16 dm:mr-6"
            style={{
              backgroundImage: "url(circle3.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="dm:text-left dm:w-96">
              <h1 className="dm:text-xl xl:text-2xl font-bold text-amber-500">
                The Ace Arena
              </h1>
            </div>
            <div className="flex flex-col dm:flex-row">
              <p className="text-xs dm:text-base xl:text-dm text-gray-700 dm:mt-2">
                3.5 Acres – Recreational
              </p>
              <p className="text-xs dm:text-base text-gray-700 dm:ml-1 dm:mt-2">
                Zone
              </p>
            </div>
            <p className="text-xs dm:text-dm text-gray-700 dm:mt-2"></p>
            <div className="flex flex-col dm:flex-row">
              <p className="text-xs dm:text-dm text-gray-700 dm:mt-2"></p>
              <p className="text-xs dm:text-dm text-gray-700 dm:mt-2"> </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div
            className="w-[1px] dm:hidden mr-4 ml-4 h-24 dm:w-24 dm:h-24 dm:mr-6"
            style={{
              backgroundImage: "url(line.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="flex dm:py-3 flex-col dm:flex-row text-center dm:text-left dm:items-center w-36 h-24 dm:w-auto dm:h-auto">
          <div
            className="w-32 h-32 min-h-[50px] sm:min-h-[50px] max-h-[40px] dm:max-h-[100px] bg-contain bg-center 2xl:w-32 2xl:h-20 2xl:mr-6 dm:w-32 dm:h-16 dm:mr-6"
            style={{
              backgroundImage: "url(circle4.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="dm:text-left dm:w-96">
              <h1 className="dm:text-xl xl:text-2xl font-bold text-amber-500">
                Social Square
              </h1>
            </div>
            <div className="flex flex-col dm:flex-row">
              <p className="text-xs dm:text-base xl:text-dm text-gray-700 dm:mt-2">
                85% Open Area
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div
            className="w-[1px] dm:hidden mr-4 ml-4 h-24 dm:w-24 dm:h-24 dm:mr-6"
            style={{
              backgroundImage: "url(line.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="flex dm:py-3 flex-col dm:flex-row text-center dm:text-left dm:items-center w-36 h-24 dm:w-auto dm:h-auto">
          <div
            className="w-32 h-32 min-h-[50px] sm:min-h-[50px] max-h-[40px] dm:max-h-[100px] bg-contain bg-center 2xl:w-32 2xl:h-20 2xl:mr-6 dm:w-32 dm:h-16 dm:mr-6"
            style={{
              backgroundImage: "url(circle5.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="dm:text-left dm:w-96">
              <h1 className="dm:text-xl xl:text-2xl font-bold text-amber-500">
                Club Euphoria
              </h1>
            </div>
            <div className="flex flex-col dm:flex-row">
              <p className="text-xs dm:text-base xl:text-dm text-gray-700 dm:mt-2">
                Club 1 – 27300sft,
              </p>
              <p className="text-xs dm:text-base xl:text-dm text-gray-700 pl-1 md:mt-2">
                Club 2 – 11900sft
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
