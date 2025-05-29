import "./QuizzHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const QuizzHeader = ({ seconds, hasTimer }) => {
  return (
    <header style={!hasTimer ? { justifyContent: "center" } : {}}>
      <h2>React.JS Questions {!hasTimer && "Results"}</h2>
      {hasTimer && (
        <div className="time-left">
          <FontAwesomeIcon icon={faStopwatch} />
          <div className="time">{seconds}</div>
        </div>
      )}
    </header>
  );
};

export default React.memo(QuizzHeader);
