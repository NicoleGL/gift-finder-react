import React from "react";
import styles from "./index.module.css";

function Icon(props) {
  const { src } = props;
  return <img src={src} alt="" className={styles.icon} />;
}

export default Icon;
