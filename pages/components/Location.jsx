import React from "react";

const Overview = () => {
  const handleScrollToSection = () => {
    document.getElementById("my-section").scrollIntoView();
  };
  return (
    <div className="min-h-[100px] max-h-[900px] z-10 :h-[749px] ml-auto mr-auto pt-20 lg:top-32 relative flex lg:pt-32 justify-center content-center lg:flex-row-reverse flex-col-reverse">
      <div className="transition max-h-[600px] lg:px-4 max-w-3xl pr-5 pl-5 duration-1000 ease-in-out transform justify-center items-center lg:items-start content-center w-sm lg:w-1/2 flex lg:right-0">
        <img
          className=" max-h-[470px] mt-10 mr-10 lg:max-h-screen min-h-[300px] pr-4  pl-4 md:pr-0 md:pl-0 lg:min-h-[500px] lg:min-w-[500px]"
          src="location.png"
          alt=""
          onClick={handleScrollToSection}
        />
      </div>
      <div
        id="slider"
        className="max-h-[600px] z-20 mt-10  relative overflow-x-scroll scroll scroll-smooth scrollbar-hide flex flex-row lg:flex-col lg:items-center lg:w-1/2 pr-10 lg:py-0"
      >
        <div className="flex lg:py-3 flex-col lg:flex-row text-center lg:text-left lg:items-center lg:w-auto lg:h-auto">
          <div
            className="w-32 h-32 min-h-[50px] sm:min-h-[50px] max-h-[40px] lg:max-h-[100px] bg-contain bg-center 2xl:w-32 2xl:h-20 2xl:mr-6 lg:w-32 lg:h-16 lg:mr-6"
            style={{
              backgroundImage: "url(pic1.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="lg:text-left lg:w-96">
              <h1 className="lg:text-xl xl:text-2xl text-black">
                Upcoming Whitefield Metro 6 min drive time
              </h1>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div
            className="w-[1px] lg:hidden mr-4 ml-4 h-24 lg:w-24 lg:h-24 lg:mr-6"
            style={{
              backgroundImage: "url(line2.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="flex lg:py-3 flex-col lg:flex-row text-center lg:text-left lg:items-center w-36 h-28 lg:w-auto lg:h-auto">
          <div
            className="w-32 h-32 min-h-[50px] sm:min-h-[50px] max-h-[40px] lg:max-h-[100px] bg-contain bg-center 2xl:w-32 2xl:h-20 2xl:mr-6 lg:w-32 lg:h-16 lg:mr-6"
            style={{
              backgroundImage: "url(pic2.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="lg:text-left lg:w-96">
              <h1 className="lg:text-xl xl:text-2xl text-black">
                Manipal Hospital 20 min drive time
              </h1>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div
            className="w-[1px] lg:hidden mr-4 ml-4 h-24 lg:w-24 lg:h-24 lg:mr-6"
            style={{
              backgroundImage: "url(line2.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="flex lg:py-3 flex-col lg:flex-row text-center lg:text-left lg:items-center w-36 h-24 lg:w-auto lg:h-auto">
          <div
            className="w-32 h-32 min-h-[50px] sm:min-h-[50px] max-h-[40px] lg:max-h-[100px] bg-contain bg-center 2xl:w-32 2xl:h-20 2xl:mr-6 lg:w-32 lg:h-16 lg:mr-6"
            style={{
              backgroundImage: "url(pic3.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="lg:text-left lg:w-96">
              <h1 className="lg:text-xl xl:text-2xl text-black">
                Taj Vivanta 15 min drive time
              </h1>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div
            className="w-[1px] lg:hidden mr-4 ml-4 h-24 lg:w-24 lg:h-24 lg:mr-6"
            style={{
              backgroundImage: "url(line2.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="flex lg:py-3 flex-col lg:flex-row text-center lg:text-left lg:items-center w-36 h-24 lg:w-auto lg:h-auto">
          <div
            className="w-32 h-32 min-h-[50px] sm:min-h-[50px] max-h-[40px] lg:max-h-[100px] bg-contain bg-center 2xl:w-32 2xl:h-20 2xl:mr-6 lg:w-32 lg:h-16 lg:mr-6"
            style={{
              backgroundImage: "url(pic4.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="lg:text-left lg:w-96">
              <h1 className="lg:text-xl xl:text-2xl text-black">
                Orchids International School 3 min drive time
              </h1>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div
            className="w-[1px] lg:hidden mr-4 ml-4 h-24 lg:w-24 lg:h-24 lg:mr-6"
            style={{
              backgroundImage: "url(line2.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div className="flex lg:py-3 flex-col lg:flex-row text-center lg:text-left lg:items-center w-36 h-24 lg:w-auto lg:h-auto">
          <div
            className="w-32 h-32 min-h-[50px] sm:min-h-[50px] max-h-[40px] lg:max-h-[100px] bg-contain bg-center 2xl:w-32 2xl:h-20 2xl:mr-6 lg:w-32 lg:h-16 lg:mr-6"
            style={{
              backgroundImage: "url(pic5.png)",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div>
            <div className="lg:text-left lg:w-96">
              <h1 className="lg:text-xl xl:text-2xl text-black">
                ITPB 16 min drive time
              </h1>
              <h1 className="lg:text-xl xl:text-2xl text-black"></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
