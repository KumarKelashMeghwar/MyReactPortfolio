import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ErrorPage = () => {
  return (
    <>
      {/* Navbar section */}
      <Navbar />
      <h2>Oops! Error 404! Page not found!</h2>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default ErrorPage;
