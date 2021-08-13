import React from "react";
import { ROUTE_NAMES } from "../../constants";
import Title from "../../components/Title";
import Icon from "../../components/Icon";
import categoryIcon from "../../assets/icons/freedom-of-choice.png";
import NavigationButton from "../../components/NavigationButton";

function Category() {
  return (
    <>
      <Icon src={categoryIcon} />
      <Title text="2. Choose a category:" />
      <div className="two-buttons-div">
        <NavigationButton
          to={ROUTE_NAMES.BUDGET}
          text="Return"
          color="var(--purple)"
        />
        <NavigationButton to={ROUTE_NAMES.CATEGORY} text="Continue" />
      </div>
    </>
  );
}

export default Category;
