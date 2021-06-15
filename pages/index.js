import React from "react";
import Home from "../sections/Home";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Portfolio from "../sections/Portfolio";
import Testimonials from "../sections/Testimonials";
import Services from "../sections/Services";

const index = () => {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  );
};

export default index;
