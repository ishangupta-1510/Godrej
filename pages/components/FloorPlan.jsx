import React from "react";

const FloorPlan = () => {
  return (
    <div
      className="relative flex flex-col"
      style={{
        width: "100vw",
        height: "507px",
        background: "#FCFCFC",
        boxShadow:
          "10px 4px 25px rgba(0, 0, 0, 0), 0px 4px 25px rgba(0, 0, 0, 0.25)",
        padding: "2rem",
      }}
    >
      <h1 className="text-4xl font-bold font-work text-[#3F535E] mb-4">
        Floor Plan
      </h1>
      <div className="flex mt-16 justify-center w-full">
        <div
          className="relative mr-16 flex flex-col items-center"
          style={{
            width: "254px",
            height: "206px",
            background: "url(1bhk.png)",
            borderRadius: "15px",
          }}
        >
          <p className="text-lg font-bold mt-4">1 BHK</p>
          <button
            className="bg-transparent hover:bg-orange-500 text-orange-500 font-bold py-2 px-4 rounded-full mt-4 border-2 border-orange-500"
            style={{ borderRadius: "50%" }}
          >
            Contact Us
          </button>
        </div>
        <div
          className="relative mr-4 flex flex-col items-center"
          style={{
            width: "254px",
            height: "206px",
            background: "url(2bhk.png)",
            borderRadius: "15px",
          }}
        >
          <p className="text-lg font-bold mt-4">2 BHK</p>
          <button
            className="bg-transparent hover:bg-orange-500 text-orange-500 font-bold py-2 px-4 rounded-full mt-4 border-2 border-orange-500"
            style={{ borderRadius: "50%" }}
          >
            Contact Us
          </button>
        </div>
        <div
          className="relative flex flex-col items-center"
          style={{
            width: "254px",
            height: "206px",
            background: "url(3bhk.png)",
            borderRadius: "15px",
          }}
        >
          <p className="text-lg font-bold mt-4">3 BHK</p>
          <button
            className="bg-transparent hover:bg-orange-500 text-orange-500 font-bold py-2 px-4 rounded-full mt-4 border-2 border-orange-500"
            style={{ borderRadius: "50%" }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;
