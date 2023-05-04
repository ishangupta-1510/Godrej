import React from "react";

const Entry = () => {
  return (
    <div className="h-[450px] mt-32 xl:mt-40 md:h-[800px] bg-cover xl:h-screen xl:w-screen py-10 bg-no-repeat banner -z-10 relative flex xl:flex-row-reverse">
      {/* <div className="justify-center items-center absolute w-1/2 flex left-0 h-full">
        <div
          className="z-10 absolute w-1/2"
          style={{
            background: "url(garden.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "600px",
            height: "500px",
            borderRadius: "20px",
            filter:
              "drop-shadow(8px 4px 10px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
          }}
        ></div>
        <div
          className="z-11 absolute w-1/2"
          style={{
            background: "url(gardenback.png)",
            transform: "rotate(-2deg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
            width: "600px",
            height: "500px",
            backgroundSize: "300px",
            marginRight: "100px",
            marginTop: "230px",
          }}
        ></div>
      </div> */}
      <div className="flex xl:items-center justify-center xl:w-1/2">
        <div className="absolute left-2 xl:relative flex xl:flex-col">
          <div className="flex flex-col xl:flex-row items-center">
            <div
              className="w-10 h-10 xl:w-24 xl:h-24 xl:mr-6"
              style={{
                backgroundImage: "url(circle1.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="text-center ">
              <h1 className="text-base xl:text-2xl font-bold text-amber-500">
                Grand entry
              </h1>
              <div className="flex flex-col xl:flex-row">
                <p className="text-sm xl:text-lg text-gray-700 xl:mt-2">
                  3 level of Podium
                </p>
                <p className="text-sm xl:text-lg text-gray-700 xl:mt-2">
                  Parking + 27 floors
                </p>
              </div>
              <p className="text-sm xl:text-lg text-gray-700 xl:mt-2">
                Entry gate with security
              </p>
              <div className="flex flex-col xl:flex-row">
                <p className="text-sm xl:text-lg text-gray-700 xl:mt-2">
                  Total Land: 17.76 Acres
                </p>
                <p className="text-sm xl:text-lg text-gray-700 xl:mt-2">
                  (Phase 1 & 2)
                </p>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col mt-8">
            <div className="w-10 h-10 xl:w-24 xl:h-24 xl:mr-6">
              <div
                className="w-24 h-24 mr-4"
                style={{
                  backgroundImage: "url(circle2.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <div>
                <h1 className="text-2xl font-bold text-amber-500 mt-4">
                  Agile Greens
                </h1>
                <p className="text-lg text-gray-700 mt-2">
                  1.65 Acres – Eco Park
                </p>
                <p className="text-lg text-gray-700 mt-2">
                  4.27 Acres Green Area
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start mt-8">
            <div className="flex flex-row items-center">
              <div
                className="h-24 mr-4"
                style={{
                  backgroundImage: "url(circle3.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  width: "115px",
                }}
              ></div>
              <div>
                <h1 className="text-2xl font-bold text-amber-500 mt-4">
                  The Ace Arena
                </h1>
                <p className="text-lg text-gray-700 mt-2">
                  3.5 Acres – Recreational Zone
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start mt-8">
            <div className="flex flex-row items-center">
              <div
                className="w-24 h-24 mr-4"
                style={{
                  backgroundImage: "url(circle4.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <div>
                <h1 className="text-2xl font-bold text-amber-500 mt-4">
                  Social Square
                </h1>
                <p className="text-lg text-gray-700 mt-2">85% Open Area</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start mt-8">
            <div className="flex flex-row items-center">
              <div
                className="w-24 h-24 mr-4"
                style={{
                  backgroundImage: "url(circle5.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <div>
                <h1 className="text-2xl font-bold text-amber-500 mt-4">
                  Clue Euphoria
                </h1>
                <p className="text-lg text-gray-700 mt-2">
                  Club 1 – 27300sft, club 2 – 11900sft.
                </p>
              </div>
            </div> 
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default Entry;
