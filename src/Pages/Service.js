import React from "react";
import Accordion from "../Components/Accordion";
import AccordionData from "../Components/AccordionData";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./serviceStyle.css";

const Service = () => {
  return (
    <>
      {/* Navbar section */}
      <Navbar />
      {/* Services Hero Section */}
      <section className="p-3 bg-dark text-light">
        <div className="container ">
          <div className="row">
            <div className="col-md-12 ">
              <h2 className="text-center main-heading ubunto font-color">
                My Services
              </h2>
            </div>
            <div className="col-sm-9 mx-auto col-12">
              <div className="main-box d-flex justify-content-center align-items-center service-headContent my-5">
                <h3 className="shead text-center p-3">
                  Hola! Welcome <div className="pt-3">💗</div>
                </h3>
                <hr style={{ width: "px", height: "170px" }} />
                <p className="text-center p-4 ">
                  I'm Kumar Kelash, a teen boy, studying bachelor's in Software
                  Engineering at MUET Jamshoro, Pakistan.
                  <br />
                  <br />
                  <span
                    className="ubunto"
                    style={{ fontSize: "22px", color: "rgb(163, 163, 189)" }}
                  >
                    I will provide you amazing work about Website, WebApps and
                    world famous CMSs.
                  </span>
                  <br />
                  <br />
                  Briefly: WEB DEVELOPMENT | MOBILE APP DEVELOPMENT | SOFTWARE
                  DEVELOPMENT
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordian Section */}

      <section className="text-light accordion-main bg-dark p-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <h2 className="text-center accordion-heading ubunto font-color">
                Frequently Asked Questoins
              </h2>
            </div>
            <div className="col-md-9 mx-auto">
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                {AccordionData.map((accordion, index) => {
                  return (
                    <Accordion
                      id={accordion.id}
                      flushId={accordion.flushId}
                      hshID={accordion.hshID}
                      question={accordion.question}
                      answer={accordion.answer}
                      key={index}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="p-3 footer bg-dark text-light">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
