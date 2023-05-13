import React, { useState } from "react";
import { Carousel } from "primereact/carousel";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";

const VerticalCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    { id: 1, url: "im1.png" },
    { id: 2, url: "im2.png" },
    { id: 3, url: "im3.png" },
  ];
  console.log(currentImageIndex);

  const itemTemplate = (image) => {
    return (
      <div className="image-container">
        <img src={image.url} alt={`Image ${image.id}`} />
      </div>
    );
  };

  return (
    <Carousel
      value={images}
      itemTemplate={itemTemplate}
      numVisible={1}
      numScroll={1}
      circular={true}
      orientation="vertical"
      verticalViewPortHeight="379px"
    />
  );
};

export default VerticalCarousel;
