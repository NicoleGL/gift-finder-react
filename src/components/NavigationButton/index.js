import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

function NavigationButton(props) {
  const { text, color, to } = props;
  return (
    <Link
      to={to}
      className={styles["Navigation-button"]}
      style={{ backgroundColor: color }}
    >
      {text}
    </Link>
  );
}

export default NavigationButton;
