import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Title from "../../components/Title";
import Icon from "../../components/Icon";
import categoryIcon from "../../assets/icons/freedom-of-choice.png";
import ReturnAndContinueDiv from "../../components/ReturnAndContinueDiv";
import { ROUTE_NAMES } from "../../constants";
import { useGiftFinderContext, setCategories } from "../../store";

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
  clothes: "fa-tshirt",
  electronics: "fa-robot",
  decoration: "fa-couch",
  "sports and outdoors": "fa-football-ball",
  games: "fa-gamepad",
  hobbies: "fa-palette",
  books: "fa-book-open",
  cooking: "fa-cookie-bite",
  accessories: "fa-shopping-bag",
};

function Category() {
  const { state, dispatch } = useGiftFinderContext();
  const [selected, setSelected] = useState(state.categories);

  useEffect(() => {
    showOrHideIcon(selected);
  }, [selected]);

  function showOrHideIcon(selected) {
    for (let category of categories) {
      const iconClass = categoryAndIcon[category];
      const icon = document.getElementsByClassName(iconClass)[0];
      if (selected.includes(category)) {
        icon.classList.remove(styles.invisible);
      } else {
        icon.classList.add(styles.invisible);
      }
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

  function toggleSelected(key) {
    if (selected.includes(key)) {
      const updatedSelected = [...selected];
      updatedSelected.splice(updatedSelected.indexOf(key), 1);
      setSelected(updatedSelected);
    } else {
      setSelected([...selected, key]);
    }
  }

  const selectedStyle = {
    filter: "none",
    boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
  };

  return (
    <>
      <Icon src={categoryIcon} />
      <Title text="2. Choose a category:" />
      <div className={styles["circle-of-categories"]}>
        {capitalizeCategories(categories).map((category) => {
          const lowerCaseCategory = category.toLowerCase();
          const addSelectedStyle = selected.includes(lowerCaseCategory);

          return (
            <a
              style={addSelectedStyle ? selectedStyle : {}}
              className={styles["category-button"]}
              key={category}
              id={category}
              onClick={function () {
                toggleSelected(lowerCaseCategory);
              }}
            >
              {category}
            </a>
          );
        })}
        <a
          className={styles["all-button"]}
          id="all-button"
          onClick={() => {
            const allButton = document.getElementById("all-button");
            allButton.classList.toggle("black-selected");
            if (allButton.classList.contains("black-selected")) {
              setSelected([...categories]);
            } else {
              setSelected([]);
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
        onContinueClick={() => dispatch(setCategories(selected))}
      />
    </>
  );
}

export default Category;
