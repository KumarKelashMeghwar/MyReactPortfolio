import React from "react";
import "./contactStyle.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <>
      {/* Navbar section */}
      <Navbar />
      {/* Main Heading */}
      <section className="bg-dark text-light p-3">
        <div className="container">
          <div className="row p-5">
            <div className="col-md-12">
              <h2 className="text-center main-heading ubunto font-color">
                Contact Me
              </h2>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form */}
      <section className="bg-dark text-light p-3">
        <div className="container">
          <div className="row p-5">
            <div className="col-md-8 mx-auto">
              <form>
                <div className="mb-3">
                  <label for="fname" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fname"
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label for="lname" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lname"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label for="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </form>
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

export default Contact;
