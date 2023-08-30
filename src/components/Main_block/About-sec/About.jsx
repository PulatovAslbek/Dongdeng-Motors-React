import React from "react";
import "./About.css";
import Salon1 from "../../../assets/images/dongfeng-salon.jpg";
import Salon2 from "../../../assets/images/dongfeng-salon2.jpg";
import aeolus from "../../../assets/images/dongfeng-aeolus.jpg";

const AboutUsSection = () => {
  return (
    <section className="about-us">
      <div className="container">
        <h3 className="about-us__title">WHO ARE WE?</h3>
        <p className="about-us__desc">
          Dongfeng Motor Corporation, founded in 1969, is one of{" "}
          <span className="color">China’s largest automobile groups.</span> Our
          main business covers an entire range of commercial vehicles, passenger
          vehicles, auto assemblies, parts and components, machines and
          equipment, and other automobile-related products and services.
          Currently, DFM's sales revenue reached 90 billion USD in 2018 and has
          150,000 employees.
        </p>

        <h3 className="about-us__title">AWWARDS</h3>
        <p className="about-us__desc">
          <span className="color">
            Quality rating of Chinese car brands in 2022 for cars with internal
            combustion engines:
          </span>{" "}
          Dongfeng-Honda took the top spot as the most reliable car brand in
          2022.
        </p>

        <div className="about-us__images-box">
          <img
            className="about-us__images"
            src={Salon1}
            alt=""
          />
          <img
            className="about-us__images"
            src={Salon2}
            alt=""
          />
          <img
            className="about-us__images"
            src={aeolus}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
