import React from "react";
import NavBar from "./NavBar";
import BreakfastPage from "./BreakfastPage";
import About from "./About";

function Home() {
  return (
    <div className="main-container">
      <NavBar />
      <About />
      <BreakfastPage />
    </div>
  );
}

export default Home;
