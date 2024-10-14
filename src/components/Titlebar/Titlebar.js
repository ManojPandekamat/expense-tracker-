import React from "react";

function Titlebar(props) {
  const mystyle = {
    fontSize: "1.2rem",
    fontWeight: "800",
    color: "white",
    backgroundColor: "#164863"
  };
  return <div style={mystyle }>{props.name}</div>;
}

export default Titlebar;
