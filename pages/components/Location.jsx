import React from "react";

const Overview = () => {
  return (
    <div
      id="Location"
      className="min-h-[100px]  z-10  ml-auto mr-auto mt-16 pt-10 dm:top-10 relative flex justify-center items-center content-center dm:flex-row-reverse flex-col"
    >
      <img
        className="absolute hidden dm:block max-h-[580px] top-32 right-0"
        src="ovl.png"
        alt=""
      />
      <div className="max-h-[600px] dm:px-4 max-w-3xl right-0 pr-5 pl-5 duration-1000 ease-in-out transform justify-center items-center dm:items-start content-center w-sm dm:w-1/2 flex dm:right-0">
        <h1 className="absolute dm:w-screen dm:right-10 top-0 flex justify-center dm:justify-end font-bold text-xl dm:text-3xl xl:text-5xl">
          Location
        </h1>

        <img
          className=" max-h-[370px] z-20 md:pl-10 justify-center mt-16 dm:mt-20 dm:mr-10 dm:max-h-screen min-h-[300px]  lg:pl-4 dm:pl-10 cm:pl-1 dm:min-h-[400px] dm:min-w-[500px]"
          src="location.png"
          alt=""
        />
      </div>
      <div
        id="slider"
        className="max-h-[800px] z-20 mt-10 dm:mt-20 w-[95%] relative overflow-x-scroll scroll scroll-smooth scrollbar-hide flex cm:justify-center flex-row dm:flex-col mr-10 ml-10 dm:w-1/2 dm:py-0"
      >
        <div className="flex dm:py-3 flex-col dm:flex-row text-center dm:text-left dm:items-center w-36 h-28 dm:w-auto dm:h-auto">
          <div
            className="w-32 h-32 min-h-[50px] sm:min-h-[50px] max-h-[40px] dm:max-h-[100px] bg-contain bg-center 2xl:w-32 2xl:h-20 2xl:mr-6 dm:w-32 dm:h-16 dm:mr-6"
            style={{
              backgroundImage: "url(pic1.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="dm:text-left dm:w-96">
              <h1 className="dm:text-lg 2xl:text-2xl text-black">
                Upcoming Whitefield Metro 6 min drive time
              </h1>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div
            className="w-[1px] dm:hidden mr-4 ml-4 h-24 dm:w-24 dm:h-24 dm:mr-6"
            style={{
              backgroundImage: "url(line2.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="flex dm:py-3 flex-col dm:flex-row text-center dm:text-left dm:items-center w-36 h-28 dm:w-auto dm:h-auto">
          <div
            className="w-32 h-32 min-h-[50px] sm:min-h-[50px] max-h-[40px] dm:max-h-[100px] bg-contain bg-center 2xl:w-32 2xl:h-20 2xl:mr-6 dm:w-32 dm:h-16 dm:mr-6"
            style={{
              backgroundImage: "url(pic2.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="dm:text-left dm:w-96">
              <h1 className="dm:text-lg 2xl:text-2xl text-black">
                Manipal Hospital 20 min drive time
              </h1>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div
            className="w-[1px] dm:hidden mr-4 ml-4 h-24 dm:w-24 dm:h-24 dm:mr-6"
            style={{
              backgroundImage: "url(line2.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="flex dm:py-3 flex-col dm:flex-row text-center dm:text-left dm:items-center w-36 h-24 dm:w-auto dm:h-auto">
          <div
            className="w-32 h-32 min-h-[50px] sm:min-h-[50px] max-h-[40px] dm:max-h-[100px] bg-contain bg-center 2xl:w-32 2xl:h-20 2xl:mr-6 dm:w-32 dm:h-16 dm:mr-6"
            style={{
              backgroundImage: "url(pic3.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="dm:text-left dm:w-96">
              <h1 className="dm:text-lg 2xl:text-2xl text-black">
                Taj Vivanta 15 min drive time
              </h1>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div
            className="w-[1px] dm:hidden mr-4 ml-4 h-24 dm:w-24 dm:h-24 dm:mr-6"
            style={{
              backgroundImage: "url(line2.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="flex dm:py-3 flex-col dm:flex-row text-center dm:text-left dm:items-center w-36 h-40 dm:w-auto dm:h-auto">
          <div
            className="w-32 h-32 min-h-[50px] sm:min-h-[50px] max-h-[40px] dm:max-h-[100px] bg-contain bg-center 2xl:w-32 2xl:h-20 2xl:mr-6 dm:w-32 dm:h-16 dm:mr-6"
            style={{
              backgroundImage: "url(pic4.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="dm:text-left dm:w-96">
              <h1 className=" dm:text-lg 2xl:text-2xl text-black">
                Orchids International School 3 min drive time
              </h1>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div
            className="w-[1px] dm:hidden mr-4 ml-4 h-24 dm:w-24 dm:h-24 dm:mr-6"
            style={{
              backgroundImage: "url(line2.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="flex dm:py-3 flex-col dm:flex-row text-center dm:text-left dm:items-center w-36 h-24 dm:w-auto dm:h-auto">
          <div
            className="w-32 h-32 min-h-[50px] sm:min-h-[50px] max-h-[40px] dm:max-h-[100px] bg-contain bg-center 2xl:w-32 2xl:h-20 2xl:mr-6 dm:w-32 dm:h-16 dm:mr-6"
            style={{
              backgroundImage: "url(pic5.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="dm:text-left dm:w-96">
              <h1 className="dm:text-lg 2xl:text-2xl text-black">
                ITPB 16 min drive time
              </h1>
              <h1 className="dm:text-lg text-black"></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
