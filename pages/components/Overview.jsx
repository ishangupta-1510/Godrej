import React from "react";

const Overview = () => {
  // const handleScrollToSection = () => {
  //   // Scroll to the section with id 'my-section'
  //   document.getElementById("my-section").scrollIntoView();
  // };
  return (
    <div
      id="Overview"
      className="relative flex flex-col ml-auto mr-auto top-20 md:top-10 p-10 md:flex-row xl:h-[749px]"
    >
      <div className="justify-center xl:pt-28 md:pt-20 flex flex-col xl:px-28 md:w-1/2 xl:h-full">
        <h1 className="flex justify-center xl:justify-start text-xl xl:text-5xl font-bold text-gray-700 font-work">
          Overview
        </h1>
        <div>
          <p
            className="flex md:text-left text-center xl:text-lg text-sm text-gray-700 pt-3 xl:pt-16"
            style={{ lineHeight: "1.4" }}
          >
            #Elevate offers you premium 1, 2 & 3 BHK apartments in Bangalore
            that promise to fulfil all your wishes. With state-of-the-art
            amenities and stunning wellness features, this well-crafted home is
            sure to make you and your family incredibly happy and healthy.
          </p>
          <p className="flex text-center md:text-left text-sm xl:text-lg text-gray-700 pt-4">
            Experience all this and more, while you relax in the lap of nature.
            A home with views endlessly green till the eyes can see, a botanical
            boulevard and outdoor working pods to make your life evergreen.
          </p>
        </div>
      </div>

      <div className="relative md:px-4 max-w-3xl md:w-2/3 max-h-xl transition duration-1000 ease-in-out transform justify-center items-center hover:brightness-75 content-center flex lg:right-0">
        <img
          className="max-h-[500px] min-h-[300px] md:min-h-[400px] md:min-w-[400px] md:max-h-[700px] md:max-w-screen pl-5"
          src="building.png"
          alt=""
          // onClick={handleScrollToSection}
        />
        <div className="absolute mt-[20%] w-[80%] h-[70%] flex justify-center items-center">
          <div className="opacity-0 hover:opacity-100 transition duration-500 ease-in-out h-[100%] w-[100%] flex justify-center items-centers text-center">
            <h1 className="text-white bm:pt-5 am:pt-0 text-sm am:text-xl lg:text-3xl font-bold h-[100%] w-[100%] flex justify-center text-center items-center">
              Explore More...
            </h1>
          </div>
        </div>
      </div>
      <div className="relative"></div>
    </div>
  );
};

export default Overview;
