import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
const Outdoor = () => {
  const images = ["exp1.png", "exp2.png", "exp3.png", "exp4.png", "exp5.png"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleArrowClick = (index, name) => {
    console.log(index);
    setCurrentImageIndex(index);
  };
  const currentImage = images[currentImageIndex];
  return (
    <div id="Gallery">
      <div className="pt-10 sm:hidden relative">
        <div className="text-center">
          <h1 className="text-xl pb-10 xl:text-5xl font-bold text-gray-700">
            Explore the Outdoor Spaces
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
      <div className="hidden sm:block">
        <div
          class="flex flex-col items-center my-16 gap-16 max-sm:h-[80vh] relative"
          id="gallery"
        >
          <div class="capitalize text-3xl font-bold flex justify-start w-5/6 items-center max-sm:justify-center max-sm:text-center">
            Explore the outdoor spaces
          </div>
          <img
            className="absolute z-0 hidden xl:block 2xl:max-h-[360px] xl:max-h-[300px] left-20 xl:top-[260px] 2xl:top-[350px]"
            src="sun2.png"
            alt=""
          />
          <div class="hidden max-sm:flex bg-white opacity-80 p-3 rounded-full aspect-square px-5 absolute top-2/4 right-6 z-10">
            <img class="w-[25px]" src="/arrow.svg" alt="" />
          </div>
          <div class="w-5/6 grid grid-cols-3 gap-6 max-sm:flex max-sm:h-full max-sm:overflow-x-scroll max-sm:px-3">
            <img
              className="max-sm:w-full z-10 max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
              src="/expl1.png"
              alt=""
            />
            <img
              className="max-sm:w-full z-10 max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
              src="/expl2.png"
              alt=""
            />
            <img
              className="max-sm:w-full max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
              src="/expl3.png"
              alt=""
            />
            <img
              className="max-sm:w-full z-10 max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
              src="/expl4.png"
              alt=""
            />
            <img
              className="max-sm:w-full max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
              src="/expl5.png"
              alt=""
            />
            <img
              className="max-sm:w-full max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
              src="/expl6.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outdoor;
