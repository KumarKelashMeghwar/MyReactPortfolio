import React from "react";

const Card = ({ image, link, desc, name, aos, aos_offset }) => {
  return (
    <>
      <div
        data-aos={aos}
        data-aos-offset={aos_offset}
        className="card bg-dark"
        style={{ width: "18rem", border: "1px solid #fff" }}
      >
        <img src={image} className="card-img-top" alt="image" />
        <div className="card-body">
          <h5 className="card-title" style={{ color: "#6c63ff" }}>
            {name}
          </h5>
          <p className="card-text">{desc}</p>
          <a
            href={link}
            target="_blank"
            style={{ backgroundColor: "#6c63ff" }}
            className="btn"
          >
            Go Live
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
