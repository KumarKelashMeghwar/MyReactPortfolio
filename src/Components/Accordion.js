import React from "react";

const Accordion = ({ question, answer, id, flushId, hshID }) => {
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header" id={id}>
          <button
            className="accordion-button text-light collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={hshID}
            aria-expanded="false"
            aria-controls={flushId}
          >
            {question}
          </button>
        </h2>
        <div
          id={flushId}
          className="accordion-collapse collapse"
          aria-labelledby={id}
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">{answer}</div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
