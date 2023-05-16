import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Carousel2 from "./Carousel2";
import Slider from "react-slick";
const Outdoor = () => {
  var settings = {
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    slidesToShow: 3,
    rows: 2,
    infinite: false,
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
          <h1 className="text-xl dm:text-4xl pb-10 font-bold text-gray-700">
            Explore the Outdoor Spaces
          </h1>
        </div>
        <div className="am:pt-5 z-30 pr-14 pl-14 justify-center items-center xl:justify-center brightness-100  content-center w-sm xl:w-1/2 flex xl:right-0 xl:h-full">
          <img
            className="absolute right-2 -top-16 em:h-72 em:-top-16 am:h-[400px] am:-top-24"
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
          className="flex flex-col items-center my-16 gap-16 relative"
          id="gallery"
        >
          <div class="capitalize text-xl dm:text-4xl dm:pt-40 font-bold flex justify-start w-5/6 items-center max-sm:justify-center max-sm:text-center">
            Explore The Outdoor Spaces
          </div>
          <img
            className="absolute z-0 hidden sm:block max-h-[38%] left-10 top-[65%]"
            src="sun2.png"
            alt=""
          />
          <div className="w-5/6 max-sm:flex  max-sm:h-full max-sm:px-3">
            <Slider {...settings}>
              <div>
                <img
                  className="max-sm:w-full z-10 max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
                  src="/expl1.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="max-sm:w-full z-10 max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
                  src="/expl2.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="max-sm:w-full max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
                  src="/expl3.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="max-sm:w-full z-10 max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
                  src="/expl4.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="max-sm:w-full max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
                  src="/expl5.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="max-sm:w-full max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
                  src="/expl6.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="max-sm:w-full max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
                  src="/expl6.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="max-sm:w-full max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
                  src="/expl6.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="max-sm:w-full max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
                  src="/expl6.png"
                  alt=""
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomPrevArrow = (props) => (
  <div className="absolute left-[-50px] top-[47%]" onClick={props.onClick}>
    <ArrowBackIosNewIcon />
  </div>
);

// Custom arrow component for next button
const CustomNextArrow = (props) => (
  <div
    className="cursor-pointer absolute right-[-50px] top-[47%]"
    onClick={props.onClick}
  >
    <ArrowForwardIosIcon />
  </div>
);

export default Outdoor;
