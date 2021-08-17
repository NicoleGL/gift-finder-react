import React from "react";
import { deselectAll, selectOrDeselect } from "../../functions";
import styles from "./index.module.css";

function CharacterButton(props) {
  const { id, imgSrc, text } = props;

  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context("../../assets/images", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <a
      className={styles["character-button"]}
      id={id}
      onClick={() => {
        const characterButtons = document.getElementsByClassName(
          styles["character-button"]
        );
        deselectAll(characterButtons, styles);
        selectOrDeselect(document.getElementById(id), styles);
      }}
    >
      <img src={images[imgSrc].default} className={styles["character-img"]} />
      <p className={styles["character-text"]}>{text}</p>
    </a>
  );
}

export default CharacterButton;
