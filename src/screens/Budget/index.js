import React, { useState } from "react";
import "./index.css";
import NavigationButton from "../../components/NavigationButton";
import { ROUTE_NAMES } from "../../constants";
import MoneyBag from "../../assets/icons/paid.png";
import Icon from "../../components/Icon";
import Title from "../../components/Title";

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
        className="slider"
      />
      <p className="budget-value" id="budget-text">
        {budgetText}
      </p>
      <div className="two-buttons-div">
        <NavigationButton
          to={ROUTE_NAMES.HOME}
          text="Return"
          color="var(--purple)"
        />
        <NavigationButton to={ROUTE_NAMES.CATEGORY} text="Continue" />
      </div>
    </>
  );
}

export default Budget;
