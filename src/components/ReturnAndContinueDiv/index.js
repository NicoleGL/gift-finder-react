import React from "react";
import styles from "./index.module.css";
import NavigationButton from "../NavigationButton";

function ReturnAndContinueDiv(props) {
  const { returnPath, continuePath, onContinueClick } = props;
  return (
    <div className={styles.ReturnAndContinueDiv}>
      <NavigationButton to={returnPath} text="Return" color="var(--purple)" />
      <NavigationButton
        to={continuePath}
        text="Continue"
        click={onContinueClick}
      />
    </div>
  );
}

export default ReturnAndContinueDiv;
