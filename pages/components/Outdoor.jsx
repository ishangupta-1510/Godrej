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
      <div className="h-screen sm:hidden relative">
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
      <div className="pl-20 pr-20 pt-20 hidden sm:block">
        <h1 className="text-3xl font-bold mb-6 text-[#3F535E] ">
          Explore the Outdoor Spaces
        </h1>
        <div>
          <div className="flex justify-between pt-10">
            <div className="">
              <img
                position="relative"
                src="expl1.png"
                alt="image 1"
                width={350}
                height={300}
                className="rounded-md"
              />
            </div>
            <div className=" brightness-100 w-92 mr-4">
              <img
                position="relative"
                src="expl2.png"
                alt="image 1"
                width={350}
                height={300}
                className="rounded-md"
              />
            </div>
            <div className=" brightness-100 w-92 mr-4">
              <img
                position="relative"
                src="expl3.png"
                alt="image 1"
                width={350}
                height={300}
                className="rounded-md"
              />
            </div>
            {/* <div className="w-1/3 mr-4">
            <img
              src="/pool1.png"
              alt="image 2"
              width={350}
              height={200}
              className="rounded-md"
            />
          </div>
          <div className="w-1/3">
            <img
              src="/baski1.png"
              alt="image 3"
              width={350}
              height={200}
              className="rounded-md"
            />
          </div> */}
          </div>
        </div>
        <div className="flex justify-between pt-5">
          <div className=" brightness-100 w-92 mr-4">
            <img
              position="relative"
              src="expl4.png"
              alt="image 1"
              width={350}
              height={300}
              className="rounded-md"
            />
          </div>
          <div className=" brightness-100 w-92 mr-4">
            <img
              position="relative"
              src="expl5.png"
              alt="image 1"
              width={350}
              height={300}
              className="rounded-md"
            />
          </div>
          <div className=" brightness-100 w-92 mr-4">
            <img
              position="relative"
              src="expl6.png"
              alt="image 1"
              width={350}
              height={300}
              className="rounded-md"
            />
          </div>
          {/* <div className="w-1/3 mr-4">
            <img
              src="/pool1.png"
              alt="image 2"
              width={350}
              height={200}
              className="rounded-md"
            />
          </div>
          <div className="w-1/3">
            <img
              src="/baski1.png"
              alt="image 3"
              width={350}
              height={200}
              className="rounded-md"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Outdoor;
