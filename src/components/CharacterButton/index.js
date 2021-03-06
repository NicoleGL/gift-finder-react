import React from "react";
import styles from "./index.module.css";

function CharacterButton(props) {
  const { id, imgSrc, text, onClick, style } = props;

  function importAll(r) {
    let images = {};
    r.keys().forEach((item) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context("../../assets/images", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <button
      className={styles["character-button"]}
      id={id}
      onClick={onClick}
      style={style}
    >
      <img
        src={images[imgSrc].default}
        className={styles["character-img"]}
        alt=""
      />
      <p className={styles["character-text"]}>{text}</p>
    </button>
  );
}

export default CharacterButton;
