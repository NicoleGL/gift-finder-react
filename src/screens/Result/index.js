import React from "react";
import NavigationButton from "../../components/NavigationButton";
import ResultBox from "../../components/ResultBox";
import { ROUTE_NAMES } from "../../constants";
import styles from "./index.module.css";

function Result() {
  const product = {
    brand: "Sharpie",
    character: ["geek", "traveller", "influencer", "mom"],
    image_url: [
      "https://img.klarnacdn.net/2/thumbnail/target.com/2212fd9f72f8860a8b471df0a0324bff",
    ],
    price_currency: "USD",
    product_description:
      "Made to mark practically anywhere, Sharpie Permanent Markers inspire you to transform ordinary surfaces into passionately creative statements. This special-edition pack features Sharpie Markers in Classic, Metallic, and Mystic Gem colors, which combine soft pastels with darker, natural colors to produce vibrant marks inspired by the dynamic energy of gemstones. The original permanent marker, Sharpie features iconic ink that dries quickly and resists both water and fading. Finally, depend on these fine-point markers to leave bold marks that impress.",
    retail_price: 999,
    title: "18pk Permanent Markers Fine - Sharpie",
    web_url: "https://www.target.com",
  };
  return (
    <>
      <h1 className={styles.title}>Your result is...</h1>
      <ResultBox product={product} />
      <div className={styles["final-buttons-div"]}>
        <a className={styles["randomize-button"]}>
          <i className={`${styles["fa-mar"]} fas fa-dice`}></i> Randomize Again
        </a>
        <NavigationButton
          text="Start Again"
          to={ROUTE_NAMES.HOME}
          color="var(--purple)"
          width="65%"
          icon="fas fa-home"
        />
      </div>
    </>
  );
}

export default Result;
