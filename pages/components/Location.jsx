import React from "react";

const Location = () => {
  const handleScrollToSection = () => {
    document.getElementById("my-section").scrollIntoView();
  };
  return (
    <div
      id="Location"
      className="relative flex flex-col ml-auto mr-auto top-40 p-10 md:flex-row-reverse md:h-[749px]"
    >
      <h1 className="md:absolute md:top-0 md:right-52 text-center text-gray-700 text-md md:text-4xl md:pt-8 font-bold">
        Location
      </h1>
      <div className="relative justify-center md:justify-left items-center content-center flex">
        <img
          className="max-h-[500px] min-h-[300px] md:min-h-[400px] md:min-w-[400px]"
          src="location.png"
          alt=""
          // onClick={handleScrollToSection}
        />
      </div>
      {/* <div className="py-5 xl:w-1/2">
        <h1 className="xl:absolute xl:top-0 xl:right-52 text-center text-gray-700 text-xl xl:text-4xl xl:pt-8 font-bold">
          Location
        </h1>
        <div className="xl:pt-20 pt-10 transition pr-5 pl-5 xl:pr-0 xl:pl-0 duration-1000 ease-in-out transform justify-center items-center xl:justify-center content-center w-sm xl:w-[100%] flex xl:right-0 xl:h-full">
          <img
            className=""
            src="location1.png"
            alt=""
            onClick={handleScrollToSection}
          />
        </div>
      </div> */}
      <div
        id="slider"
        className="relative md:justify-center overflow-x-scroll md:overflow-hidden scroll whitespace-nowrap scroll-smooth scrollbar-hide flex flex-row md:flex-col mx-6 md:w-1/2 py-10 md:py-0 md:h-full"
      >
        <div className="flex md:py-3 flex-col md:flex-row md:text-left items-center md:w-auto md:h-auto">
          <div
            className="w-10 h-10 bg-contain  md:w-32 md:h-20 md:-6"
            style={{
              backgroundImage: "url(pic1.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="flex flex-col md:flex-row">
              <p className="text-xs md:text-lg text-gray-700 md:mt-2">
                Upcoming Whitefield
              </p>
              <p className="text-xs pl-1 md:text-lg text-gray-700 md:mt-2">
                Metro 6 min drive time
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div
            className="w-[1px] md:hidden mr-4 ml-4 h-24 md:w-24 md:h-24 md:mr-6"
            style={{
              backgroundImage: "url(line2.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="flex md:py-3 flex-col md:flex-row text-center md:text-left items-center md:w-auto md:h-auto">
          <div
            className="w-10 h-10 bg-contain  md:w-32 md:h-20 md:mr-6"
            style={{
              backgroundImage: "url(pic2.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="flex flex-col md:flex-row">
              <p className="text-xs md:text-lg text-gray-700 md:mt-2">
                Manipal Hospital 20
              </p>
              <p className="text-xs pl-1 md:text-lg text-gray-700 md:mt-2">
                min drive time
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div
            className="w-[1px] md:hidden mr-4 ml-4 h-24 md:w-24 md:h-24 md:mr-6"
            style={{
              backgroundImage: "url(line2.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="flex md:py-3 flex-col md:flex-row text-center md:text-left items-center md:w-auto md:h-auto">
          <div
            className="w-10 h-10 bg-contain  md:w-32 md:h-20 md:mr-6"
            style={{
              backgroundImage: "url(pic3.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="flex flex-col md:flex-row">
              <p className="text-xs md:text-lg text-gray-700 md:mt-2">
                Taj Vivanta 15 min
              </p>
              <p className="text-xs pl-1 md:text-lg text-gray-700 md:mt-2">
                drive time
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div
            className="w-[1px] md:hidden mr-4 ml-4 h-24 md:w-24 md:h-24 md:mr-6"
            style={{
              backgroundImage: "url(line2.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="flex md:py-3 flex-col md:flex-row text-center md:text-left items-center md:w-auto md:h-auto">
          <div
            className="w-10 h-10 bg-contain  md:w-32 md:h-20 md:mr-6"
            style={{
              backgroundImage: "url(pic4.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="flex flex-col md:flex-row">
              <p className="text-xs md:text-lg text-gray-700 md:mt-2">
                Orchids International
              </p>
              <p className="text-xs md:text-lg pl-1 text-gray-700 md:mt-2">
                School 3 min drive time
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div
            className="w-[1px] md:hidden mr-4 ml-4 h-24 md:w-24 md:h-24 md:mr-6"
            style={{
              backgroundImage: "url(line2.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="flex md:py-3 flex-col md:flex-row text-center md:text-left items-center md:w-auto md:h-auto">
          <div
            className="w-10 h-10 bg-contain  md:w-32 md:h-20 md:-6"
            style={{
              backgroundImage: "url(pic5.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="flex flex-col md:flex-row">
              <p className="text-xs md:text-lg text-gray-700 md:mt-2">
                ITPB 16 min drive
              </p>
              <p className="text-xs pl-1 md:text-lg text-gray-700 md:mt-2">
                time
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
