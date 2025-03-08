import React from "react";
import HighResLogo from "../assets/High_ResLogo.jpg";

function Logo() {
  return (
    <img
      src={HighResLogo}
      alt="Logo"
      style={{
        width: "143px"
      }}
    />
  );
}

export default Logo;