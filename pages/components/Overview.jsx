import React from "react";

const Overview = () => {
  return (
    <div className="relative h-screen">
      <div className="justify-center flex flex-col  px-40 absolute left-0 w-1/2 h-full">
        <h1 className="text-5xl font-bold text-gray-700 font-work">Overview</h1>
        <div>
          <p
            className="text-lg text-gray-700 pt-16"
            style={{ lineHeight: "1.4" }}
          >
            #Elevate offers you premium 1, 2 & 3 BHK apartments in Bangalore
            that promise to fulfil all your wishes. With state-of-the-art
            amenities and stunning wellness features, this well-crafted home is
            sure to make you and your family incredibly happy and healthy.
          </p>
          <p className="text-lg text-gray-700 pt-4">
            Experience all this and more, while you relax in the lap of nature.
            A home with views endlessly green till the eyes can see, a botanical
            boulevard and outdoor working pods to make your life evergreen.
          </p>
        </div>
      </div>

      <div className="justify-center absolute w-1/2 flex right-0 h-full">
        <div
          className="z-10 w-1/2 absolute top-60"
          style={{
            background: "url(building.png)",
            backgroundRepeat: "no-repeat",
            width: "600px",
            height: "500px",
            filter:
              "drop-shadow(8px 4px 10px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            borderRadius: "20px",
          }}
        ></div>
        <div
          className="z-5 w-1/2 absolute"
          style={{
            background: "url(oval.png)",
            backgroundRepeat: "no-repeat",
            width: "700px",
            height: "700px",
            backgroundSize: "700px",
            backgroundPosition: "120px 40px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Overview;
