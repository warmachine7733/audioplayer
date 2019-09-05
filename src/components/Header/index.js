import React from "react";
import "./index.css";

const Header = props => {
  console.log("props in header", props);
  return (
    <div className="header">
      <div style={{ position: "relative", top: "10px" }}>My JamZ</div>
    </div>
  );
};

export default Header;
