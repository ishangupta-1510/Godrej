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
export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Overview />
      <Entry />
      <Location />
      <FloorPlan />
      <Amenities />
      <Outdoor />
      <Explore />
      <ContactUs />
    </div>
  );
}
