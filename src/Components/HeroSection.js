import React from "react";
import HeroImage from "../images/HomeImages/hero-image.svg";

const HeroSection = () => {
  return (
    <>
      <section className="bg-dark p-3 text-light">
        <div className="container pb-4 pt-2">
          <div className="row">
            <div className="col-md-6 col-sm-12 d-flex flex-column align-content-center justify-content-center">
              <h2
                className="m-sm-0 mt-4 text-sm-start text-center"
                style={{
                  fontSize: "40px",
                  color: "#6C63FF",
                  fontFamily: "Ubuntu",
                  letterSpacing: "2px",
                }}
              >
                My name is Kumar Kelash.
              </h2>
              <p
                className="content py-2 pt-4 text-sm-start text-center"
                style={{ letterSpacing: "0.5px" }}
              >
                I am doing bachelor's in Software Engineering at MUET Jamshoro,
                Pakistan! I am a Software Developer with experties in making
                cool responsive websites and designing mobile and web apps.
              </p>
              <p className="text-sm-start guideline text-center">
                Follow me at these plateforms!
              </p>
              <div className="social-medias w-sm-50 m-auto mx-sm-0 d-flex justify-content-between align-content-center my-5 my-sm-3 h3">
                <a href="https://twitter.com/Kelash__Kumar" target="_blank">
                  <i className="bi bi-twitter"></i>
                </a>
                <a
                  href="https://www.facebook.com/kumar.kelash.5855"
                  target="_blank"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://github.com/KumarKelashMeghwar" target="_blank">
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/kelash-kumar-a098881a3/"
                  target="_blank"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6  d-flex justify-content-center align-content-center">
              <img
                src={HeroImage}
                alt="HeroImage"
                style={{ width: "400px", height: "400px" }}
                className="img-fluid img1"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
