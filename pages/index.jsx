import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Overview from "./components/Overview";
import Entry from "./components/Entry";
import Location from "./components/Location";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Overview />
      <Entry />
      <Location />
    </div>
  );
}
