import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function NavigationButton(props) {
  const { text, color, to } = props;
  return (
    <Link
      to={to}
      className="Navigation-button"
      style={{ backgroundColor: color }}
    >
      {text}
    </Link>
  );
}

export default NavigationButton;
