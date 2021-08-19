import React, { useEffect, useMemo, useState } from "react";
import NavigationButton from "../../components/NavigationButton";
import ResultBox from "../../components/ResultBox";
import { ROUTE_NAMES } from "../../constants";
import { useGiftFinderContext, resetState } from "../../store";
import styles from "./index.module.css";

const pathToJsons = "./jsons/";
async function fetchJsonData(nameOfJson) {
  const pathToFile = pathToJsons.concat(nameOfJson);
  const response = await fetch(pathToFile, {
    method: "get",
    mode: "no-cors",
  });
  const data = response.json();
  return data;
}

function Result() {
  const { state, dispatch } = useGiftFinderContext();
  const selectedCategories = [...state.categories];
  const selectedBudget = state.budget;
  const selectedCharacter = state.character;

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const promises = selectedCategories.map((category) => {
        return fetchJsonData(
          category.toLowerCase().replace(/ /g, "").concat(".json")
        );
      });
      await Promise.all(promises).then((data) => {
        const listOfProducts = data.flat();
        setProducts(listOfProducts);
      });
    };
    fetchData();
  }, []);

  useEffect(() => {
    const finalList = filterProducts(products);
    setFilteredProducts(finalList);
  }, [products]);

  function filterProducts(productList) {
    return productList.filter((product) => {
      const withinBudget = product.retail_price / 100 <= selectedBudget;
      const matchesCharacter = product.character.includes(selectedCharacter);
      return withinBudget && matchesCharacter;
    });
  }

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
        <a
          className={styles["randomize-button"]}
          onClick={() => {
            const updatedList = [...filteredProducts];
            removeFromArray(product, updatedList);
            setFilteredProducts(updatedList);
          }}
        >
          <i className={`${styles["fa-mar"]} fas fa-dice`}></i> Randomize Again
        </a>
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
