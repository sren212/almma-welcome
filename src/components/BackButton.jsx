import React from "react";
import BackArrow from "../assets/Back.png";
import "../style.css";  // Don't forget to import the CSS

function BackButton() {
  return (
    <button className="button button-back">
      <img
        src={BackArrow}
        alt="Back"
        style={{
          width: "15px",
          height: "15px",
        }}
      />
    </button>
  );
}

export default BackButton;
