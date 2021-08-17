import React from "react";
import NavigationButton from "../../components/NavigationButton";
import { ROUTE_NAMES } from "../../constants";
import styles from "./index.module.css";

function NotFound() {
  return (
    <>
      <h1 className={styles["error-message"]}>Error 404: Page not found.</h1>
      <NavigationButton to={ROUTE_NAMES.HOME} text="Take me back" />
    </>
  );
}

export default NotFound;
