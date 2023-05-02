import React from "react";

const Overview = () => {
  return (
    <div className="flex flex-col xl:flex-row h-screen">
      <div className="justify-center flex flex-col px-10 xl:px-40 xl:w-1/2 py-10 xl:h-full">
        <h1 className="flex justify-center text-3xl xl:text-5xl font-bold text-gray-700 font-work">
          Overview
        </h1>
        <div>
          <p
            className="flex justify-center text-center xl:text-lg text-1xl text-gray-700 pt-10 xl:pt-16"
            style={{ lineHeight: "1.4" }}
          >
            #Elevate offers you premium 1, 2 & 3 BHK apartments in Bangalore
            that promise to fulfil all your wishes. With state-of-the-art
            amenities and stunning wellness features, this well-crafted home is
            sure to make you and your family incredibly happy and healthy.
          </p>
          <p className="flex text-center text-1xl xl:text-lg text-gray-700 pt-4">
            Experience all this and more, while you relax in the lap of nature.
            A home with views endlessly green till the eyes can see, a botanical
            boulevard and outdoor working pods to make your life evergreen.
          </p>
        </div>
      </div>

      <div className="justify-center items-center xl:justify-center content-center w-sm xl:w-1/2 flex xl:right-0 xl:h-full">
        <img src="building.png" alt="" />
      </div>
    </div>
  );
};

export default Overview;
