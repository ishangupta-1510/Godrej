import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Overview from "./components/Overview";
import Entry from "./components/Entry";
import Location from "./components/Location";
import Amenities from "./components/Amenities";
import FloorPlan from "./components/FloorPlan";
import Outdoor from "./components/Outdoor";
import Explore from "./components/Explore";
import ContactUs from "./components/ContactUs";
import TestSlide from "./components/Testslide";
import Footer from "./components/Footer";
import Test2 from "./components/Text2";
import Slideshow from "./components/Testslide";
import Test3 from "./components/Test3";
import Test4 from "./components/Test4";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Slideshow />
      <Overview />
      <Entry />
      <Location />
      <FloorPlan />
      {/* <Test2 /> */}
      {/* <Test3 /> */}
      <Test2 />
      {/* <Amenities /> */}
      <Test4 />
      {/* <Outdoor /> */}
      <Explore />
      <ContactUs />
      <Footer />
    </div>
  );
}
// const data = [
//   {
//     image: "imt1.png",
//     title: "Pool",
//     description: "A beautiful pool with a waterfall feature",
//   },
//   {
//     image: "imt2.png",
//     title: "Gym",
//     description: "A state-of-the-art gym with all the latest equipment",
//   },
//   {
//     image: "imt3.png",
//     title: "Sauna",
//     description: "A relaxing sauna to help you unwind after a long day",
//   },
// ];
