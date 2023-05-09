import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
const Explore = () => {
  const images = ["liv1.png", "liv2.png", "liv3.png", "liv4.png"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleArrowClick = (index, name) => {
    console.log(index);
    setCurrentImageIndex(index);
  };
  const currentImage = images[currentImageIndex];
  return (
    <div>
      <div className="h-screen sm:hidden relative">
        <div className="text-center items-center">
          <h1 className="text-xl pb-10 xl:text-5xl font-bold text-gray-700">
            Explore the Living Spaces
          </h1>
        </div>
        <div className="transition pr-5 pl-5 duration-1000 ease-in-out transform justify-center items-center xl:justify-center brightness-100  content-center w-sm xl:w-1/2 flex xl:right-0 xl:h-full">
          <img className="" src={currentImage} alt="" />
          <div className="absolute w-[90%] inset-0 flex items-center justify-center brightness-100 opacity-100 transition duration-500 ease-in-out">
            <ArrowCircleLeftIcon
              className="text-white text-5xl opacity-60 mx-9 left-0 absolute top-1/2 transform -translate-y-1/2"
              onClick={() =>
                handleArrowClick((currentImageIndex + 1) % images.length)
              }
            />
            <ArrowCircleRightIcon
              className="text-white text-5xl opacity-60 absolute right-0 top-1/2 transform -translate-y-1/2"
              onClick={() =>
                handleArrowClick((currentImageIndex + 1) % images.length)
              }
            />
          </div>
        </div>
      </div>
      <div className="pl-20 pr-20 pt-20 hidden sm:block">
        <h1 className="text-3xl font-bold mb-6 text-[#3F535E] ">
          Explore the Living Spaces
        </h1>
        <div>
          <div className="flex justify-evenly pt-10">
            <div className="">
              <img
                position="relative"
                src="livl1.png"
                alt="image 1"
                width={350}
                height={300}
                className="rounded-md my-image"
              />
            </div>
            <div className=" brightness-100 w-92 mr-4">
              <img
                position="relative"
                src="livl2.png"
                alt="image 1"
                width={350}
                height={300}
                className="rounded-md my-image"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-evenly pt-5">
          <div className=" brightness-100 w-92 mr-4">
            <img
              position="relative"
              src="livl3.png"
              alt="image 1"
              width={350}
              height={300}
              className="rounded-md my-image"
            />
          </div>
          <div className=" brightness-100 w-92 mr-4">
            <img
              position="relative"
              src="livl4.png"
              alt="image 1"
              width={350}
              height={300}
              className="rounded-md my-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
