import React from "react";
import Home from "../sections/Home";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Portfolio from "../sections/Portfolio";
import Testimonials from "../sections/Testimonials";
import Services from "../sections/Services";
import { ToastProvider } from "react-toast-notifications";
import SEO from "../components/SEO";

const index = () => {
  return (
    <div className="container">
      <SEO title="Jabez Sanjay | Fullstack MERN developer" />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <ToastProvider>
        <Contact />
      </ToastProvider>
    </div>
  );
};

export default index;
