import React from "react";

const Overview = () => {
  const handleScrollToSection = () => {
    // Scroll to the section with id 'my-section'
    document.getElementById("my-section").scrollIntoView();
  };
  return (
    <div className="relative flex flex-col top-20 p-10 xl:flex-row xl:h-screen">
      <div className="justify-center flex flex-col xl:px-40 xl:w-1/2 xl:h-full">
        <h1 className="flex justify-center xl:justify-start text-xl xl:text-5xl font-bold text-gray-700 font-work">
          Overview
        </h1>
        <div>
          <p
            className="flex xl:text-left text-center xl:text-lg text-sm text-gray-700 pt-3 xl:pt-16"
            style={{ lineHeight: "1.4" }}
          >
            #Elevate offers you premium 1, 2 & 3 BHK apartments in Bangalore
            that promise to fulfil all your wishes. With state-of-the-art
            amenities and stunning wellness features, this well-crafted home is
            sure to make you and your family incredibly happy and healthy.
          </p>
          <p className="flex text-center xl:text-left text-sm xl:text-lg text-gray-700 pt-4">
            Experience all this and more, while you relax in the lap of nature.
            A home with views endlessly green till the eyes can see, a botanical
            boulevard and outdoor working pods to make your life evergreen.
          </p>
        </div>
      </div>

      <div className="relative top-10 transition duration-1000 ease-in-out transform justify-center items-center xl:justify-center hover:brightness-50 content-center xl:w-1/2 flex xl:right-0 xl:h-full">
        <img src="building1.png" alt="" onClick={handleScrollToSection} />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-500 ease-in-out">
          <h1 className="text-white text-sm xl:text-3xl font-bold">
            Explore More...
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Overview;
