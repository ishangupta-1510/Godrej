import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import Carousel2 from "./Carousel2";
import Slider from "react-slick";
const Outdoor = () => {
  var settings = {
    dots: true,
    slidesToShow: 3,
    rows: 2,
  };
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
        <div className="am:pt-5 z-30 pr-14 pl-14 justify-center items-center xl:justify-center brightness-100  content-center w-sm xl:w-1/2 flex xl:right-0 xl:h-full">
          <img
            className="absolute right-2 -top-16 em:h-96 em:-top-20 am:h-[500px] am:-top-24"
            src="olt.png"
            alt=""
          />
          <Carousel2>
            {images.map((s) => (
              <img className="" src={s} alt="" />
            ))}
          </Carousel2>
          <img
            className="absolute left-7 em:hidden -bottom-5 z-0"
            src="v1.png"
            alt=""
          />
          <img
            className="absolute left-7 hidden em:block am:hidden -bottom-7 z-0"
            src="v4.png"
            alt=""
          />
          <img
            className="absolute left-5 hidden am:block -bottom-9 z-0"
            src="v3.png"
            alt=""
          />
        </div>
      </div>
      <div className="hidden sm:block">
        <div
          className="flex flex-col items-center my-16 gap-16 max-sm:h-[80vh] relative"
          id="gallery"
        >
          <div class="capitalize text-4xl font-bold flex justify-start w-5/6 items-center max-sm:justify-center max-sm:text-center">
            Explore the outdoor spaces
          </div>
          <img
            className="absolute z-0 hidden xl:block 2xl:max-h-[360px] xl:max-h-[300px] left-20 xl:top-[260px] 2xl:top-[350px]"
            src="sun2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Outdoor;
