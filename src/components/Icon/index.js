import React from "react";
import "./index.css";

function Icon(props) {
  const { src } = props;
  return <img src={src} alt="" className="icon" />;
}

export default Icon;
