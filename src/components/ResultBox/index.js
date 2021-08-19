import React from "react";
import styles from "./index.module.css";

function ResultBox(props) {
  const { product } = props;
  if (product) {
    if (window.screen.width > 700) {
      return (
        <div className={styles["result-div"]}>
          <div className={styles["photo-and-link"]}>
            <img
              src={product.image_url?.[0]}
              className={styles["product-img"]}
              alt=""
            />
            <a
              href={product.web_url}
              className={styles["store-link"]}
              target="_blank"
              rel="noreferrer"
            >
              See in store
            </a>
          </div>
          <div className={styles["product-info"]}>
            <h2>{product.title}</h2>
            <p>
              Price: {product.retail_price / 100}
              {product.price_currency}
            </p>
            <p>Brand: {product.brand}</p>
            <p>{product.product_description}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles["result-div"]}>
          <div className={styles.information}>
            <h2>{product.title}</h2>
            <img
              src={product.image_url?.[0]}
              className={styles["product-img"]}
              alt=""
            />
            <p>
              Price: {product.retail_price / 100}
              {product.price_currency}
            </p>
            <p>Brand: {product.brand}</p>
            <p>{product.product_description}</p>
          </div>
          <a
            href={product.web_url}
            className={styles["store-link"]}
            target="_blank"
            rel="noreferrer"
          >
            See in store
          </a>
        </div>
      );
    }
  } else {
    return (
      <div className={styles["result-div"]}>
        <i className={`${styles.icon} fas fa-exclamation-triangle fa-3x`}></i>
        <p className={styles["no-products-message"]}>
          There are no more products with these characteristics
        </p>
      </div>
    );
  }
}

export default ResultBox;
