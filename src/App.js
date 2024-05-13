import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Analytics />
    </div>
  );
}
