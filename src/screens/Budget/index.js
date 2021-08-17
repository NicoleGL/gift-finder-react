import React, { useState } from "react";
import styles from "./index.module.css";
import { ROUTE_NAMES } from "../../constants";
import MoneyBag from "../../assets/icons/paid.png";
import Icon from "../../components/Icon";
import Title from "../../components/Title";
import ReturnAndContinueDiv from "../../components/ReturnAndContinueDiv";

function Budget() {
  const [value, setValue] = useState(20);
  function onBudgetChange(ev) {
    setValue(ev.target.value);
  }
  const budgetText = value < 101 ? `$${value} or less` : "Any budget";
  return (
    <>
      <Icon src={MoneyBag} />
      <Title text="1. Choose a budget for your gift:" />
      <input
        type="range"
        min="1"
        max="101"
        value={value}
        onChange={onBudgetChange}
        className={styles.slider}
      />
      <p className={styles["budget-value"]} id="budget-text">
        {budgetText}
      </p>
      <ReturnAndContinueDiv
        returnPath={ROUTE_NAMES.HOME}
        continuePath={ROUTE_NAMES.CATEGORY}
      />
    </>
  );
}

export default Budget;
