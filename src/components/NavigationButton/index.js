import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

function NavigationButton(props) {
  const { text, to, color, width, icon, click } = props;
  return (
    <Link
      onClick={click ? () => click() : () => {}}
      to={to}
      className={styles["Navigation-button"]}
      style={{ backgroundColor: color, width: width }}
    >
      {<i className={`${styles["fa-mar"]} ${icon}`}></i>}
      {text}
    </Link>
  );
}

export default NavigationButton;
