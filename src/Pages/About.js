import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import KailashImg from "../images/kailash.jpg";
import KelashImg from "../images/Kelash.jpg";
import Weimg from "../images/kumar.jpg";
import Kelash from "../images/Jamshoro.jpg";
import MyImg from "../images/myownImage.jpg";
import KumarKelash from "../images/KumarKelash.jpg";

const About = () => {
  return (
    <>
      {/* Navbar section */}
      <Navbar />

      {/* Images gallery */}

      <section className="bg-dark text-light p-3">
        <div className="container">
          <div className="row p-5">
            <div className="col-md-12">
              <h2 className="text-center main-heading ubunto font-color">
                My Images
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <img
                src={MyImg}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Kelash"
              />
              <img
                src={KelashImg}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Kelash"
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                src={KailashImg}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Kailash"
              />
              <img
                src={Kelash}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="KumarKelashMeghwar"
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                src={Weimg}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="KelashKumarMeghwar"
              />
              <img
                src={KumarKelash}
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Kelash"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <div className="bg-dark text-light" style={{ padding: "40px 0" }}>
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
