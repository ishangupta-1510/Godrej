import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Amenities = () => {
  const images = ["imt1.png", "imt2.png", "imt4.png", "imt3.png"];
  const images2 = ["amph2.png", "swim.png", "parki.png", "baski.png"];
  const names = [
    "AMPHITHEATRE",
    "Half Olympic size pool",
    "SWIMMING POOL",
    "KID'S PARK",
  ];

  const [name, setName] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isBright, setIsBright] = useState(false);

  const handleArrowClick = (index, name) => {
    if (index < 0) {
      index = images.length - 1;
      name = names.length - 1;
    }
    console.log(index);
    setCurrentImageIndex(index);
    setName(name);
    setIsBright(false);
  };

  const handleImageLoad = () => {
    setIsBright(true);
  };

  const currentImage = images[currentImageIndex];
  const currentName = names[name];

  return (
    <div id="Amenities">
      <div className="sm:hidden relative">
        <div className="text-center items-center">
          <h1 className="text-xl dm:text-4xl py-10  text-gray-700">
            Amenities
          </h1>
        </div>
        <div className="">
          <KeyboardArrowUpIcon
            className="relative left-3"
            onClick={() =>
              handleArrowClick(
                (currentImageIndex - 1) % images.length,
                (name - 1) % names.length
              )
            }
          />
          <img className="pl-5 pr-5 brightness-50" src={currentImage} alt="" />
          <div className="absolute ml-7 w-[90%] inset-0 flex items-center justify-center brightness-100 opacity-100 transition duration-500 ease-in-out">
            <img
              className="w-14 transition duration-1000 ease-in-out transform "
              src={images2[currentImageIndex]}
              alt=""
              onLoad={handleImageLoad}
            />
            <h1 className="text-white pl-3 text-sm xl:text-3xl ">
              {currentName}
            </h1>
          </div>
          <KeyboardArrowDownIcon
            className="relative right-3"
            onClick={() =>
              handleArrowClick(
                (currentImageIndex + 1) % images.length,
                (name + 1) % names.length
              )
            }
          />
        </div>
      </div>
      <div className="2xl:pl-40 xl:pl-32 xl:pr-24 2xl:pr-36 sm:pl-20 sm:pr-20 lg:pt-48 hidden sm:block">
        `
        <h1 className="text-xl dm:text-4xl  mb-6 text-[#3F535E] ">Aminities</h1>
        `
        <div className="flex justify-between">
          <img className="absolute z-0 hidden xl:block" src="sun1.png" alt="" />
          <div className="transition duration-1000 ease-in-out transform  w-92 mr-4">
            <img
              position="relative"
              src="amp1.png"
              alt="image 1"
              width={350}
              height={300}
              className="rounded-md brightness-50 z-10 hover:brightness-100"
            />

            <div className="absolute brightness-90 pl-5 pr-5 inset-0 flex hover:opacity-0 justify-center items-center opacity-100 transition duration-500 ease-in-out">
              <img
                src="amph2.png"
                alt=""
                className="w-14 mr-3 sm:hidden md:block"
              />
              <h1 className="text-white  text-sm xl:text-2xl">Amphitheater</h1>
            </div>
          </div>

          <div className="transition  duration-1000  ease-in-out transform  w-92 mr-4">
            <img
              position="relative"
              src="pool1.png"
              alt="image 1"
              width={350}
              height={300}
              className="rounded-md brightness-50 hover:brightness-100"
            />
            <div className="absolute brightness-90 inset-0 pl-5 pr-5 flex hover:opacity-0 justify-center items-center opacity-100 transition duration-500 ease-in-out">
              <img
                src="swim.png"
                alt=""
                className="w-14 mr-3 sm:hidden md:block"
              />
              <h1 className="text-white pl-5 text-sm xl:text-2xl">
                Half Olympic size pool
              </h1>
            </div>
          </div>
          <div className="transition z-10 duration-1000 ease-in-out transform  w-92 mr-4">
            <img
              position="relative"
              src="baski1.png"
              alt="image 1"
              width={350}
              height={300}
              className="rounded-md brightness-75 hover:brightness-100"
            />
            <div className="absolute brightness-90 inset-0 flex hover:opacity-0 justify-center items-center opacity-100 transition duration-500 ease-in-out">
              <img
                src="baski.png"
                alt=""
                className="w-14 mr-3 sm:hidden md:block"
              />
              <h1 className="text-white text-sm xl:text-2xl">
                Basket Ball Court
              </h1>
            </div>
          </div>
          <img
            className="absolute z-0 hidden xl:block max-h-[280px] right-24 top-[3520px]"
            src="sun0.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Amenities;
