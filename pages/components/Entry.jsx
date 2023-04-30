import React from "react";

const Entry = () => {
  return (
    <div className="relative h-screen flex flex-row-reverse">
      <div className="justify-center items-center absolute w-1/2 flex left-0 h-full">
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
          className="z-15 absolute w-1/2"
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
      </div>
      <div className="flex items-center justify-center w-1/2">
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <div
              className="w-24 h-24 mr-6"
              style={{
                backgroundImage: "url(circle1.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
            <div>
              <h1 className="text-2xl font-bold text-amber-500">Grand entry</h1>
              <p className="text-lg text-gray-700 mt-2">
                3 level of Podium Parking + 27 floors
              </p>
              <p className="text-lg text-gray-700 mt-2">
                Entry gate with security
              </p>
              <p className="text-lg text-gray-700 mt-2">
                Total Land: 17.76 Acres (Phase 1 & 2)
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-8">
            <div className="flex flex-row items-center">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entry;
