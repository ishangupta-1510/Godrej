import { ChevronLeft } from "@mui/icons-material";
import { ChevronRight } from "@mui/icons-material";
import { useState, useEffect } from "react";

export default function Carousel2({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 11,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-300"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow opacity-70 bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={60} />
        </button>
        <button
          onClick={next}
          className="p-1  rounded-full shadow opacity-70 bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={60} />
        </button>
      </div>
    </div>
  );
}
