import React, { useState, useRef } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Carousel from "./Carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Slider from "react-slick";

const index = [0, 1, 2, 3];
const slides = ["imt1.png", "imt2.png", "imt3.png", "imt4.png"];
const images2 = ["amph2.png", "swim.png", "parki.png", "baski.png"];
const img1 = "imt11(1).png";
const img2 = "imt1.png";
const img3 = "imt11(2).png";
const img4 = "imt2.png";
const img5 = "imt11(3).png";
const img6 = "imt3.png";
const img7 = "imt11(4).png";
const img8 = "imt4.png";
const names = [
  "AMPHITHEATRE",
  "Half Olympic size pool",
  "SWIMMING POOL",
  "KID'S PARK",
];

const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);

  return (
    <img
      onMouseOver={() => {
        imageRef.current.src = secondaryImg;
      }}
      onMouseOut={() => {
        imageRef.current.src = primaryImg;
      }}
      src={primaryImg}
      alt=""
      ref={imageRef}
    />
  );
};
const Amenities = () => {
  var settings = {
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    slidesToShow: 1,
    rows: 1,
    infinite: true,
    vertical: true,
  };
  return (
    <div id="Amenities">
      <div className="sm:hidden relative">
        <div className="text-center items-center">
          <h1 className="text-xl py-10 lg:text-4xl font-bold text-gray-700">
            Amenities
          </h1>
        </div>
        <Slider className="pl-12 pr-12" {...settings}>
          <ImageToggleOnMouseOver
            primaryImg={img1}
            secondaryImg={img2}
            alt=""
          />
          <ImageToggleOnMouseOver
            primaryImg={img3}
            secondaryImg={img4}
            alt=""
          />
          <ImageToggleOnMouseOver
            primaryImg={img5}
            secondaryImg={img6}
            alt=""
          />
          <ImageToggleOnMouseOver
            primaryImg={img7}
            secondaryImg={img8}
            alt=""
          />
        </Slider>
      </div>
      <div className="2xl:pl-40 xl:pl-32 xl:pr-24 2xl:pr-36 sm:pl-20 sm:pr-20 lg:pt-48 hidden sm:block">
        `
        <h1 className="text-2xl lg:text-4xl font-bold mb-6 text-[#3F535E] ">
          Aminities
        </h1>
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

const CustomPrevArrow = (props) => (
  <div
    className="cursor-pointer absolute z-20 left-3 top-[47%]"
    onClick={props.onClick}
  >
    <KeyboardArrowUpIcon />
  </div>
);

// Custom arrow component for next button
const CustomNextArrow = (props) => (
  <div
    className="cursor-pointer absolute right-3 top-[47%]"
    onClick={props.onClick}
  >
    <KeyboardArrowDownIcon />
  </div>
);
export default Amenities;
