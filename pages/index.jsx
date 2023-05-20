import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage_old";
import Overview from "./components/Overview";
import Entry from "./components/Entry";
import Location from "./components/Location";
import Amenities from "./components/Amenities";
import FloorPlan from "./components/FloorPlan";
import Outdoor from "./components/Outdoor";
import Explore from "./components/Explore";
import ContactUs from "./components/ContactUs";
import TestSlide from "./components/HomePage";
import Footer from "./components/Footer";
import Test2 from "./components/Text2";
import Slideshow from "./components/HomePage";
import Test3 from "./components/Test3";
import Test4 from "./components/Test4";
import Test5 from "./components/Test5";
import Float from "./components/Floting_Components";
import ContactUs_float from "./components/ContactUs_float";
export default function Home() {
  return (
    <div>
      <Float />
      <ContactUs_float />
      <Navbar />
      <Slideshow />
      <Overview />
      <Entry />
      <Location />
      <FloorPlan />
      <Test4 />
      {/* <Amenities /> */}
      <Outdoor />
      <Explore />
      <ContactUs />
      <Footer />
    </div>
  );
}
