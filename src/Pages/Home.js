import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import Wave1 from "../images/HomeImages/wave1.svg";
import Wave2 from "../images/HomeImages//wave2.svg";
import SkillsImage from "../images/HomeImages/image1.svg";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./homeStyle.css";

import Card from "../Components/Card";
import Data from "../Components/ProjectsData";
import Footer from "../Components/Footer";

import Aos from "aos";
import "aos/dist/aos.css";

import { motion } from "framer-motion";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      {/* Navbar Section  */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* My Skills section*/}
      <img src={Wave1} alt="wave" />
      <section className="p3 bg-dark text-light mt-n5 skills">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center align-content-center order-sm-1 order-2">
              <img
                src={SkillsImage}
                alt="skill_image"
                style={{ width: "480px", height: "550px" }}
                className="img-fluid img2"
              />
            </div>
            <div className="col-md-6 order-sm-2 order-1">
              <h2
                className="pt-5 m-sm-0 text-sm-start text-center"
                style={{
                  color: "#6C63FF",
                  fontSize: "35px",
                  fontFamily: "Ubuntu",
                }}
              >
                My Skills
              </h2>
              <hr />
              <p className="pt-3 px-3 skill-content py-2 text-sm-start text-center">
                I am a passionate Software Developer. I can do several things
                such as:
              </p>

              <ul
                className="d-flex flex-column align-content-center justify-content-center"
                style={{ letterSpacing: ".7px", fontSize: "18px" }}
              >
                <li>
                  Designing cool websites and apps using Advanced Technology
                </li>
                <li>Developing top rated website and apps</li>
                <li>Creating manual designs and artworks.</li>
                <li>Coding various Software using up to date coding tools</li>
              </ul>

              <div className="row py-4 justify-content-sm-start d-flex align-content-center justify-content-center">
                <div className="col-3">
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={66}
                    duration={4.4}
                    easingFunction={easeQuadInOut}
                  >
                    {(value) => {
                      const roundedValue = Math.round(value);
                      return (
                        <CircularProgressbarWithChildren
                          value={roundedValue}
                          styles={buildStyles({
                            pathColor: "#6c63ff",
                            trailColor: "#eee",
                            strokeLinecap: "butt",
                            pathTransition: "none",
                          })}
                        >
                          <div style={{ fontSize: "230%" }}>
                            <i className="fab fa-css3-alt"></i>
                          </div>
                        </CircularProgressbarWithChildren>
                      );
                    }}
                  </AnimatedProgressProvider>
                </div>

                <div className="col-3">
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={75}
                    duration={4.4}
                    easingFunction={easeQuadInOut}
                  >
                    {(value) => {
                      const roundedValue = Math.round(value);
                      return (
                        <CircularProgressbarWithChildren
                          value={roundedValue}
                          styles={buildStyles({
                            pathColor: "#6c63ff",
                            trailColor: "#eee",
                            strokeLinecap: "butt",
                            pathTransition: "none",
                          })}
                        >
                          <div style={{ fontSize: "230%" }}>
                            <i className="fab fa-js-square"></i>
                          </div>
                        </CircularProgressbarWithChildren>
                      );
                    }}
                  </AnimatedProgressProvider>
                </div>
                <div className="col-3">
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={50}
                    duration={5}
                    easingFunction={easeQuadInOut}
                  >
                    {(value) => {
                      const roundedValue = Math.round(value);
                      return (
                        <CircularProgressbarWithChildren
                          value={roundedValue}
                          styles={buildStyles({
                            pathColor: "#6c63ff",
                            trailColor: "#eee",
                            strokeLinecap: "butt",
                            pathTransition: "none",
                          })}
                        >
                          <div style={{ fontSize: "230%" }}>
                            <i className="fab fa-react"></i>
                          </div>
                        </CircularProgressbarWithChildren>
                      );
                    }}
                  </AnimatedProgressProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <img src={Wave2} className="wave2" alt="wave" />
      <section
        style={{ paddingTop: "120px", paddingBottom: "120px" }}
        className="bg-dark wav2 text-light p-3"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2
                className="text-center my-5 py-5"
                style={{
                  fontFamily: "Ubuntu",
                  color: "#6C63FF",
                  fontSize: "35px",
                }}
              >
                My Previous Projects
              </h2>
            </div>
            {Data.map((project, index) => {
              return (
                <motion.div
                  whileHover={{ scale: 0.98 }}
                  transition={{ type: "string", stiffness: 120 }}
                  key={index}
                  style={{ cursor: "pointer" }}
                  className="col-lg-4 col-sm-6 mb-5 d-flex align-content-center justify-content-center"
                >
                  <Card
                    desc={project.desc}
                    name={project.name}
                    image={project.image}
                    link={project.link}
                    aos={project.aos}
                    aos_offset={project.aos_offset}
                  />
                  <br />
                  <br />
                  <br />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="bg-dark text-light p-5">
        <div className="container">
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Home;
