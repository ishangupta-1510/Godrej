import React from "react";

const Overview = () => {
  return (
    <div className="flex flex-col relative h-screen">
      <div className="justify-center flex flex-col px-10 xl:px-40 absolute xl:left-0 xl:w-1/2 py-10 xl:h-full">
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

      <div className="xl:justify-center left-8 absolute w-sm xl:w-1/2 flex xl:right-0 xl:h-full">
        <div
          className="z-8 justify-center flex w-sm h-sm bg-sm xl:w-1/2 absolute top-[480px]"
          style={{
            background: "url(building.png)",
            backgroundRepeat: "no-repeat",
            filter:
              "drop-shadow(8px 4px 10px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            borderRadius: "20px",
          }}
        ></div>
        {/* <div
          className="z-5 xl:w-1/2 absolute"
          style={{
            background: "url(oval.png)",
            backgroundRepeat: "no-repeat",
            width: "700px",
            height: "700px",
            backgroundSize: "700px",
            backgroundPosition: "120px 40px",
          }}
        ></div> */}
      </div>
    </div>
  );
};

export default Overview;
