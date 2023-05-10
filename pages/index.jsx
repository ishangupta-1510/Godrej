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

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <TestSlide /> */}
      <HomePage />
      <Overview />
      <Entry />
      {/* <Test2 /> */}
      <Location />
      <FloorPlan />
      <Amenities />
      <Outdoor />
      <Explore />
      <ContactUs />
      <Footer />
    </div>
  );
}
