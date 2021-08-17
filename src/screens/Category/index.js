import React from "react";
import styles from "./index.module.css";
import Title from "../../components/Title";
import Icon from "../../components/Icon";
import categoryIcon from "../../assets/icons/freedom-of-choice.png";
import ReturnAndContinueDiv from "../../components/ReturnAndContinueDiv";
import { ROUTE_NAMES } from "../../constants";
import { selectAll, deselectAll, selectOrDeselect } from "../../functions";

function Category() {
  const categories = [
    "clothes",
    "electronics",
    "decoration",
    "sports and outdoors",
    "games",
    "hobbies",
    "books",
    "cooking",
    "accessories",
  ];

  const categoryAndIcon = {
    Clothes: "fa-tshirt",
    Electronics: "fa-robot",
    Decoration: "fa-couch",
    "Sports and outdoors": "fa-football-ball",
    Games: "fa-gamepad",
    Hobbies: "fa-palette",
    Books: "fa-book-open",
    Cooking: "fa-cookie-bite",
    Accessories: "fa-shopping-bag",
  };

  function showOrHideIcon(category) {
    const iconClass = categoryAndIcon[category];
    const icon = document.getElementsByClassName(iconClass)[0];
    icon.classList.toggle(styles.invisible);
  }

  function showAllIcons() {
    const icons = document.getElementsByClassName("fas");
    for (let icon of icons) {
      icon.classList.remove(styles.invisible);
    }
  }

  function hideAllIcons() {
    const icons = document.getElementsByClassName("fas");
    for (let icon of icons) {
      icon.classList.add(styles.invisible);
    }
  }

  function capitalizeCategories(categories) {
    const array = [];
    for (let category of categories) {
      const upperCategory = category[0].toUpperCase() + category.slice(1);
      array.push(upperCategory);
    }
    return array;
  }

  return (
    <>
      <Icon src={categoryIcon} />
      <Title text="2. Choose a category:" />
      <div className={styles["circle-of-categories"]}>
        {capitalizeCategories(categories).map((category) => (
          <a
            className={styles["category-button"]}
            key={category}
            id={category}
            onClick={function () {
              console.log(selectOrDeselect);
              selectOrDeselect(document.getElementById(category), styles);
              showOrHideIcon(category);
            }}
          >
            {category}
          </a>
        ))}
        <a
          className={styles["all-button"]}
          id="all-button"
          onClick={() => {
            const allButton = document.getElementById("all-button");
            const categoryButtons = document.getElementsByClassName(
              styles["category-button"]
            );
            allButton.classList.toggle("black-selected");
            if (allButton.classList.contains("black-selected")) {
              selectAll(categoryButtons, styles);
              showAllIcons();
            } else {
              deselectAll(categoryButtons, styles);
              hideAllIcons();
            }
          }}
        >
          All
        </a>
        <div className={styles["category-icons"]} id="category-icons">
          <i
            className={`${styles.invisible} ${styles["fa-mar"]} fas fa-cookie-bite`}
          ></i>
          <i
            className={`${styles.invisible} ${styles["fa-mar"]} fas fa-palette`}
          ></i>
          <i
            className={`${styles.invisible} ${styles["fa-mar"]} fas fa-football-ball`}
          ></i>
          <i
            className={`${styles.invisible} ${styles["fa-mar"]} fas fa-robot`}
          ></i>
          <i
            className={`${styles.invisible} ${styles["fa-mar"]} fas fa-tshirt`}
          ></i>
          <i
            className={`${styles.invisible} ${styles["fa-mar"]} fas fa-couch`}
          ></i>
          <i
            className={`${styles.invisible} ${styles["fa-mar"]} fas fa-gamepad`}
          ></i>
          <i
            className={`${styles.invisible} ${styles["fa-mar"]} fas fa-book-open`}
          ></i>
          <i
            className={`${styles.invisible} ${styles["fa-mar"]} fas fa-shopping-bag`}
          ></i>
        </div>
      </div>
      <ReturnAndContinueDiv
        returnPath={ROUTE_NAMES.BUDGET}
        continuePath={ROUTE_NAMES.CHARACTER}
      />
    </>
  );
}

export default Category;
