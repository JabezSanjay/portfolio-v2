import React from "react";
import Navbar from "../components/Navbar";
var Scroll = require("react-scroll");
var Element = Scroll.Element;

const Home = () => {
  return (
    <Element name="home">
      <div className="sections">
        <Navbar />
      </div>
    </Element>
  );
};

export default Home;
