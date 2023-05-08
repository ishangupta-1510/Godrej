import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Amenities = () => {
  const images = ["car.png", "baski.png", "pool.png"];
  const names = ["AMPHITHEATRE", "BASKETBALL COURT", "SWIMMING POOL"];
  const [name, setName] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleArrowClick = (index, name) => {
    console.log(index);
    setCurrentImageIndex(index);
    setName(name);
  };
  const currentImage = images[currentImageIndex];
  const currentName = names[name];
  return (
    <div>
      <div className="h-screen sm:hidden relative top-40">
        <div className="text-center items-center">
          <h1 className="text-xl py-10 xl:text-5xl font-bold text-gray-700">
            Amenities
          </h1>
        </div>
        <div className="transition pr-5 pl-5 duration-1000 ease-in-out transform justify-center items-center xl:justify-center brightness-50 hover:brightness-100  content-center w-sm xl:w-1/2 flex xl:right-0 xl:h-full">
          <img className="" src={currentImage} alt="" />
          <div className="absolute w-[90%] inset-0 flex items-center justify-center brightness-100 hover:opacity-0 opacity-100 transition duration-500 ease-in-out">
            <img className="w-14" src="amph.png" alt="" />
            <h1 className="text-white pl-3 text-sm xl:text-3xl font-bold">
              {currentName}
            </h1>
          </div>
          <KeyboardArrowDownIcon
            onClick={() =>
              handleArrowClick(
                (currentImageIndex + 1) % images.length,
                (name + 1) % names.length
              )
            }
          />
        </div>
      </div>
      <div className="p-20 pt-80 hidden sm:block">
        <h1 className="text-2xl font-bold mb-6 text-[#3F535E] ">Aminities</h1>
        <div className="flex justify-around">
          <div className="w-1/3 mr-4">
            <img
              src="amph1.png"
              alt="image 1"
              width={350}
              height={300}
              className="rounded-md"
            />
          </div>
          <div className="w-1/3 mr-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
