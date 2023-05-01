import React from "react";

const Entry = () => {
  return (
    <div className="relative h-screen flex">
      <div className="justify-center items-center absolute w-1/2 flex right-0 h-full">
        <div
          className="z-10 absolute w-1/2"
          style={{
            background: "url(location.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "600px",
            height: "500px",
            backgroundSize: "712px",
          }}
        ></div>
        <div
          className="z-11 absolute w-1/2"
          style={{
            background: "url(oval.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "400px 30px",
            width: "900px",
            height: "605px",
            backgroundSize: "600px",
          }}
        ></div>
      </div>
      <div className="flex items-center justify-center w-1/2">
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <div
              className="w-24 h-24 mr-6"
              style={{
                backgroundImage: "url(pic1.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
            <div>
              <p className="text-lg text-gray-700 mt-2">
                Upcoming Whitefield Metro 6 min drive time
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-8">
            <div className="flex flex-row items-center">
              <div
                className="w-28 h-24 mr-4"
                style={{
                  backgroundImage: "url(pic2.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <div>
                <p className="text-lg text-gray-700 mt-2">
                  Manipal Hospital 20 min drive time
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start mt-8">
            <div className="flex flex-row items-center">
              <div
                className="h-24 mr-4"
                style={{
                  backgroundImage: "url(pic3.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  width: "115px",
                }}
              ></div>
              <div>
                <p className="text-lg text-gray-700 mt-2">
                  ITPB 16 min drive time
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start mt-8">
            <div className="flex flex-row items-center">
              <div
                className="w-24 h-24 mr-4"
                style={{
                  backgroundImage: "url(pic4.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <div>
                <p className="text-lg text-gray-700 mt-2">
                  Taj Vivanta 15 min drive time
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start mt-8">
            <div className="flex flex-row items-center">
              <div
                className="w-24 h-24 mr-4"
                style={{
                  backgroundImage: "url(pic5.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <div>
                <p className="text-lg text-gray-700 mt-2">
                  Orchids International School 3 min drive time
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
