import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import Carousel2 from "./Carousel2";
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
      <div className="sm:hidden pt-10 relative">
        <div className="text-center items-center">
          <h1 className="text-xl pb-10 xl:text-5xl font-bold text-gray-700">
            Explore the Living Spaces
          </h1>
        </div>
        <div className="transition pr-14 pl-14 duration-1000 ease-in-out transform justify-center items-center xl:justify-center brightness-100  content-center w-sm xl:w-1/2 flex xl:right-0 xl:h-full">
          <Carousel2>
            {images.map((s) => (
              <img src={s} alt="" />
            ))}
          </Carousel2>
        </div>
      </div>
      <div className="hidden sm:block">
        <div
          class="flex flex-col items-center my-16 gap-16 max-sm:h-[80vh] relative"
          id="gallery"
        >
          <div class="capitalize text-3xl pt-10 font-bold flex justify-start w-5/6 items-center max-sm:justify-center max-sm:text-center">
            Explore the outdoor spaces
          </div>
          <div class="hidden max-sm:flex bg-white opacity-80 p-3 rounded-full aspect-square px-5 absolute top-2/4 right-6 z-10">
            <img class="w-[25px]" src="/arrow.svg" alt="" />
          </div>
          <div class="w-4/5 grid grid-cols-2 gap-6 max-sm:flex max-sm:h-full max-sm:overflow-x-scroll max-sm:px-3">
            <img
              className="max-sm:w-full max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
              src="/livl1.png"
              alt=""
            />
            <img
              className="max-sm:w-full max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
              src="/livl2.png"
              alt=""
            />
            <img
              className="max-sm:w-full max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
              src="/livl3.png"
              alt=""
            />
            <img
              className="max-sm:w-full max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
              src="/livl4.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
