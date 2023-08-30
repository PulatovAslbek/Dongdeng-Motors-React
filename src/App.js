import React from "react";
import "./App.css";
import Header from "./components/Header_block/Header.jsx";
import Intro from "./components/Main_block/Intro-sec/Intro";
import Partners from "./components/Main_block/Partners-sec/Partners"
import ModelTabs from "./components/Main_block/Model-sec/Model"
import AboutUsSection from "./components/Main_block/About-sec/About"
import Faq from "./components/Main_block/Faq-sec/Faq"
import {Contact, LastLine} from "./components/Main_block/Contact-sec/Contact"
import Footer from "./components/Footer_block/Footer";


function App() {
  return (
    <>
      <Header />
      <Intro />
      <Partners />
      <ModelTabs />
      <AboutUsSection  />
      <Faq />
      <Contact />
      <LastLine />
      <Footer />
    </>
  );
}

export default App;
