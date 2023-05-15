import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardActionArea, Typography, CardContent, Card } from "@mui/material";

function App() {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesPerRow: 3,
    rows: 2,
  };

  return (
    <div className="p-20 pl-32 pr-32">
      <Slider {...settings}>
        <div>
          <img
            className="max-sm:w-full p-2 z-10 max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
            src="/expl1.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="max-sm:w-full p-2 z-10 max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
            src="/expl2.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="max-sm:w-full p-2 max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
            src="/expl3.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="max-sm:w-full p-2 z-10 max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
            src="/expl4.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="max-sm:w-full p-2 max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
            src="/expl5.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="max-sm:w-full p-2 max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
            src="/expl6.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="max-sm:w-full p-2 max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
            src="/expl6.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="max-sm:w-full p-2 max-sm:h-full max-sm:object-cover max-sm:rounded-xl"
            src="/expl6.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}
export default App;
