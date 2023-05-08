import React from "react";

const Location = () => {
  const handleScrollToSection = () => {
    document.getElementById("my-section").scrollIntoView();
  };
  return (
    <div className="relative flex top-28 xl:top-44 xl:pt-0 xl:flex-row-reverse flex-col xl:h-[500px] max-h-screen">
      <div className="py-5 xl:w-1/2">
        <h1 className="xl:absolute xl:top-0 xl:right-52 text-center text-gray-700 text-xl xl:text-4xl xl:pt-8 font-bold">
          Location
        </h1>
        <div className="xl:pt-20 pt-10 transition pr-5 pl-5 xl:pr-0 xl:pl-0 duration-1000 ease-in-out transform justify-center items-center xl:justify-center hover:brightness-50 content-center w-sm xl:w-[100%] flex xl:right-0 xl:h-full">
          <img
            className=""
            src="location1.png"
            alt=""
            onClick={handleScrollToSection}
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-500 ease-in-out">
            <h1 className="text-white text-sm xl:text-3xl font-bold">
              Explore More...
            </h1>
          </div>
        </div>
      </div>
      <div
        id="slider"
        className="relative xl:justify-center overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide flex flex-row xl:flex-col items-center mx-6 xl:px-40 xl:w-1/2 py-10 xl:py-0 xl:h-full"
      >
        <div className="flex xl:py-3 flex-col xl:flex-row text-center xl:text-left items-center xl:w-auto xl:h-auto">
          <div
            className="w-10 h-10 bg-contain bg-center xl:w-32 xl:h-20 xl:mr-6"
            style={{
              backgroundImage: "url(pic1.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="xl:text-left xl:w-96">
              <h1 className="xl:text-2xl font-bold text-gray-700">
                Grand entry
              </h1>
            </div>
            <div className="flex flex-col xl:flex-row">
              <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
                3 level of Podium
              </p>
              <p className="text-xs xl:text-lg text-gray-700 xl:ml-1 xl:mt-2">
                Parking + 27 floors
              </p>
            </div>
            <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
              Entry gate with security
            </p>
            <div className="flex flex-col xl:flex-row">
              <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
                Total Land: 17.76 Acres
              </p>
              <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
                (Phase 1 & 2)
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div
            className="w-[1px] xl:hidden mr-4 ml-4 h-24 xl:w-24 xl:h-24 xl:mr-6"
            style={{
              backgroundImage: "url(line2.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="flex xl:py-3 flex-col xl:flex-row text-center xl:text-left items-center w-36 h-36 xl:w-auto xl:h-auto">
          <div
            className="w-32 h-32 bg-contain bg-center xl:w-32 xl:h-20 xl:mr-6"
            style={{
              backgroundImage: "url(pic1.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="xl:text-left xl:w-96">
              <h1 className="xl:text-2xl font-bold text-gray-700">
                Grand entry
              </h1>
            </div>
            <div className="flex flex-col xl:flex-row">
              <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
                3 level of Podium
              </p>
              <p className="text-xs xl:text-lg text-gray-700 xl:ml-1 xl:mt-2">
                Parking + 27 floors
              </p>
            </div>
            <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
              Entry gate with security
            </p>
            <div className="flex flex-col xl:flex-row">
              <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
                Total Land: 17.76 Acres
              </p>
              <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
                (Phase 1 & 2)
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div
            className="w-[1px] xl:hidden mr-4 ml-4 h-24 xl:w-24 xl:h-24 xl:mr-6"
            style={{
              backgroundImage: "url(line2.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="flex xl:py-3 flex-col xl:flex-row text-center xl:text-left items-center w-36 h-36 xl:w-auto xl:h-auto">
          <div
            className="w-32 h-32 bg-contain bg-center xl:w-32 xl:h-20 xl:mr-6"
            style={{
              backgroundImage: "url(pic1.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="xl:text-left xl:w-96">
              <h1 className="xl:text-2xl font-bold text-gray-700">
                Grand entry
              </h1>
            </div>
            <div className="flex flex-col xl:flex-row">
              <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
                3 level of Podium
              </p>
              <p className="text-xs xl:text-lg text-gray-700 xl:ml-1 xl:mt-2">
                Parking + 27 floors
              </p>
            </div>
            <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
              Entry gate with security
            </p>
            <div className="flex flex-col xl:flex-row">
              <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
                Total Land: 17.76 Acres
              </p>
              <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
                (Phase 1 & 2)
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div
            className="w-[1px] xl:hidden mr-4 ml-4 h-24 xl:w-24 xl:h-24 xl:mr-6"
            style={{
              backgroundImage: "url(line2.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="flex xl:py-3 flex-col xl:flex-row text-center xl:text-left items-center w-36 h-36 xl:w-auto xl:h-auto">
          <div
            className="w-32 h-32 bg-contain bg-center xl:w-32 xl:h-20 xl:mr-6"
            style={{
              backgroundImage: "url(pic1.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="xl:text-left xl:w-96">
              <h1 className="xl:text-2xl font-bold text-gray-700">
                Grand entry
              </h1>
            </div>
            <div className="flex flex-col xl:flex-row">
              <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
                3 level of Podium
              </p>
              <p className="text-xs xl:text-lg text-gray-700 xl:ml-1 xl:mt-2">
                Parking + 27 floors
              </p>
            </div>
            <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
              Entry gate with security
            </p>
            <div className="flex flex-col xl:flex-row">
              <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
                Total Land: 17.76 Acres
              </p>
              <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
                (Phase 1 & 2)
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div
            className="w-[1px] xl:hidden mr-4 ml-4 h-24 xl:w-24 xl:h-24 xl:mr-6"
            style={{
              backgroundImage: "url(line2.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="flex xl:py-3 flex-col xl:flex-row text-center xl:text-left items-center w-36 h-36 xl:w-auto xl:h-auto">
          <div
            className="w-32 h-32 bg-contain bg-center xl:w-32 xl:h-20 xl:mr-6"
            style={{
              backgroundImage: "url(pic1.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="xl:text-left xl:w-96">
              <h1 className="xl:text-2xl font-bold text-gray-700">
                Grand entry
              </h1>
            </div>
            <div className="flex flex-col xl:flex-row">
              <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
                3 level of Podium
              </p>
              <p className="text-xs xl:text-lg text-gray-700 xl:ml-1 xl:mt-2">
                Parking + 27 floors
              </p>
            </div>
            <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
              Entry gate with security
            </p>
            <div className="flex flex-col xl:flex-row">
              <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
                Total Land: 17.76 Acres
              </p>
              <p className="text-xs xl:text-lg text-gray-700 xl:mt-2">
                (Phase 1 & 2)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
