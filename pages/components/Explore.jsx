import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Carousel2 from "./Carousel2";
import Slider from "react-slick";
const Outdoor = () => {
  var settings = {
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    slidesToShow: 2,
    rows: 2,
    infinite: false,
  };
  const images = ["liv1.png", "liv2.png", "liv3.png", "liv4.png"];
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
            Explore the Living Spaces
          </h1>
        </div>
        <div className="am:pt-5 z-30 pr-14 pl-14 justify-center items-center xl:justify-center brightness-100  content-center w-sm xl:w-1/2 flex xl:right-0 xl:h-full">
          <img
            className="absolute right-1 -top-16 h-52"
            src="ovlwcir.png"
            alt=""
          />
          <Carousel2>
            {images.map((s) => (
              <img className="" src={s} alt="" />
            ))}
          </Carousel2>
          <img
            className="absolute left-7 em:hidden -bottom-8 z-0"
            src="ovl1.png"
            alt=""
          />
          <img
            className="absolute left-7 hidden em:block am:hidden -bottom-10 z-0"
            src="ovl2.png"
            alt=""
          />
          <img
            className="absolute left-5 hidden am:block -bottom-12 z-0"
            src="ovl3.png"
            alt=""
          />
        </div>
      </div>
      <div className="hidden sm:block">
        <div
          className="flex flex-col items-center my-16 gap-16 relative"
          id="gallery"
        >
          <div class="capitalize text-xl dm:text-4xl dm:pt-0 font-bold flex justify-start w-5/6 items-center max-sm:justify-center max-sm:text-center">
            Explore The Living Spaces
          </div>
          <img
            className="absolute z-0 hidden sm:block h-1/2 right-[3%] dm:top-[10%] -top-[4%]"
            src="ovlwcir.png"
            alt=""
          />
          <img
            className="absolute z-0 hidden sm:block h-4/6 left-[10px] dm:-bottom-[50px] 2xl:-bottom-[100px] fm:-bottom-[200px] -bottom-[3px]"
            src="ovl4.png"
            alt=""
          />
          <div className="w-5/6 max-h-screen max-sm:flex  max-sm:h-full max-sm:px-3">
            <Slider {...settings}>
              <div>
                <img
                  className="max-sm:w-full p-2 z-10 max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
                  src="/livl1.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="max-sm:w-full p-2 z-10 max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
                  src="/livl2.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="max-sm:w-full p-2 max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
                  src="/livl3.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="max-sm:w-full p-2 z-10 max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
                  src="/livl4.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="max-sm:w-full p-5 max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
                  src="/expl5.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="max-sm:w-full p-5 max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
                  src="/expl6.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="max-sm:w-full p-5 max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
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
