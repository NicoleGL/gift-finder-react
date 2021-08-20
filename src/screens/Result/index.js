import React, { useEffect, useMemo, useState } from "react";
import NavigationButton from "../../components/NavigationButton";
import ResultBox from "../../components/ResultBox";
import { ROUTE_NAMES } from "../../constants";
import { useGiftFinderContext, resetState } from "../../store";
import styles from "./index.module.css";
import accessories from "../../assets/jsons/accessories.json";
import books from "../../assets/jsons/books.json";
import clothes from "../../assets/jsons/clothes.json";
import cooking from "../../assets/jsons/cooking.json";
import decoration from "../../assets/jsons/decoration.json";
import electronics from "../../assets/jsons/electronics.json";
import games from "../../assets/jsons/games.json";
import hobbies from "../../assets/jsons/hobbies.json";
import sportsandoutdoors from "../../assets/jsons/sportsandoutdoors.json";

const categories = {
  accessories,
  books,
  clothes,
  cooking,
  decoration,
  electronics,
  games,
  hobbies,
  "sports and outdoors": sportsandoutdoors,
};

function Result() {
  const { state, dispatch } = useGiftFinderContext();
  const selectedCategories = state.categories;
  const selectedBudget = state.budget;
  const selectedCharacter = state.character;

  const [filteredProducts, setFilteredProducts] = useState([]);

  const products = useMemo(() => {
    return selectedCategories
      .map((category) => {
        return categories[category];
      })
      .flat();
  }, [selectedCategories]);

  useEffect(() => {
    function filterProducts(productList) {
      return productList.filter((product) => {
        const withinBudget = product.retail_price / 100 <= selectedBudget;
        const matchesCharacter = product.character.includes(selectedCharacter);
        return withinBudget && matchesCharacter;
      });
    }

    const finalList = filterProducts(products);
    setFilteredProducts(finalList);
  }, [products, selectedCharacter, selectedBudget]);

  function getRandomElementFromArray(arr) {
    const randomNum = Math.floor(Math.random() * arr.length);
    const result = arr[randomNum];
    return result;
  }

  function removeFromArray(el, array) {
    const index = array.indexOf(el);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  const product = getRandomElementFromArray(filteredProducts);

  return (
    <>
      <h1 className={styles.title}>Your result is...</h1>
      <ResultBox product={product} />
      <div className={styles["final-buttons-div"]}>
        <button
          className={styles["randomize-button"]}
          onClick={() => {
            const updatedList = [...filteredProducts];
            removeFromArray(product, updatedList);
            setFilteredProducts(updatedList);
          }}
        >
          <i className={`${styles["fa-mar"]} fas fa-dice`}></i> Randomize Again
        </button>
        <NavigationButton
          text="Start Again"
          to={ROUTE_NAMES.HOME}
          color="var(--purple)"
          width="65%"
          icon="fas fa-home"
          click={() => dispatch(resetState())}
        />
      </div>
    </>
  );
}

export default Result;
