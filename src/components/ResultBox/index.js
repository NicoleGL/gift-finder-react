import React from "react";
import styles from "./index.module.css";

function ResultBox(props) {
  const { product } = props;
  return (
    <div className={styles["result-div"]}>
      <div className={styles["photo-and-link"]}>
        <img src={product.image_url} className={styles["product-img"]} />
        <a
          href={product.web_url}
          className={styles["store-link"]}
          target="_blank"
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
}

export default ResultBox;
