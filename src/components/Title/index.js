import React from "react";
import styles from "./index.module.css";

function Title(props) {
  const { text } = props;
  return <h1 className={styles.title}>{text}</h1>;
}

export default Title;
