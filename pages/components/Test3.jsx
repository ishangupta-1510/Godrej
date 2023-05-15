import React, { useState } from "react";
import Carousel from "./Carousel";

const slides = ["imt1.png", "imt2.png", "imt3.png", "imt4.png"];

const itemTemplate = () => {
  return (
    <div className="w-screen flex justify-center items-center">
      <div className="max-w-md ">
        <Carousel>
          {slides.map((s) => (
            <img src={s} alt="" />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default itemTemplate;
